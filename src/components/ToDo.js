import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

  const todosId = todos.id
  console.log(todosId)

  const handleRemove = (item) => {
   
    const tasks = [...todos]
    console.log(tasks)
    const index = tasks.findIndex(task => task.id === item.id)
    const deleteTask = tasks.splice(index , 1)
    console.log(deleteTask)
  }


  

  const handleDone = () => {
 
    
    const x = document.querySelector('.list-element')
    x.classList.add('decor')
  } 



  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li className='list-element' key={todo.id}>{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={handleRemove}>Remove</button></li>
      })}
      </ul>
    </div>
  )
}
