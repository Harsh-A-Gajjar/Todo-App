import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService';
import TaskList from '../components/Task/TaskList';
import AddTask from '../components/AddTask/AddTask';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = async (id) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    const updatedTask = await updateTask(id, {
      ...taskToToggle,
      isCompleted: !taskToToggle.isCompleted,
    });

    setTasks(
      tasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <AddTask onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={removeTask}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
}

export default Home;
