import React, { useEffect, useState } from "react";
import { BsCheckCircle, BsCircle, BsTrash } from "react-icons/bs";
import axios from "axios";
import Create from "./Create";

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
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-white p-4">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-6">📋 My Todo List</h1>
      <div className="bg-green-300 p-4">
  <p>This should have a green background!</p>
</div>

      <Create />

      <div className="w-full max-w-md space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-400 italic">No tasks available</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}
              className="flex items-center justify-between bg-white border-l-4 border-pink-500 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? (
                  <BsCheckCircle className="text-xl text-pink-500" />
                ) : (
                  <BsCircle className="text-xl text-gray-400" />
                )}
                <p className={`text-md ${todo.done ? "line-through text-gray-400" : "text-gray-800"}`}>
                  {todo.task}
                </p>
              </div>
              <BsTrash
                onClick={() => handleDelete(todo._id)}
                className="cursor-pointer text-xl text-gray-400 hover:text-red-500 transition"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
