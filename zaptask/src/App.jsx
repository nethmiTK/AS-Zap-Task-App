import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskBitz from './pages/TaskBitz';
import Zapd from './pages/Zapd';
import './App.css';
import Navbar from './components/NavBar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task-bitz" element={<TaskBitz />} />
        <Route path="/zapd" element={<Zapd />} />
      </Routes>
    </div>
  );
}