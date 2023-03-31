import React from 'react'

export default function OneTask(props) {

  const keyLi = Math.random()*100
  const task = props.task
  return (
    <div>
        <li key={keyLi}>{props.task} i {props.id} {task}</li>
    </div>
  )
}
