import axios from 'axios'
export const FETCH_BREEDS = 'FETCH_BREEDS'


export function fetchBreeds() {
    return function(dispatch){
        axios.get('http://localhost:3001/api/breeds/')
        .then((breeds) => {
            dispatch({
                type: FETCH_BREEDS,
                payload: breeds
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function searchBreeds() {

}