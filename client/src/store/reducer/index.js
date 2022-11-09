import { ASCENDENTE, HIGHER } from "../../constantes/sort";
import  { FETCH_BREEDS, SEARCH_BREEDS, SORT, SORT_BYWEIGHT }  from "../actions";

const initialState ={
    breeds: [],
   filteredBreeds: []
}

 export default function reducer (state = initialState, action) {
     switch(action.type) {
        case FETCH_BREEDS:
            return{
                ...state,
                breeds: action.payload,
                filteredBreeds: action.payload
            }
        case SEARCH_BREEDS:
            return{
                ...state,
                filteredBreeds: action.payload
            }
        case SORT:
            let orderedBreeds = [...state.breeds]
            orderedBreeds = orderedBreeds.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase() ) {
                return action.payload === ASCENDENTE ? -1 : 1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase() ) {
                return action.payload === ASCENDENTE ? 1 : -1;
              }
              return 0;
            })
            return {
                ...state,
                filteredBreeds: [...orderedBreeds]

            }
            case SORT_BYWEIGHT:
             let orderedByWeight = [...state.breeds]
             orderedByWeight = orderedByWeight.forEach((b) => {
  if (typeof b.weight === 'string') {
      let range = b.weight.split('- ')
      let promedy = (parseInt(range[0]) + parseInt(range[1])) / 2
      b.weight = promedy
      console.log(b.weight)
  }
                })

                orderedByWeight = orderedByWeight.filter((b) => b.weight !== null)
                orderedByWeight = orderedByWeight.sort((a, b) => {
                    if (a.weight < b.weight) {
                    return action.payload === HIGHER ? -1 : 1;
                  }
                  if (a.weight > b.weight ) {
                    return action.payload === HIGHER ? 1 : -1;
                  }
                  return 0;
                })
                return {
                    ...state,
                    filteredBreeds: [...orderedByWeight]
              
                  
               }
                default:
                    return state
 
        }

 }
    