
const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    task:String,
    done:Boolean

 
 })
    const TodoModel = mongoose.model('todos', TodoSchema);
    module.exports = TodoModel