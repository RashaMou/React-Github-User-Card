import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super()
  }
  

  render() {
    return (
      <header>
        <h1>GitHub User Database</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input 
            type='text'
            name='searchTerm'
            // value={this.props.gitHubUser.login}
            onChange={this.props.handleChange}
          />
          <button type='submit'>Search</button>
        </form>
      </header>
    )
  }
}
export default Header;