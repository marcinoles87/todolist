import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

 let [index , setIndex] = useState([])

  setIndex = (item) => {

  
   
    const tasks = [...todos]
    console.log(tasks)
    const index = tasks.findIndex( (task,i) => task[i] === item[i] )
    const deleteTask = tasks.splice(index , 1)
    console.log(deleteTask)
    console.log(tasks)
   
  }


  

  const handleDone = () => {
 
    
    const x = document.querySelector('.list-element')
    x.classList.add('decor')
  } 



  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li className='list-element' key={todo.id}>{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={setDodos()}>Remove</button></li>
      })}
      </ul>

      {index}
    </div>
  )
}
