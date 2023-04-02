import React, { useState } from 'react'

export default function TaskDone(props) {
    
  const {task , id , todos , setTodos , todo} = props


  let [done , setDone] = useState([])

const handleCl = () => {
  
  setDone = ([...done] , {
    text : task ,
    id : id ,
    completed : false

  })
}
    

  return (
    <div>
      <button onClick={handleCl}>add</button>
        <ul>Task Done</ul>
        {done.map( (element) => <li> {element.text}</li> )}
    </div>
  )
}
