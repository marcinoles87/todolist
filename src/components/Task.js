import React, { useState } from 'react'
import ToDo from './ToDo'

import './task.css'


export default function Task() {

  let [task,setTask] = useState();

  const handleOnChange = (e) => {
    setTask(
      task = e.target.value
    )

  }
  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange}></input>
        <ToDo value={task}></ToDo>
    </div>
  )
}
