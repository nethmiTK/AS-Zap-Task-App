import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 shadow-lg">
      <div className="text-white text-xl font-bold">Zap Task</div>
      <div className="flex space-x-4">
        <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Dashboard</a>
        <a href="/task-bitz" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Task Bitz</a>
        <a href="/zapd" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Zapd</a>
      </div>
    </nav>
  );
};

export default Navbar;