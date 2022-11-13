import React from 'react';
import {useState} from 'react';
import { searchBreeds } from '../store/actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    let dispatch = useDispatch()
    const[search, setSearch] = useState("")
    
    function onInputChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
        
    }
    function onSubmit(e) {
        e.preventDefault();
        dispatch(searchBreeds(search))
    }
    
return <div>
        <h2>Henry PI APP</h2>
        <input
        type = 'text'
        placeholder = "Buscar..."
        onChange = {(e) => onInputChange(e)}/>
            <button type='submit' onClick={(e) => onSubmit(e)}>Buscar</button>
</div>
}

