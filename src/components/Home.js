import React from 'react';
import UserCard from './UserCard';
import FollowerList from './FollowerList';

const Home = (props) => {
  return (
    <div>
      <UserCard userData={props.userData}/>
      <FollowerList followers={props.followers} displaySelected={props.displaySelected}/>
    </div>
  )
}

export default Home;