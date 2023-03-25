import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

  const handleRemove = () => (

    
        todos.splice(0,1)
        
  )

  const handleDone = () => {
    todos.map( (todo) => {
      return todo.style.textDecoration = "line-through"
    })
  }



  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li key={todo.id}>{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={handleRemove}>Remove</button></li>
      })}
      </ul>
    </div>
  )
}
