import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super()
  }
  

  render() {
    return (
      <header className='hero is-bold is-primary'>
        <div className='hero-body'>
          <Link to="/"><h1 className='title is-1'>GitHub User Database</h1></Link>
          <form onSubmit={this.props.handleSubmit}>
            <input 
              className='input is-medium'
              type='text'
              name='searchTerm'
              onChange={this.props.handleChange}
              placeholder="...search for user"
              value={this.props.searchTerm}
            />
            <button type='submit' className='button is-medium'>Go!</button>
          </form>
        </div>
      </header>
    )
  }
}
export default Header;