import React, { useState } from 'react'

export default function Button(props) {

   let [taskDone,setTaskDone] = useState();
   let [element,setElement] = useState([])

const list = document.getElementsByClassName('.tasklist')



   const handleOnClick = (props) => {
    setTaskDone(
      taskDone = props.value
      
    )

    setElement(
      
      console.log(taskDone)
      
    )
    
   }

  return (
    <div>
        <button onClick={handleOnClick}>Add task</button>
        <h1 className='tasklist'>Your daily task:</h1>
        <ul>
          <li>{props.value}</li><button>Done</button>
          <li>{element}</li>        
        </ul>
    </div>
  )
}
