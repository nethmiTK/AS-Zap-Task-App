// filepath: d:\Asipiya Internship\zap task app\zaptask\src\App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskBitz from './pages/TaskBitz';
import Zapd from './pages/Zapd';
import './App.css';

export default function App() {
  return (
    <div className="p-10 bg-pink-300 min-h-screen">
      <nav className="flex space-x-4 mb-4">
        <a href="/" className="bg-blue-500 text-white p-2 rounded">Dashboard</a>
        <a href="/task-bitz" className="bg-green-500 text-white p-2 rounded">Task Bitz</a>
        <a href="/zapd" className="bg-red-500 text-white p-2 rounded">Zapd</a>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task-bitz" element={<TaskBitz />} />
        <Route path="/zapd" element={<Zapd />} />
      </Routes>
    </div>
  );
}