import React from 'react';

const SingleComment = (props)=>{
  return(
    <div className='comment'>
      <a href="/" className='avatar'>
        <img alt="Profile Picture" />
      </a>
      <div className='content'>
        <a href="/">
          {props.name}
        </a>
        <div className='metadata'>
            <span className='date'>
              {props.date}
            </span>
        </div>
        <div className='text'>
            YOLO MOFO!!!
        </div>
      </div>
    </div>
  )
}

export default SingleComment;
