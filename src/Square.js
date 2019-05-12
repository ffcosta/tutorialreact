import React from 'react'


export default function Square(props){
  return(
    <button className="square btn btn-light" onClick={props.onClick}>
          {props.value}
        </button>
  )
}