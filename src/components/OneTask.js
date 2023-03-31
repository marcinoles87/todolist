import React from 'react'

import './todo.css'

export default function OneTask(props) {

  const {task , id} = props
  
  
  console.log(props.id)

  return (
    <>
        <li key={id}> {task}</li><button className='btn-done'>Done</button><button className='btn-remove'>Remove</button>
    </>
  )
}
