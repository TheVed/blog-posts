import React from 'react';
import ReactDOM from 'react-dom/client';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
  return(
    <div className='ui comments'>
      <UserCard>
        <SingleComment name='Alex' date='Today at 5:00 PM' />
      </UserCard>
      <UserCard>
        <SingleComment name='Jack' date='Today at 6:00 PM' />
      </UserCard>
      <UserCard>
      <SingleComment name='Sarah' date='Today at 7:00 PM' />
      </UserCard>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <App />
);
