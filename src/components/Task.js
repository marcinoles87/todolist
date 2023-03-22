import React, { useState } from 'react'
import Button from './Button'

export default function Task() {

  const [task,setTask] = useState();

  const handleOnChange = (e) => {


  }
  return (
    <div>
        <h1>Add Task</h1>
        <input onChange={handleOnChange}></input>
        <Button></Button>
    </div>
  )
}
