import { useState } from 'react';
import api from '../api';

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await api.post('/tasks', { title, description });
      setTitle('');
      setDescription('');
      onTaskCreated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create task.');
    }
  };

  return (
    <div className="task-form">
      <h3>Create New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter task title"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            rows="3"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn-primary">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
