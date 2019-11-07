import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
  return(
    <div className='search-container'>
      <ul>
      {props.searchResults.map(result => {
        return(
          <Link to='/'>
            <li onClick={() => {
              props.displaySelected(result)}}>
              <img src={result.avatar_url} className='results-img' alt={result.login}/>  
              <p className='is-size-4'>
              @{result.login}</p>
            </li>
          </Link>
        )
      })}
      </ul>
    </div>
  )
}

export default SearchResults; 
