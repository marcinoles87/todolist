import React, { useState } from 'react'

export default function Button(props) {

   let [taskDone,setTaskDone] = useState();

const list = document.getElementsByClassName('.tasklist')

console.log(list)

   const handleOnClick = () => {
    setTaskDone(
      taskDone = props.value
    )

    const listElement = document.createElement('li')
    listElement.innerText(taskDone)
    console.log(listElement)
    
   }

  return (
    <div>
        <button onClick={handleOnClick}>Add task</button>
        <h1 className='tasklist'>Your daily task:</h1>
        <ul>
          <li>{props.value}</li>
        </ul>
    </div>
  )
}
