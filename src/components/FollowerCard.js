import React from 'react';

class FollowerCard extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className='follower-card card' 
      onClick={() => this.props.displaySelected(this.props.followerData)}>
        <h3>{this.props.followerData.login}</h3>
        <img src={this.props.followerData.avatar_url} alt={this.props.followerData.login} />
        <a href={this.props.followerData.html_url}><i class="fab fa-github"></i>  {this.props.followerData.login}</a>
      </div>
    )
  }
}
export default FollowerCard;