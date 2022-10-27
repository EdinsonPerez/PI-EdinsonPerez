import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchBreeds} from '../store/actions'

export default function Breeds() {
    let breeds = useSelector((state) => state.breeds)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBreeds())
    }, [])
    console.log(breeds)
    return <div>


    </div>

}