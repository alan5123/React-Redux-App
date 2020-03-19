import axios from 'axios';


export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
    .get('https://www.dnd5eapi.co/api/classes')
    .then(response => {
    
    dispatch({ type: UPDATE_DATA, payload: response.data.results })
    })
    
    .catch(err => {
        console.error("error fetching data from api, err: ", err);
        dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
      });
}

