import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
  return(
    <div className='search-results'>
      {props.searchResults.map(result => {
        return(
          <div>
            <img src={result.avatar_url} alt={result.login}/>
            <p>{result.login}</p>
            <Link to='/'><a onClick={() => props.displaySelected(result)}>View User Card</a></Link>
            <a href={result.html_url}>GitHub</a>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResults; 