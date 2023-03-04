import React, { useState } from 'react'

export const StatefulComponent = () => {
    const[state,setState] = useState('Hello');
  return (
    <div>StatefulComponent {state}</div>// render text using some variable
  )
}
