import React from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getBreeds} from '../store/actions'
import Breed from "./Card"
import {Link} from 'react'
import Card from './Card'

export default function Breeds() {
    const dispatch = useDispatch()
    const allBreeds = useSelector((state) => state.breeds)
    useEffect(() => {
        dispatch(getBreeds())
    }, [dispatch])
    //console.log(allBreeds)

function handleClick(e) {
    e.preventDefault();
    dispatch(getBreeds());
}

    return (
        <div>
        <Link to= '/breed'>Crear personaje</Link>
        <h1>DOGS TEAMS</h1>
        <button onClick={e => {handleClick(e)}}>
            Volver a cargar los personajes
        </button> 
        <div>
    
 <select>
    <option value= 'asc'>Ascendente</option>
    <option value= 'desc'>Descendente</option>
</select>
        {
       allBreeds?.map((el) => {
       return (
        <fragment>
 <Link to={'/home' + el.id}>
            <Card  name={el.name} image={el.image.url} />
</Link>
       </fragment>
        );    
   })}
        </div>
    </div> 
   )
}