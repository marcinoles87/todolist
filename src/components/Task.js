import React, { useState } from 'react'
import ToDo from './ToDo'

import './task.css'



export default function Task(props) {

  let [task, setTask] = useState('');
  let [todos , setTodos] = useState('');
  let [id , setId] = useState();


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
      id: id}
    ])

    
    
  }


  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange}></input><button onClick={submitTodos}>Add Task</button>
        {todos.map( todo => <li> {todo.task} and  {todo.id}</li> )
      }
        
    </div>
  )
}
