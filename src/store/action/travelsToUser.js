import * as ActionTypes from '../ActionTypes';
import axios from 'axios';

export const getTravelsToUser = (userId) => {
    console.log("inside the action of travel to user")
    return (dispatch) => {
        axios.get(`https://localhost:44321/api/travelsToUser/getAllTravelsToUser?id=${userId}`).
            then(response => {
                console.log(response.data);
                dispatch(saveTravelsToUser(response.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const saveTravelsToUser = (travelsToUser) => {
    return {
        type: ActionTypes.TRAVELSTOUSER_SAVED,
        payload: travelsToUser
    }
}