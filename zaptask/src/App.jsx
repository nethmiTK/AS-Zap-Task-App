import React from 'react';
import { Routes, Route } from 'react-router-dom';
 import TaskBitz from './pages/TaskBitz';
import Zapd from './pages/Zapd';
 import Home from './Home';
  
export default function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/task-bitz" element={<TaskBitz />} />
        <Route path="/zapd" element={<Zapd />} />
      </Routes>
    </div>
  );
}