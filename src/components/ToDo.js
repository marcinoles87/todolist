import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

 

  const handleRemove = (item) => {

    const todosId = todos[1].id
    const todosId1 = todos[0].id
    console.log(todosId)
    console.log(todosId1)
   
    const tasks = [...todos]
    console.log(tasks)
    const index = tasks.findIndex(task => task.id === todosId1)
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
