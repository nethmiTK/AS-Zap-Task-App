// TaskBitz.js
import { useState } from 'react';
import axios from 'axios';

function TaskBitz() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        axios.post('http://localhost:5000/tasks', { text: newTask, completed: false })
            .then(response => {
                setTasks([...tasks, response.data]);
                setNewTask('');
            });
    };

    return (
        <div className='p-10 bg-pink-300 min-h-screen'>
            <h1 className='text-xl font-bold'>Input Your Task</h1>
            <input 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                className='border p-2 rounded' 
                placeholder='Enter Task' 
            />
            <button 
                onClick={addTask} 
                className='ml-2 bg-blue-500 text-white p-2 rounded'>
                Add Task
            </button>
            <ul>
                {tasks.map(task => (
                    <li key={task._id} className='p-2 border-b'>{task.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskBitz;
