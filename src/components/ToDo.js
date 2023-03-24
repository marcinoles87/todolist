import React, { useState } from 'react'
import To from './To'

import './todo.css'

export default function ToDo({todos}) {

console.log(todos)
console.log(todos.id)
 
  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li key={todo.id}>{todo.text} <button>Add</button></li>
      })}
      </ul>
    </div>
  )
}
