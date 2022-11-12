import axios from 'axios'
export const FETCH_BREEDS = 'FETCH_BREEDS'
export const SEARCH_BREEDS = 'SEARCH_BREEDS'
export const SORT_BY_WEIGHT = 'SORT_BY_WEIGHT'
export const FILTER_BY_BREEDS = 'FILTER_BY_BREEDS'
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS'
export const FILTER_CREATE = 'FILTER_CREATE'
export const SORT = 'SORT'


export function fetchBreeds() {
   return function(dispatch){
        axios.get('http://localhost:3001/api/breeds/')
     .then((breeds) => {
           dispatch({
               type: FETCH_BREEDS,
               payload: breeds.data
          })
      })
      .catch((error) => {
           console.log(error)
        })
   }
}

export function searchBreeds(search) {
   return function(dispatch){
      axios.get('http://localhost:3001/api/breeds?name=' + search) 
   .then((breeds) => {
         dispatch({
             type: SEARCH_BREEDS,
             payload: breeds.data
        })
        
    })
    .catch((error) => {
         console.log(error)
      })
 }
}
export function sort(order){
   return {
      type: SORT,
      payload: order
   }
 }
export function sortByWeight(order){
return {
type: SORT_BY_WEIGHT,
payload: order
}
}
export function filterByBreeds(payload){
   return {
   type: FILTER_BY_BREEDS,
   payload
   }
   }
   export function filterByTemperaments(payload){
      return {
      type: FILTER_BY_TEMPERAMENTS,
      payload
      }
      }
      export function filterCreate(payload){
         return {
         type: FILTER_CREATE,
         payload
         }
         }