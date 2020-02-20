import {FETCH_DATA, SET_ERROR, UPDATE_CHARACTERS} from '../actions/index.js';

const initialState = {
    characters: [],
    isFetchingData: false,
    error: ""
}

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                characters: []
            };
        case UPDATE_CHARACTERS:
            return {
                ...state,
                isFetchingData: false,
                characters: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
}