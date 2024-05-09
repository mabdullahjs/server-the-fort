require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo.routes');

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json());

//todo route
app.use('/api/v1/todo' , todoRoutes);



app.get('/', (req, res) => {
    res.send('Hello world!')
})


mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
}

connectDB().then(() => {
  app.listen(process.env.PORT)
})

module.exports = app;
