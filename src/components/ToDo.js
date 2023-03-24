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
            return <To text={todo.text} id={todo.id}></To>
          })}

          </ul>
    </div>
  )
}
