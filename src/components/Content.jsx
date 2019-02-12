import React from 'react';
import UserPic from './About/UserPic';
import Bio from './About/Bio';
import Feed from './Feed';


function Content() {
  const mainContainerStyles = {
    display: 'flex',
  }
  const feedStyles ={
    paddingLeft:"15px",

  }

return (

<div style={mainContainerStyles}>
  <div>
    <UserPic/>
    <Bio/>
  </div>
  <div style={feedStyles}>
    <Feed/>
  </div>
</div>
)
}
export default Content
