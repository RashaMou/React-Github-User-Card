import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import history from './history';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gitHubUser: {},
      followers: [],
      searchTerm: '',
      searchResults: []
    }
  }
  
  componentDidMount() {
    axios
    .get('https://api.github.com/users/RashaMou')
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

  // function to change gitHubUser to clicked on follower
 displaySelected = (selected) => {
   this.setState({ // this causes a re-render, so we can call componentDidUpdate to do something with the new state
     gitHubUser: selected
   })
 }

 // displays new gitHubUser and followers on state change
 componentDidUpdate(prevProps, prevState) {
   if(prevState.gitHubUser.login !== this.state.gitHubUser.login) {
     axios
     .get(`https://api.github.com/users/${this.state.gitHubUser.login}`)
     .then(res => {
      this.setState({
        gitHubUser:res.data,
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

 //search onChange
 handleChange = (e) => {
  this.setState({
    searchTerm: e.target.value
  })

 }

 //search handleSubmit 
 handleSubmit =(e) => {
   e.preventDefault();
   axios
    .get(`https://api.github.com/search/users?q=${this.state.searchTerm}`)
    .then(res => {
      console.log('search res', res.data)
      this.setState({
        searchResults: res.data.items, 
        searchTerm: '' //why doesn't this clear the form
      })
      history.push('/searchresults')
    })
   .catch(err => {
      console.log('Error', err.response)
   })  
   
 }
  render() {
    return (
      <div className="App">
        <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Route exact path='/' render={(props) => <Home {...props} userData={this.state.gitHubUser} followers={this.state.followers} displaySelected={this.displaySelected}/>}
        />
        <Route path='/searchresults' render={(props) => <SearchResults {...props} searchResults={this.state.searchResults} displaySelected={this.displaySelected} searchTerm={this.state.searchTerm}/>} />

      </div>
    );
  }
}

export default App;
