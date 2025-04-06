import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    axios
      .post("http://localhost:3001/add", { task })
      .then(() => {
        setTask("");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center gap-2 mb-6">
      <input
        type="text"
        value={task}
        placeholder="Enter a new task..."
        onChange={(e) => setTask(e.target.value)}
        className="bg-white rounded-full px-4 py-2 w-72 shadow-md border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none transition duration-300"
      />
      <button
        onClick={handleAdd}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 py-2 rounded-full shadow-md transition duration-300"
      >
        Add
      </button>
    </div>
  );
}

export default Create;
