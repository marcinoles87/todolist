import React from 'react'

import './todo.css'

export default function OneTask(props) {

  const keyLi = Math.random()*100
  const task = props.task
  console.log(props.id)
  return (
    <>
        <li key={keyLi}> {task}</li><button className='btn-done'>Done</button><button className='btn-remove'>Remove</button>
    </>
  )
}
