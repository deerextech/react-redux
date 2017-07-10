import React from 'react';

const UserMap = (props) =>(
  <div className='box'>
    <img src={props.user.picture.thumbnail} />
    <span>{props.user.login.username}</span>
  </div>
)


export default UserMap;
