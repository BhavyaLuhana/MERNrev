import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h1>My name is, {props.name}</h1>
      <img id='user-image' src='bhavya'></img>
      <p className='description'>{props.desc}</p>
    </div>
  )
}

export default UserCard;
