import React, { useState } from 'react'

export default function Button(props) {

   let [taskDone,setTaskDone] = useState();

const list = document.getElementsByClassName('.tasklist')



   const handleOnClick = () => {
    setTaskDone(
      taskDone = props.value
    )
    const text = document.createTextNode('sss')
    const listElement = document.createElement('li')
    listElement.appendChild(text)
    list.appendChild(listElement)
    
    
    
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
