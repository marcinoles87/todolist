import React, { useState } from 'react'
import ToDo from './ToDo'

import './task.css'


export default function Task() {

  let [task,setTask] = useState();
  let [todos,setDodos] = useState([])

  const handelOnClick = () => {
    console.log('dziala')
    
  }

  const handleOnChange = (e) => {
    setTask(e.target.value)

  }

  const submitTodos = (e) => {
    e.preventDefault();
    setDodos([
      ...todos , {text : task , completed:false,}
    ])

    console.log(todos)
  }
  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange}></input><button onClick={submitTodos} className='btn-add'>Add</button>
        <ToDo todos={todos}></ToDo>
    </div>
  )
}