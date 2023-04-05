import { useState } from 'react' 
import React from 'react'

import './todo.css'

export default function OneTask(props) {

  

  const {task , id , todos , setTodos , todo , completed, setCompleted} = props



  
 const handleRemove = (e) => {

  setTodos( todos.filter( el => el.id !== todo.id))
  
 }

 const handleDone = (e) => {

 console.log(todos)
 const el = todos.map(el => el.completed ===!e.completed)
 const done = todos.find( doneEl => doneEl !== false)
 const newTab = todos.forEach(element => { 
  element.completed = true
  
 });

 console.log(newTab)
 console.log(done)

 console.log(el)

 setCompleted( (prev => !prev)
  
 )

 
 }



  return (
    <>
        
        <li key={id}> {task}</li><button className='btn-done' onClick={handleDone} id={id} >Done</button><button id={id} value={task} onClick={handleRemove} className='btn-remove'>Remove</button>

    </>
  )
}
