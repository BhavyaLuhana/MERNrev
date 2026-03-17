import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h1>My name is, {props.name}</h1>
      <img id='user-image' src='bhavya'></img>
      <p className='description'>My name is Radha, i am queen of the world</p>
    </div>
  )
}

export default UserCard;
