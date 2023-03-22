import React, { useState } from 'react'
import Button from './Button'

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
        <Button value={task}></Button>
    </div>
  )
}
