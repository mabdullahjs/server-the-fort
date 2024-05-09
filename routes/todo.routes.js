const express = require('express');
const { addTodo, getAllTodo, getSingleTodo } = require('../controllers/todo.controllers');

const router = express.Router();

router.post('/' , addTodo);
router.get('/' , getAllTodo);
router.get('/:id' , getSingleTodo);



module.exports = router


