import React from 'react';

function Feed() {
  const feedStyle={
    width: '30rem',
    height: '90rem',
    border: 'solid',
    borderColor: '#CBCBCB',
    float: 'left',
    position: 'absolute'
  }
  const imageStyles = {
    border: 'solid',
    borderWidth: '3px',
    borderColor: '#fff',
    height:'65px',
    width:'65px',
    backgroundColor: 'red',
    marginLeft: '10px',
    position: 'relative',
    bottom: '-15px'
  }
  const nameStyles = {
    marginLeft: '90px',
    position: 'relative',
    bottom: '60px',
    fontWeight: 'bold'
  }
  const commentBox={
    borderBottom:'solid',
    borderWidth: '1px',
    height: '185px'
  }
  const commentStyles ={
    marginLeft: '90px',
    position: 'relative',
    bottom: '55px',
  }

  return (
  <div style={feedStyle}>
    <div style={commentBox}>
    <img style={imageStyles} src='https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'/>
    <p style={nameStyles}> Name here </p>
    <p style={commentStyles}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div style={commentBox}>
    <img style={imageStyles} src='https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'/>
    <p style={nameStyles}> Name here </p>
    <p style={commentStyles}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div style={commentBox}>
    <img style={imageStyles} src='https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'/>
    <p style={nameStyles}> Name here </p>
    <p style={commentStyles}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div style={commentBox}>
    <img style={imageStyles} src='https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'/>
    <p style={nameStyles}> Name here </p>
    <p style={commentStyles}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div style={commentBox}>
    <img style={imageStyles} src='https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'/>
    <p style={nameStyles}> Name here </p>
    <p style={commentStyles}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>
  )
}

export default Feed;
