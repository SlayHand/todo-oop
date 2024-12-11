import { Todo } from '../models/todo.js'

class todoController {
    constructor(){
        //hold todo objects in array
        this.TODOS=[]
    } 

createTodo(req, res){
    //get data from POST request
    const task =req.body.task
    //create new object via Todo model
    //model constructor uses uniq id and taks name as parameter
    const newTodo = new Todo(Math.random().toString(), task)
    //add new todo to todos array
    this.TODOS.push(newTodo)
    //create a correct response
    res.json({
        message: 'create new todo object',
        newTask: newTodo
    })
    }
    getTodos(req, res){
        res.json({tasks: this.TODOS})
    } 
}

export const TodoController = new todoController()