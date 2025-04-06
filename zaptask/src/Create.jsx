import React, { useState } from "react";
import axios from "axios";

function Create({ refreshTodos }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(() => {
        setTask("");
        refreshTodos(); // refresh the todo list without reloading the page
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        + Add Task
      </button>
    </div>
  );
}

export default Create;
