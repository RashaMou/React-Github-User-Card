import React from 'react'


class UserCard extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className='user-card'>
        <h2>{this.props.userData.login}</h2>
        <p>{this.props.userData.username}</p>
        <img src={this.props.userData.avatar_url} alt={this.props.userData.name}/>
        <a href={this.props.userData.url}>GitHub</a>
        <p>{this.props.userData.bio}</p>
        <p>Available to hire: {this.props.userData.hireable ? 'Yes' : 'No'}</p>
        <p>{this.props.userData.location}</p>
        <p>Number of followers: {this.props.userData.followers}</p>
      </div>
    )
  }

}
    export default UserCard;
  
            
