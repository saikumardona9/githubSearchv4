import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Search.scss';


const Search = () => {

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => setUsers(json))
  }, [])

  const getSearchKey = (e) => {
    setQuery(e.target.value);
  }

  return(
    <section className="search-wrap">
      <h1>Search gitHub User</h1>
      <form>
        <input type="text" className="search-field" placeholder="Search.." autoFocus onKeyUp={getSearchKey} name="search" autoComplete="off" />
        <ul className="search-dropdown">
        {
            users.filter((val=>{
            if(query === ""){
              return null;
            } else if(val.username.toLowerCase().includes(query.toLowerCase())){
              return val
            }
          })).map((val, key) =>{
            return (
              <li key={val.id}>{val.username}</li>
            )
          })
        }
        </ul>
      </form>
    </section>
  )
}

export default Search;
