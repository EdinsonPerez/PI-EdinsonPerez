import React from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchBreeds} from '../store/actions'
import Breed from "./breed"
import {handleClick} from "react"
import SearchBar from './SearchBar';



export default function Breeds() {
    let breeds = useSelector((state) => state.breeds)
     let dispatch = useDispatch()
    useEffect(() => {
    dispatch(fetchBreeds())
     }, [])
    //console.log(breeds)

       return  <div>
         <div>
         <h1>World Dogs</h1>
         <SearchBar path='/home' component={Breeds} />
         </div>
        {breeds.map((breed)=> {
           return  <Breed key={breed.id} name={breed.name} image={breed.image} />
        })}
        </div>
    }