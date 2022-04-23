import axios from "axios"
import * as ActionTypes from '../ActionTypes';
import swal from 'sweetalert';


export const getContracts = () => {
    return (dispatch) => {
        axios.get(`https://localhost:44321/api/contracts/getAllcontracts`).
            then(response => {
                console.log(response.data);
                console.log("insisde then contractss")
                dispatch(savecontracts(response.data))
            })
            .catch(err => {
                console.log(err);
                console.log("insisde catch contractss")
            })
    }
}


export const savecontracts = (c) => {
    return {
        type: ActionTypes.contractS_SAVED,
        payload: c
    }
}