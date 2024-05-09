const addTodo = (req , res)=>{
    res.status(200).send({message: 'todo added successfully'})
}


module.exports = {addTodo}