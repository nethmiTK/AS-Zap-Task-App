import React, { useEffect, useState } from "react";
import { BsCheckCircle, BsCircle, BsTrash } from "react-icons/bs";
import axios from "axios";
import './Home.css';  // Use the new CSS

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios.put("http://localhost:3001/update/" + id)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/delete/" + id)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleAddTask = () => {
    if (task.trim() === "") return;
    axios.post("http://localhost:3001/add", { task })
      .then(() => {
        setTask("");
        setShowForm(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app-container">
      <div className="motivational-quotes">
        <p>🔥 ZAP Task – Ignite Your Productivity</p>
      </div>

      <h1 className="title">ZAP TASK</h1>

      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-task-btn">
          Add Task
        </button>
      )}

      {showForm && (
        <div className="add-task-form">
          <input
            type="text"
            value={task}
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
            className="add-task-input"
          />
          <button
            onClick={handleAddTask}
            className="add-task-submit"
          >
            Submit
          </button>
        </div>
      )}

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="no-tasks">No tasks available</p>
        ) : (
          todos.map((todo) => (
            <div key={todo._id} className="todo-item">
              <div
                className="task-content"
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? (
                  <BsCheckCircle className="icon" />
                ) : (
                  <BsCircle className="icon" />
                )}
                <p className={todo.done ? "task-done" : ""}>
                  {todo.task}
                </p>
              </div>
              <BsTrash
                onClick={() => handleDelete(todo._id)}
                className="icon delete-icon"
              />
            </div>
          ))
        )}
      </div>

      <div className="second-section">
        <h2>Stay on Track with ZAP Task</h2>
        <p>Enhance your productivity, keep your focus, and manage your tasks with ease!</p>
      </div>
    </div>
  );
}

export default App;
