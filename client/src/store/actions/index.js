import axios from 'axios'
export const GET_BREEDS = 'GET_BREEDS'



export function getBreeds() {
   return function(dispatch){
        axios.get("http://localhost:3001/api/breeds/",{
   })
     .then((breeds) => {
           dispatch({
               type: GET_BREEDS,
               payload: breeds.data
          })
      })
      .catch((error) => {
           console.log(error)
        })
   }
}

export function searchBreeds() {

}