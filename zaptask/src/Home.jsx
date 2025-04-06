 import react, { useEffect } from "react";
import Create from "./Create";
import React, { useState } from "react";
import axios from "axios";
 function Home() {
    const[todos, setTodos] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3001/get')
         .then(result => setTodos(result.data))
            .catch(err => console.log(err))

         },[])
 

    return (
      <div className="bg-pink-100 min-h-screen p-4">
                     <h2>Zap task</h2>

             <Create/>
             {
                todos.length === 0 ? 
                    <div className="text-gray-500">No tasks available</div>:
             todos.map(todo => (<div>
                {todo.task}
      </div>
    ))
 }
 </div>
    );
  }
 export default Home;