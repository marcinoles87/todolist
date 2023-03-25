import React, { useState } from 'react'

import './todo.css'

export default function ToDo({todos}) {

  const handleRemove = () => {
    
    const removeItem = todos.filter( (todo) => {
      return todo != todo.id
    })
    console.log(removeItem)
  }


  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li key={todo.id}>{todo.text} <button className='btn-add'>Add</button><button className='btn-done' onClick={handleRemove}>Done</button></li>
      })}
      </ul>
    </div>
  )
}
