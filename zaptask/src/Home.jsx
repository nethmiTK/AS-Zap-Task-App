import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill } from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-pink-100 min-h-screen p-4">
      <h2>Zap Task</h2>
      <Create refreshTodos={fetchTodos} />

      {todos.length === 0 ? (
        <h2>No tasks available</h2>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo._id}>
            <div className="check" onClick={() => handleEdit(todo._id)}>
              <BsCircleFill className="icon" />
              <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsCircleFill
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
