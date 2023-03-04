import React, { useState } from 'react'

export const UseStateHook = () => {
    const [word,setWord] = useState('Eat')
    function upDate(){
        if (word=='Eat')
        {
            setWord('Drink')
        } 
        else{
            setWord('Eat')
        }
    }

  return (
    <div>
        {word + 'resturent'}
        <button onClick={upDate}>On Click</button>
    </div>

  )
}
