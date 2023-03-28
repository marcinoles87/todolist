import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task ,setTask } ) {

  
  

  const handleRemove = (item) => {

    
    console.log(todos)
    const index = todos.findIndex( (task,i) => task[i] === item[i] )
    const deleteTask = todos.splice(index , 1)
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
