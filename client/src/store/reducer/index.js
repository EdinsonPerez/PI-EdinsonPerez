import  { FETCH_BREEDS, SEARCH_BREEDS }  from "../actions";

const initialState ={
    breeds: [],
   filteredBreeds: []
}

 export default function reducer (state = initialState, action) {
     switch(action.type) {
        case FETCH_BREEDS:
            return{
                ...state,
                breeds: action.payload
            }
        case SEARCH_BREEDS:
            return{
                ...state,
                breeds: action.payload
            }
            default:
                return state
    }
}
