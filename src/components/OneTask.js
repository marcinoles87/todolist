import { useState } from 'react' 
import React from 'react'

import './todo.css'

export default function OneTask(props) {

  

  const {task , id , todos , setTodos , todo } = props

  
 const handleRemove = (e) => {

  setTodos( todos.filter( el => el.id !== todo.id))
  
 }

 const handleDone = (e) => {


  const val = e.target.value
  console.log(val)
  console.log(task)


 }
  return (
    <>
        
        <li key={id}> {task}</li><button className='btn-done' onClick={handleDone} id={id} value={task}>Done</button><button id={id}  onClick={handleRemove} className='btn-remove'>Remove</button>
      
    </>
  )
}
