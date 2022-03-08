import * as ActionTypes from '../ActionTypes';
import axios from 'axios';
import swal from 'sweetalert';


export const getProfileName = (num) => {
    
    return (dispatch) => {
        axios.get(`https://localhost:44321/api/profile/getProfileName?num=${num}`)
            .then(response => {
                console.log(response);
                if (response == null) {
                    swal("Oops...", "This profile is not exist in the system", "error");
                }
                else {
                    dispatch(saveProfile(num))
                    return response.data

                }
            })
            .catch(error => {
                console.log("inside the catch");
                console.log(error);
            })
    }
}

export const saveProfile = (name) => {
    return {
        type: ActionTypes.SAVE_PROFILE,
        payload: name
    }
}