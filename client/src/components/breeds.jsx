import React from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchBreeds} from '../store/actions'
import Breed from "./Card"
import {Link} from 'react'
import Card from './Card'

export default function Breeds() {
    let breeds = useSelector((state) => state.breeds)
    console.log(breeds)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBreeds())
    }, [])
    
    

// function handleClick(e) {
//     e.preventDefault();
//     dispatch(fetchBreeds());
    return 
        <div>
        {/* <Link to= '/breed'>Crear personaje</Link>
        <h1>DOGS TEAMS</h1>
        <button onClick={e => {handleClick(e)}}>
            Volver a cargar los personajes
        </button>  */}

{breeds.map((breed)=> {
    return <Breeds name={breed.name} image={breed.image}/>
})}


        </div>
    
    {/* <select>
    <option value= 'asc'>Ascendente</option>
    <option value= 'desc'>Descendente</option>
    </select>
        {
       breeds?.map((el) => {
       return (
        <fragment>
    <Link to={'/home' + el.id}>
            <Card  name={el.name} image={el.image.url} />
    </Link>
       </fragment>
        );    
    })}
        </div>
    </div>  */}
   {/* </div> ) */}
//}

}