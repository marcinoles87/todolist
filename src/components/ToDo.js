import React, { useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

  const handleRemove = () => {
    
    const arrayToDo = todos.map( (todo) => {
      let x = todo.id
      if(x === todo.id){
       
       arrayToDo.pop()
      }
    })

  
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
