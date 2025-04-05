import React from 'react';
import { Routes, Route } from 'react-router-dom';
 import TaskBitz from './pages/TaskBitz';
import Zapd from './pages/Zapd';
import './App.css';
import TaskPage from './pages/TaskPage';
 
export default function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/task-bitz" element={<TaskBitz />} />
        <Route path="/zapd" element={<Zapd />} />
      </Routes>
    </div>
  );
}