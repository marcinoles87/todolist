import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

  
  const handleRemove = () => {

    
    // todos.filter(filterById)

    
  }

  const filterById = (item) => {
   
    const tasks = [...todos]
    const index = tasks.findIndex(task => task.id === item.id)
    tasks.splice(index)
    console.log(tasks ,1)
  }


  

  const handleDone = () => {
 
    
    const x = document.querySelector('.list-element')
    x.classList.add('decor')
  } 



  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li className='list-element' key={todo.id}>{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={filterById}>Remove</button></li>
      })}
      </ul>
    </div>
  )
}
