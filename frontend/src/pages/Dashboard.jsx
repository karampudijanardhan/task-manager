import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import TaskForm from '../components/TaskForm.jsx';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
      setError('');
    } catch (err) {
      if (err.response?.status === 401) {
        navigate('/');
      } else {
        setError('Failed to fetch tasks.');
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Task Dashboard</h1>
      </div>

      <div className="dashboard-content">
        <TaskForm onTaskCreated={fetchTasks} />

        <div className="task-list">
          <h3>Your Tasks</h3>

          {error && <div className="error-message">{error}</div>}

          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Create your first task above!</p>
          ) : (
            <div className="tasks">
              {tasks.map((task) => (
                <div key={task._id} className="task-item">
                  <div className="task-content">
                    <h4>{task.title}</h4>
                    {task.description && <p>{task.description}</p>}
                  </div>

                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;