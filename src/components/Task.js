import React, { useState } from 'react'


import './task.css'

import List from './List';



export default function Task(props) {

  let [task, setTask] = useState('');
  let [todos , setTodos] = useState([]);
  let [id , setId] = useState();
  let [completed , setCompleted] = useState(false)
 


 const handleOnChange = (e) => {
    setTask(
      task = e.target.value
    )
 }

  const submitTodos = (e) => {
    e.preventDefault()

    setId(
      id = Math.floor(Math.random()*100)
    )

    console.log(id)


    setTodos([...todos , { 
      text : task , 
      id: id , 
      completed ,
      date : Date().slice(7)
    }])

    setTask(
      task = ''
    )

    if(todos.length > 2) {
      setCompleted(
        completed = true
      )
    }

  }






 

  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange} value={task}></input><button onClick={submitTodos}>Add Task</button>
        
        <ul>
          {todos.map( (todo) => {
            return <List key={todo.id} id={todo.id} task={todo.text} todos={todos} setTodos={setTodos} todo={todo} date={todo.date} setCompleted={setCompleted} ></List>
          })}
          
        </ul>

        <h1> Done Task</h1>
          {completed ? "cos kest" : "brak elementow ukonczonych"}
      
      
      
        
    </div>

  )
}
