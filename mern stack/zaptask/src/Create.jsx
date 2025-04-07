import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    axios.post("http://localhost:3001/add", { task })
      .then(() => {
        setTask("");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-80"
      />
      <button
        onClick={handleAdd}
        className="bg-black text-white px-4"
      >
        Add
      </button>
    </div>
  );
}

export default Create;
