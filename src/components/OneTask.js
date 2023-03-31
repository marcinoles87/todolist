import React from 'react'

export default function OneTask(props) {

  const task = props.todos.map()
  return (
    <div>
        <li>{props.task} i {props.id}</li>
    </div>
  )
}
