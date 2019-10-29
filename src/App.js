import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    username: '',
    url: '',
    avatar: '',
    bio: '',
    hireable: true,
    location: '',
    followers: 0
  }
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/RashaMou')
    .then(res => {
      console.log(res)
      this.setState({
        name: res.data.name,
        username: res.data.login,
        url: res.data.html_url,
        avatar: res.data.avatar_url,
        bio: res.data.bio,
        hireable: res.data.hireable,
        location: res.data.location,
        followers: res.data.followers
      })

    })
    .catch(err => {
      console.log('Error', err)
    })
  }

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state}/>
        {/* <FollowerList /> */}
      </div>
    );
  }
}

export default App;
