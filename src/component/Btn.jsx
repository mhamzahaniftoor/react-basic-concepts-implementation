import React from 'react'

const Btn = (props) => {
    
    const trigger = () => {
      return (
        console.log('clicked')
      )
    }
    
  return (
    <>
    <button onMouseOver={trigger}>
        <h1>{props.title}</h1>
    </button>
    </>
  )
}

export default Btn