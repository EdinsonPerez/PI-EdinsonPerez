import axios from 'axios'
export const FETCH_BREEDS = 'FETCH_BREEDS'
export const SEARCH_BREEDS = 'SEARCH_BREEDS'
export const SORT_BY_WEIGHT = 'SORT_BY_WEIGHT'
export const FILTER_BY_BREEDS = 'FILTER_BY_BREEDS'
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS'
export const FILTER_CREATE = 'FILTER_CREATE'
export const FILTER_BY_WEIGHT_MIN = 'FILTER_BY_WEIGHT_MIN'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const POST_BREEDS = 'POST_BREEDS'
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


export function getTemperaments(){
   return async function(dispatch){
      var json = await axios.get("http://localhost:3001/api/temperaments",{

      });
      return dispatch({type: "GET_TEMPERAMENTS", payload:json.data});
   };
}

export function postBreed(payload) {
   return async function (dispatch){
const response = await axios.post("http://localhost:3001/api/breeds",payload)
console.log(response)
return response;
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

   export function filterByWeightMin(payload){
      return {
      type: FILTER_BY_WEIGHT_MIN,
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