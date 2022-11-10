import React from 'react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchBreeds, filterByBreeds} from '../store/actions'
import Breed from "./breed"
import Paginado from './Paginado';




export default function Breeds() {
   let dispatch = useDispatch()
    let breeds = useSelector((state) => state.filteredBreeds)
//const allCharacters = useSelector ((state) => state.characters)
const [currentPage,setCurrentPage] = useState(1)
const [charactersPerPage,setCharactersPerPage] = useState(8)
const indexOfLastCharacter = currentPage * charactersPerPage //8
const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage //0
const currentCharacters = breeds.slice(indexOfFirstCharacter, indexOfLastCharacter)

const paginado = (pageNumber) => {
setCurrentPage(pageNumber)

}
    useEffect(() => {
    dispatch(fetchBreeds())
     }, [])
    console.log(breeds)

 
    
             
    return ( 
       <div>
          <Paginado
          charactersPerPage={charactersPerPage}
          breeds={breeds.length}
          paginado = {paginado}
          />
        {currentCharacters?.map((e)=> {
           return  (
           <div>
           <Breed key={e.id} name={e.name} image={e?.image || e?.url?.image} temperament={e.temperament}  breed_group={e.breed_group}/>
           </div>
           );
        })}
        </div>
       
       )
    }
    