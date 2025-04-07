import React, { useEffect, useState } from "react";
import { BsCheckCircle, BsCircle, BsTrash } from "react-icons/bs";
import axios from "axios";
import Create from "./Create";
import './Home.css';  // Use the updated CSS file

function App() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      {/* Animated motivational quotes */}
      <div className="motivational-quotes">
        <p>🔥 ZAP Task – Ignite Your Productivity</p>
        <p>"Turn chaos into clarity, one task at a time."</p>
        <p>⚡ ZAP It. Done.</p>
        <p>"Every task checked off is a step closer to your goals. Stay sharp. Stay focused. Stay ZAP."</p>
        <p>✅ Minimal Effort. Maximum Results.</p>
        <p>"Productivity doesn't have to be complicated. With ZAP Task, it's clean, quick, and effective."</p>
        <p>🚀 Task Today. Triumph Tomorrow.</p>
        <p>"Small wins add up. Let ZAP Task help you build momentum and stay on track."</p>
        <p>🎯 Your Focus Partner</p>
        <p>"Distractions are everywhere. ZAP Task helps you focus on what matters most."</p>
      </div>

      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <Create />

      <div className="w-full max-w-md space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}
              className="flex items-center justify-between bg-black text-white p-3 rounded"
            >
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? (
                  <BsCheckCircle className="text-xl" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
                <p className={todo.done ? "line-through" : ""}>
                  {todo.task}
                </p>
              </div>
              <BsTrash
                onClick={() => handleDelete(todo._id)}
                className="cursor-pointer text-xl hover:text-red-500"
              />
            </div>
          ))
        )}
      </div>

      {/* Second section with a dark box and stroke */}
      <div className="second-section">
        <h2>Stay on Track with ZAP Task</h2>
        <p>Enhance your productivity, keep your focus, and manage your tasks with ease!</p>
      </div>
    </div>
  );
}

export default App;
