import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchBreeds} from '../store/actions'
import Breed from "./breed"
export default function Breeds() {
    let breeds = useSelector((state) => state.breeds)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBreeds())
    }, [])
    console.log(breeds)
    return <div>
        {breeds.map((breed) => {
        return <Breed name={breed.name} image={breed.image}/>
        })}
    </div>

}