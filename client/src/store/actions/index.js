import axios from 'axios'
export const FETCH_BREEDS = 'FETCH_BREEDS'
export const SEARCH_BREEDS = 'SEARCH_BREEDS'


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
