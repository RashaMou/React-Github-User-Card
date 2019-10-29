import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';
import './App.css';

class App extends React.Component {
  state = {
    gitHubUser: {},
    followers: []
  }
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/xarfo')
    .then(res => {
      this.setState({
        gitHubUser:res.data
      })
    })
      .catch(err => {
        console.log('Error', err)
      })
      

      axios
        .get(`https://api.github.com/users/${this.state.gitHubUser.login}/followers`)
        .then(res => {
          this.setState({ followers: res.data
          })
        })
        .catch(err => {
          console.log('Error', err)
        })
    
  }

 displayFollower = (follower) => {
   this.setState({ // this causes a re-render, so we can call componentDidUpdate to do something with the new state
     gitHubUser: follower
   })
 }

 componentDidUpdate(prevProps, prevState) {
   if(prevState.gitHubUser.login !== this.state.gitHubUser.login) {
     axios
     .get(`https://api.github.com/users/${this.state.gitHubUser.login}`)
     .then(res => {
       console.log('new state', res.data)
      this.setState({
        gitHubUser:res.data
      })
    })
     .catch(err => {
      console.log('Error', err)
    })
    axios
     .get(`https://api.github.com/users/${this.state.gitHubUser.login}/followers`)
     .then(res => {
      this.setState({
        followers: res.data
      })
    })
     .catch(err => {
      console.log('Error', err)
    })


   }  
 }


  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.gitHubUser}/>
        <FollowerList followers={this.state.followers} displayFollower={this.displayFollower}/>
      </div>
    );
  }
}

export default App;
