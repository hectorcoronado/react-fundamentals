// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'


const Box = (props) => {
  let styles = {
    fontStyle: 'italic',
    border: '1px solid #333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }

  if (props.size === 'small') {
    styles = {
      width: '90px',
      height: '90px',
      ...styles
    }
  } else if (props.size === 'medium') {
    styles = {
      width: '180px',
      height: '180px',
      ...styles
    }
  } else {
    styles = {
      width: '270px',
      height: '270px',
      ...styles
    }
  }

  return (
    <div size style={{...props.style, ...styles}}>{props.children}</div>
  )
}

const smallBox = <Box size='small' style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size='medium' style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size='large' style={{backgroundColor: 'orange'}}>large orange box</Box>


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
