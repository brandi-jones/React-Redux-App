import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});

    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    })
}