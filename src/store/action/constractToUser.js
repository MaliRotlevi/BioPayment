import axios from "axios"
import * as ActionTypes from '../ActionTypes';

export const updateAccumulatedValue = (constract) => {
    return (dispatch) => {     
        axios.put('https://localhost:44321/api/constractToUser/addConstractToUser',)
        .
            then(response => {
                console.log(response);
                dispatch(update(response.data))
            })
            .catch(err => {
                console.log(err);
                
            })
    }
}

export const update = (constract) => {
    return {
        type: "TODO_UPDATE",
        payload: constract
    }
}