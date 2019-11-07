import React from 'react'


class UserCard extends React.Component {
  constructor(props) {
    super()
  }
  
  render() {
    return (
      <div className='user card'>
        <div className='card-header'>
          <h2>{this.props.userData.name}</h2>
          <img src={this.props.userData.avatar_url} alt={this.props.userData.name}/>
        </div>
        <div className='card-info'>
          <a href={this.props.userData.url}><i className="fab fa-github"></i>  {this.props.userData.login}</a>
          <p>{this.props.userData.bio}</p>
          {this.props.userData.location ? <p><span className='bold'>Location:</span>{this.props.userData.location}</p> : null}
          <p><span className='bold'>Available to hire:</span> {this.props.userData.hireable ? 'Yes' : 'No'}</p>
          <p><span className='bold'>Number of followers:</span> {this.props.userData.followers}</p>
        </div>
      </div>
    )
  }

}
    export default UserCard;
  
            
