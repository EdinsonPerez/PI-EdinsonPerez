import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import  { getDetail} from "../store/actions";
import { useEffect } from "react";

export default function BreedDetail(props) {
    console.log(props)
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
        
        },[dispatch])

        const myBreed = useSelector ((state)=> state.detail)

    return (
    <div>
{
   myBreed.length>0 ?
      <div>
        <h1>Soy {myBreed[0].name}</h1>
        <img src={myBreed[0].image.url? myBreed[0].image.url : myBreed[0].image}/>
        <h2>height_min: {myBreed[0].height_min}</h2>
        <h2>height_max: {myBreed[0].height_max}</h2>
        <h2>weight_min: {myBreed[0].weight_min}</h2>
        <h2>weight_max: {myBreed[0].weight_max}</h2>
        <h2>life_span: {myBreed[0].life_span}</h2>
        <h4>temperament: {!myBreed[0].createdInDb? myBreed[0].temperament + ' ' : myBreed[0].temperaments.map(e => e.name + (' '))}</h4>

        </div> : <p>Loading....</p>
    }
    <Link to='/home'>
        <button>Volver</button>
    </Link>
    </div>
    )
}