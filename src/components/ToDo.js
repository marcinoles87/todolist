import React, {  useState } from 'react'
import RemoveElement from './RemoveElement'

import './todo.css'

export default function ToDo({todos , setDodos , task ,setTask } ) {

  let [checked , setChecked] = useState(false)
  
  let [removeItem , setRemoveItem] = useState('')

  const clicker = (e) => {
    console.log('wybrano ' + e.target.checked)
  }

  const handleRemove = (e) => {
    
    console.log(e.target.value)
    const idElement = e.target.value
    const index = todos.findIndex( (id,i) => id[i] === idElement)
    console.log(index)
    const deleteTask = todos.splice(index , 1)
    console.log(deleteTask)
    setDodos(todos)
    setRemoveItem(deleteTask)
    document.querySelector('li').classList.add('decor')
    
  }

  const handleDone = (e) => {
        const x = document.querySelector('.list-element')
    setChecked(
    checked = !checked ,
    checked ? x.classList.add('decor') : null
    )
   
  } 



  return (
    <div className='todo'>
      
      <ul>
      {todos.map( (todo) => {
        return <li className='list-element' key={todo.id} >{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={handleRemove} value={todo.id}>Remove</button></li>
      })}
      </ul>

      <RemoveElement checked={checked} removeItem={removeItem}></RemoveElement>

      
    </div>
  )
}
