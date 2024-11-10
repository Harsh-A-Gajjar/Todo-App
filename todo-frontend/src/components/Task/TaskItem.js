function TaskItem({ task, onDelete, onToggle }) {
    return (
      <div>
        <h3>
          {task.title} 
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </h3>
        <p>{task.description}</p>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
        />
      </div>
    );
  }
  
  export default TaskItem;
  