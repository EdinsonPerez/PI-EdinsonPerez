import { useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE, HIGHER, LOWER } from "../constantes/sort"
import { sort, filterByBreeds } from "../store/actions"



export default function Order() {
    const dispatch = useDispatch()
   const [order, setOrder] = useState('')
    useEffect(() => {
        dispatch(sort(order))
    }, [order])
        function onSelectChange(e) {
            setOrder(e.target.value)
    }

        function handleFilterBreeds(e){
        dispatch(filterByBreeds(e.target.value))
        console.log(e.target.value)
      }
        
    return<div>
    <select name="select" onChange={onSelectChange}>
    <option value="AlphabeticalOrder">ALPHABETICAL</option>
    <option value={ASCENDENTE}> A   -     Z</option>
    <option value={DESCENDENTE}> Z   -    A</option>
    </select>
    <select>
            <option value="Allbreed">ALL BREEDS CREATE</option>
            <option value="Created">Created</option>
            <option value="Api">API</option>
        </select>

        <select name="select" onChange={onSelectChange}>
            <option value="weigth">WEIGHT</option>
            <option value={HIGHER}>High</option>
            <option value={LOWER}>Low</option>
        </select>

        <select onChange={e => handleFilterBreeds(e)}>
            <option value="All">ALL BREEDS</option>
             <option value="Toy">ACTIVE</option>
             <option value="Terrier">ADAPTABLE</option>
            <option value="Hound">ADVENTUROUS</option>
            <option value="Working">AFFECTIONATE</option>



        </select>

    </div>
    
}