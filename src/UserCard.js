import React from 'react';

const UserCard = (props)=>{
  return(
    <div className='ui card'>
      <div className='content'>
        <div className='header'>
          Alex Tanner
          <div className='description'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
