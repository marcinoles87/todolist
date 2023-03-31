import React, { useState } from 'react'
import ToDo from './ToDo'

import './task.css'



export default function Task(props) {

  let [task,setTask] = useState();
  let [todos,setDodos] = useState([])
  let [ide , setId] = useState()


 
 

  const handleOnChange = (e) => {
    setTask(e.target.value)
    setId(Math.floor(Math.random()*200))

  }

  const submitTodos = (e) => {
    e.preventDefault()
    setDodos([...todos , {text : task , completed:false , id: ide}
    ])

    setTask('')
    
    
  }


  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange} value={task}></input><button onClick={submitTodos} className='btn-add'>Add</button>
        <ToDo todos={todos} key={todos.id} setDodos={setDodos} task={task} setTask={setTask} id={ide}></ToDo>
        
    </div>
  )
}
