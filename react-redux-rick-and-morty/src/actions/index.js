import axios from 'axios';

//set as variables here to remove chance for typos/bugs later when using these variables. 
//more applicable for larger scale applications
export const FETCH_DATA = "FETCH_DATA";
export const SET_ERROR = "SET_ERROR";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});

    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            console.log(response)
            dispatch({type: UPDATE_CHARACTERS, payload: response.data.results})
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, payload: "Error fetching data from the api" });
        })
}