import React from 'react';

class FollowerCard extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className='follower-card' 
      onClick={() => this.props.displayFollower(this.props.followerData)}>
        <h3>{this.props.followerData.login}</h3>
        <img src={this.props.followerData.avatar_url} alt={this.props.followerData.login} />
        <a href={this.props.followerData.html_url}>GitHub</a>
      </div>
    )
  }
}
export default FollowerCard;