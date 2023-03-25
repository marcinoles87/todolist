import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

  const handleRemove = () => (

        todos.filter( (todo) => {
          if(todo.id > 1) {
            console.log(todo[1].id)
          }

        })
  )

  const handleDone = (e) => {
    console.log(todos)
    
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
