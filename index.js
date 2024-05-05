const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//global arr
const arr = [];

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// send all todo
app.get('/api/v1/todos', (req, res) => {
    res.send({ todo: arr });
})

// addtodo
app.post('/api/v1/todos', (req, res) => {
    const { title } = req.body;
    if (title.length < 1){
        res.send({message:'please write atleast one character'});
        return
    }
        const obj = {
            title: title,
            id: Date.now()
        }
    arr.push(obj)
    res.send({ message: 'todo added successfully', todo: obj })
});

//delete todo
app.delete('/api/v1/todos/:id' , (req , res)=>{
    const {id} = req.params;
    const index = arr.findIndex((item)=>{
        return item.id == id
    });
    if(index != -1){
        arr.splice(index , 1);
        res.send({
            message:'element deleted succesfully'
        })
        return
    }
    res.status(404).send({message: 'item not found!'})
})

//edit todo
app.put('/api/v1/todos/:id' , (req , res)=>{
    const {id} = req.params
    const {title} = req.body

    const index = arr.findIndex((item)=>{
        return item.id == id
    });

    if(index != -1){
        arr[index].title = title;
        res.send({
            message:'element updated succesfully',
            todo: arr[index]
        })
        return
    }
    res.status(404).send({message: 'item not found!'})


})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//GET
//POST
//PUT
//DELETE
