import { useState } from 'react' 
import React from 'react'

import './todo.css'

export default function OneTask(props) {

  

  const {task , id , todos , setTodos , todo ,done, setDone} = props

  
const newArr = []
  
 const handleRemove = (e) => {

  setTodos( todos.filter( el => el.id !== todo.id))
  
 }

 const handleDone = (e) => {


  const val = e.target.value

  const index = (element => element.text === val)
  const indexDone = todos.findIndex(index)   // znaleziony index 
  const cutElement = todos.splice(indexDone,1)
  console.log(cutElement)  //wyciety element z tablicy o danym indexie
  
  const newA = newArr.push(cutElement)
  console.log(newArr)
  
    setDone([...done , { 
      text : task , 
      id: id , 
      
      
    }])


 }

  return (
    <>
        
        <li key={id}> {task}</li><button className='btn-done' onClick={handleDone} id={id} value={task}>Done</button><button id={id}  onClick={handleRemove} className='btn-remove'>Remove</button>
       
    </>
  )
}
