import { ASCENDENTE, HIGHER } from "../../constantes/sort";
import  { FETCH_BREEDS, SEARCH_BREEDS, SORT, SORT_BY_WEIGHT, FILTER_BY_BREEDS, FILTER_BY_TEMPERAMENTS, FILTER_CREATE, FILTER_BY_WEIGHT_MIN, POST_BREEDS, GET_TEMPERAMENTS  }  from "../actions";

const initialState ={
    breeds: [],
   filteredBreeds: [],
   temperaments: []
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
        case FILTER_CREATE:
            const allCreate = [...state.breeds]
            const filteredBreeds1 = action.payload === 'Create'? allCreate.filter(e => e.createdInDb) : allCreate.filter(e => !e.createdInDb) 
            
            return {
                ...state,
                filteredBreeds: action.payload === 'All' ? state.breeds : filteredBreeds1
            }
        case FILTER_BY_BREEDS:
            const allBreeds = [...state.breeds]
            
             const filteredBreeds = action.payload === 'All'? allBreeds : allBreeds.filter(e => e.breed_group === action.payload)
            
            return {
                ...state,
                filteredBreeds
            }
        case FILTER_BY_WEIGHT_MIN:
            const  allBreeds1= [...state.breeds]
            const filteredMin = action.payload === 'All'? allBreeds1 : allBreeds1.filter(e => e.weight === action.payload)
            
            return {
                ...state,
            filteredMin
            }
        case FILTER_BY_TEMPERAMENTS:
            const allTemperaments = [...state.breeds]
            const filteredTemperaments = action.payload === 'All'? allTemperaments : allTemperaments.filter(e => e.temperament.split(", ").parseInt(e.temperament.split(", ")[0])===(action.payload))
            
            return {
                ...state,
                filteredBreeds: filteredTemperaments
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
    case POST_BREEDS:
       return {
        ...state,
 }

    case GET_TEMPERAMENTS:
        return {
            ...state,
            temperaments: action.payload
        }



            case SORT_BY_WEIGHT:
             let orderedByWeight = [...state.breeds]
             orderedByWeight = orderedByWeight.forEach((b) => {
  if (typeof b.weight.imperial === 'string') {
      let range = b.weight.imperial.split('- ')
      let promedy = (parseInt(range[0]) + parseInt(range[1])) / 2
      b.weight = promedy
      
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
    