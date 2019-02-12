import React from 'react';

function Header() {
  const buttonStyles = {
    height: '50px',
    width: '130px'
  }
  const headerRightStyles ={
    float: 'right'
  }
  const inputStyles = {
    borderRadius: '20px',
    height: '30px',
    width: '200px',
    marginRight: '30px',
    borderColor: '#399BDA',
    borderWidth: '3px'
  }
  const tweetStyles = {
    borderRadius: '20px',
    height: '30px',
    width: '100px',
    borderColor: '#399BDA',
    borderWidth: '3px'
  }
  return(
    <div>
      <button style={buttonStyles}>Home</button>
      <button style={buttonStyles}>Notifications</button>
      <button style={buttonStyles}>Messages</button>
      <div style={headerRightStyles}>
        <input style={inputStyles} placeholder="   Search"></input>
        <button style={tweetStyles}>Tweet</button>

      </div>
    </div>
  )
}

export default Header;
