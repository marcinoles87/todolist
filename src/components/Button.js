import React, { useState } from 'react'

export default function Button(props) {

   let [taskDone,setTaskDone] = useState();

const list = document.getElementsByClassName('.tasklist')



   const handleOnClick = () => {
    setTaskDone(
      taskDone = props.value
    )
    
   }

  return (
    <div>
        <button onClick={handleOnClick}>Add task</button>
        <h1 className='tasklist'>Your daily task:</h1>
        <ul>
          <li>{props.value}</li><button>Done</button>
        
        </ul>
    </div>
  )
}
