import { useState } from 'react' 
import React from 'react'

import './todo.css'

export default function OneTask(props) {

  

  const {task , id , todos , setTodos , todo  } = props


 
  
 const handleRemove = (e) => {

  setTodos( todos.filter( el => el.id !== todo.id))
  
 }

 const handleDone = (e) => {

  console.log(todo.completed)
//  setTodos( todo.completed !== todo.completed)

 
 }

  return (
    <>
        
        <li key={id}> {task}</li><button className='btn-done' onClick={handleDone} id={id} value={completed}>Done</button><button id={id} value={task} onClick={handleRemove} className='btn-remove'>Remove</button>

    </>
  )
}
