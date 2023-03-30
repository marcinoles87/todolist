import React from 'react'

export default function RemoveElement(props) {
  const {removeItem} = props
  return (
    <div>{props.checked ? '' : 'false'}</div>
  )
}
