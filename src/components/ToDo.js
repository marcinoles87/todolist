import React, { useState } from 'react'

import './todo.css'

export default function ToDo({todos}) {



  return (
    <div className='todo'>
       <ul className='todo-list'>
        {todos.map(todo => {
           return <li>{todo.text} <button className='btn-add'>+</button><button className='btn-done'>done</button></li>
        })}
        </ul>
       
      
        
    </div>
  )
}
