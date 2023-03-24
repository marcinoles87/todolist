import React, { useState } from 'react'
import To from './To'

import './todo.css'

export default function ToDo({todos}) {


  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li key={todo.id}>{todo.text} <button className='btn-add'>Add</button><button className='btn-done'>Done</button></li>
      })}
      </ul>
    </div>
  )
}
