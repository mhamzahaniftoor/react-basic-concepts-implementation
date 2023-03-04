import React from 'react'

const ModeToggler = () => {
  let mode = true;
  let darkMode = <h1>Dark Mode On</h1>;
  let lightMode = <h1>Ligh Mode On</h1>;

  function handleClick() {
    if(mode == true)
    {
      console.log('darkMode')
      darkMode = <h1>Dark Mode On</h1>;
      mode = false; 
    }  else {
      console.log('lightMode')
      let lightMode = <h1>Ligh Mode On</h1>;
      mode = true;
    }
  }
  return (
    <>
    {mode? darkMode : lightMode }
    <button onClick={handleClick}>
      clickMe
    </button>

    </>
  )
}

export default ModeToggler