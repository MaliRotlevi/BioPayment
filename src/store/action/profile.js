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
                    dispatch(saveProfile(response.data))
                    
                    

                }
            })
            .catch(error => {
                console.log("inside the catch");
                console.log(error);
            })
    }
}

export const saveProfile = (profile) => {
    return {
        type: ActionTypes.SAVE_PROFILE,
        payload: profile
    }
}

export const getAllProfiles = () => {
    return (dispatch) => {
        debugger
        axios.get(`https://localhost:44321/api/profile/getAllProfiles`).
            then(response => {
                console.log(response.data);
                console.log("insisde then Profilesssssss")
                dispatch(saveProfiles(response.data))
            })
            .catch(err => {
                console.log(err);
                console.log("insisde catch profilessssss")
            })
    }
}

export const saveProfiles = (c) => {
    return {
        type: ActionTypes.PROFILES_SAVE,
        payload: c
    }
}
