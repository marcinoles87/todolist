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

  const index = (element => element.text === val)
  const indexDone = todos.findIndex(index)
  const cutElement = todos.splice(indexDone,1)
  console.log(cutElement)
  
  
  
  



 }
  return (
    <>
        
        <li key={id}> {task}</li><button className='btn-done' onClick={handleDone} id={id} value={task}>Done</button><button id={id}  onClick={handleRemove} className='btn-remove'>Remove</button>
      
    </>
  )
}
