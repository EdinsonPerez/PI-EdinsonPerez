import { useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sort } from "../store/actions"


export default function Order() {
    const dispatch = useDispatch()
   const [order, setOrder] = useState('')
    useEffect(() => {
        dispatch(sort(order))
    }, [order])
        function onSelectChange(e) {
            setOrder(e.target.value)
    }
        
    return<div>
    <select name="select" onChange={onSelectChange}>
    <option value="AlphabeticalOrder">ALPHABETICAL</option>
    <option value={ASCENDENTE}> A   -     Z</option>
    <option value={DESCENDENTE}> Z   -    A</option>
    </select>
    <select>
            <option value="Allbreed">ALL BREEDS</option>
            <option value="Created">Created</option>
            <option value="Api">API</option>
        </select>

        <select>
            <option value="weigth">WEIGHT</option>
            <option value="Higher">High</option>
            <option value="Lower">Low</option>
        </select>

        <select>
             <option value="temperament">ALL TEMPERAMENT</option>
        </select>

    </div>
    
}