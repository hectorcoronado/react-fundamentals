// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  const inputEl = React.useRef()
  // const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')

  const handleChange = e => {
    let inputValue = e.target.value.toLowerCase()
    // const isValid = inputValue === inputValue.toLowerCase()

    // !isValid
    //   ? setError('Username must be lower case')
    //   : setError('')
    setUsername(inputValue)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // let inputValue =  e.target.elements.usernameInput.value
    let inputValue = inputEl.current.value
    onSubmitUsername(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input value={username} onChange={handleChange} ref={inputEl} id='usernameInput' type="text" />
        {/* {error && <label htmlFor='usernameInput' style={{color: 'red'}}>{error}</label>} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
