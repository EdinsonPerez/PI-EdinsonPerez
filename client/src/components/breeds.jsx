import React from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchBreeds} from '../store/actions'
import Breed from "./breed"




export default function Breeds() {
    let breeds = useSelector((state) => state.filteredBreeds)
     let dispatch = useDispatch()
    useEffect(() => {
    dispatch(fetchBreeds())
     }, [])
    console.log(breeds)

       return  <div>
         <div>
         <h1>World Dogs</h1>
         
         </div>
        {breeds.map((e)=> {
           return  <Breed key={e.id} name={e.name} image={e?.image || e?.url?.image}  />
        })}
        </div>
    }