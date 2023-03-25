import React, { useEffect, useState } from 'react'

import './todo.css'

export default function ToDo({todos , setDodos , task }) {

  const handleRemove = (

    useEffect( () => {
        todos.splice(0,1)
    }, [todos])
  

  )



  return (
    <div className='todo'>
      <ul>
      {todos.map( (todo) => {
        return <li key={todo.id}>{todo.text} <button className='btn-add'>Add</button><button className='btn-done' onClick={handleRemove()}>Done</button></li>
      })}
      </ul>
    </div>
  )
}
