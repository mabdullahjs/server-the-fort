const mongoose = require('mongoose');
const Todo = require('../models/todo.model');


//add todo
const addTodo = async (req , res)=>{
    const {title , email , description} = req.body;
    try{
        const todo = await Todo.create({
            title , email , description
        })
        console.log(todo);
        res.status(200).send({message:'data added succesfully' , todo: todo});
    }catch(error){
        res.send({error:error})
    }
}

// get all todo
const getAllTodo = async(req , res)=>{
    const todos = await Todo.find({});
    res.status(200).send(todos);
}

//get single todo
const getSingleTodo = async (req , res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ error: "No such Todos" });
      }
    const todo = await Todo.findById(id);
    res.status(200).send(todo);
}

// const deleteCourse = async (req, res) => {
//     const { id } = req.params;
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.json({ error: "No such Course" });
//     }
  
//     const Courses = await Course.findOneAndDelete({ _id: id });
  
//     if (!Courses) {
//       return res.json({ error: "No such Course" });
//     }
  
//     res.json(Courses);
//   };
  


// const updateCourse = async (req, res) => {
//     const { id } = req.params;
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.json({ error: "No such Course" });
//     }
  
//     const Courses = await Course.findOneAndUpdate(
//       { _id: id },
//       {
//         ...req.body,
//       }
//     );
  
//     if (!Courses) {
//       return res.json({ error: "No such Course" });
//     }
  
//     res.json(Courses);
//   };


module.exports = {addTodo , getAllTodo, getSingleTodo}