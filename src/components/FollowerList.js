import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = (props) => {
  return (
    <div>
      {props.followers.map(follower => {
        return (
          <FollowerCard followerData={follower} key={follower.id} displayFollower={props.displayFollower}/>
        )
      })}
    </div>
  )
}

export default FollowerList;