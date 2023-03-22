import React, { useState } from 'react'
import Button from './Button'

export default function Task() {

  let [task,setTask] = useState();

  const handleOnChange = (e) => {
    setTask(
      task = e.target.value
    )

  }
  return (
    <div>
        <h1>Add Task</h1>
        <input onChange={handleOnChange}></input>
        <p>{task}</p>
        <Button value={task}></Button>
    </div>
  )
}
