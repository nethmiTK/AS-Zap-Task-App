// Zapd.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function Zapd() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data));
    }, []);

    return (
        <div className='p-10 bg-pink-300 min-h-screen'>
            <h1 className='text-xl font-bold'>Task Completion</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task._id} className='p-2 border-b'>
                        {task.text} - {task.completed ? '✅ Completed' : '⏳ Pending'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Zapd;
