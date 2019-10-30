import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = (props) => {
  return (
    <div>
      {props.followers.map(follower => {
        return (
          <FollowerCard followerData={follower} key={follower.id} displaySelected={props.displaySelected}/>
        )
      })}
    </div>
  )
}

export default FollowerList;