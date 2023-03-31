import React from 'react'

export default function OneTask(props) {

  const task = props.task
  return (
    <div>
        <li>{props.task} i {props.id} {task}</li>
    </div>
  )
}
