import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

//! Simple Nav Bar including SearchBar Component
export function Nav({ setInput, input }) {
  return (
    <div>
        <div>
         <Link to="/home" >
            Home
          </Link>
          <Link to="/create" >
            Create Dog Breed
          </Link>
        </div>
        <SearchBar setInput={setInput} input={input} />
     
    </div>
  )
}

export default Nav