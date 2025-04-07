import React, { useState } from "react";

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Create To Do App" },
    { id: 2, task: "Final Project" },
    { id: 3, task: "Meeting" },
    { id: 4, task: "Frontend Connected" },
  ]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="bg-pink-100 min-h-screen p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-pink-700">ZAP TASK</h1>
        <button className="text-pink-500">+ Add Task</button>
      </header>
      <input
        type="text"
        placeholder="Search Task"
        className="w-full p-2 mb-4 border-2 border-pink-500 rounded-md"
      />
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-2 p-2 bg-white rounded-md shadow-md">
            <input type="checkbox" className="mr-2" />
            {task.task}
            <button onClick={() => deleteTask(task.id)} className="text-pink-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
