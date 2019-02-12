import React from 'react';

function UserPic() {
const mainStyle= {
  border: 'solid',
  borderColor: '#CBCBCB',
  width: '18.3rem',
  height: '13rem',

}
const topStyle ={
  backgroundColor: '#5197D5',
  height: '7.70rem',
  width: '18.3rem',
  zIndex: '0'
}
const imageStyle = {
  zIndex:'1',
  border: 'solid',
  borderRadius:'20px',
  borderWidth: '3px',
  borderColor: '#fff',
  height:'65px',
  width:'65px',
  backgroundColor: '#5197D5',
  marginLeft: '10px',
  position: 'relative',
  bottom: '45px'
}
const bottomStyle ={
  height: '7.70rem',
  width: '16.3rem',
  bottom: '80px',
  position: 'relative',
}
const nameStyle={
  float: 'right',
  paddingRight: '15px',
  bottom: '56px'
}
const linkStyle={
  position: 'relative',
  bottom: '-7px',
  textAlgin:'center',
  paddingLeft: '13px'

}
const individualLinkStyle={
  marginLeft: '13px',
}
return (
  <div style={mainStyle}>
    <div style={topStyle}></div>
    <img style={imageStyle} src='https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png'></img>
    <div style={bottomStyle}>
      <p style={nameStyle}>Kellie A. Corrigan</p>
      <div style={linkStyle}>
      <a style={individualLinkStyle}>Tweets</a>
      <a style={individualLinkStyle}>Following</a>
      <a style={individualLinkStyle}> Fololowers</a>
      </div>
    </div>
  </div>
)
}

export default UserPic
