// App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskBitz from './pages/TaskBitz';
import Zapd from './pages/Zapd';
import './App.css';

function App() {
    return (
        <Router>
            <div className='p-10 bg-pink-300 min-h-screen'>
                <nav className='flex space-x-4 mb-4'>
                    <Link to='/' className='bg-blue-500 text-white p-2 rounded'>Dashboard</Link>
                    <Link to='/task-bitz' className='bg-green-500 text-white p-2 rounded'>Task Bitz</Link>
                    <Link to='/zapd' className='bg-red-500 text-white p-2 rounded'>Zapd</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/task-bitz' element={<TaskBitz />} />
                    <Route path='/zapd' element={<Zapd />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
