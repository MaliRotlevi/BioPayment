import * as ActionTypes from '../ActionTypes';
import axios from 'axios';


export const logUser = (user) => {
    return (dispatch) => {
        console.log("inside the dispathghhhhh");
        axios.get(`https://localhost:44321/api/values`)
            .then(response => {
                console.log(response);
                if (response.data.length === 0) {

                    alert("this user is not exist in the system")
                }
                else {
                    dispatch(saveUser(response.data[0].id))
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const saveUser = (user) => {
    return {
        type: ActionTypes.SAVE_USER,
        payload: user
    }
}