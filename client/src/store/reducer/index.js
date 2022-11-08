import { ASCENDENTE } from "../../constantes/sort";
import  { FETCH_BREEDS, SEARCH_BREEDS, SORT, SORT_WEIGHT }  from "../actions";

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
            // case SORT_WEIGHT:
            //     let orderedBreeds1 = [...state.breeds]
            //     orderedBreeds1 = orderedBreeds1.sort((a, b) => {
            //         if (a.name.toLowerCase() < b.name.toLowerCase() ) {
            //         return action.payload === ASCENDENTE ? -1 : 1;
            //       }
            //       if (a.name.toLowerCase() > b.name.toLowerCase() ) {
            //         return action.payload === ASCENDENTE ? 1 : -1;
            //       }
            //       return 0;
            //     })
            //     return {
            //         ...state,
            //         filteredBreeds: [...orderedBreeds1]
            //     }
                default:
                    return state
 
        }

 }
    