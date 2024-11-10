import { useState } from 'react';

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
