const express = require('express');
const mongoose=require('mongoose');
const TodoModel = require('./Models/Todo.js');
const cors = require('cors');

 const app = express();
 app.use(cors());
app.use(express.json()); 

const PORT = 3001;

// app.use(cors());
// app.use(express.json()); // middleware to parse JSON
mongoose.connect('mongodb://localhost:27017/test') 
app.get('/get', (req, res) => {
      TodoModel.find({})
      .then(result => res.json(result))
      .catch(err => res.json(err))
   })

app.post('/add', (req, res) => {
    const task  = req.body.task;
    TodoModel.create({ 
      task: task
   })
   .then(result => {res.json(result)})
   .catch(err => {res.json(err)})
})
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
