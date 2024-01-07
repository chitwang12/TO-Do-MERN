// mongodb+srv://CG_Personal:Chitwan0211@cluster0.1mg6bhi.mongodb.net/todos

// Todo{
//     title:String,
//     description:string,
//     completed:boolean
// }

const mongoose = require('mongoose');
// mongodb+srv://CG_Personal:Chitwan0211@cluster0.1mg6bhi.mongodb.net/todos
mongoose.connect("mongodb+srv://CG_Personal:Chitwan0211@cluster0.1mg6bhi.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title:String,
    description:String ,
    completed:Boolean
})


const todo = mongoose.model('todos',todoSchema);
module.exports = {todo};