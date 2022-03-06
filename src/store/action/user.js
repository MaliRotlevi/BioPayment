import * as ActionTypes from '../ActionTypes';
import axios from 'axios';
import {getTravelsToUser} from './travelsToUser'

export const postUser = (user) => {
    debugger
    return (dispatch) => {
        debugger
        console.log("inside the dispathhh");
        axios.post(`https://localhost:44321/api/user/addUser`, user)
            .then(response => {
                debugger
                console.log("inside the response of register");
                console.log(response.data);
                
                dispatch(addUser(response.data));
            }
            )
            .catch(error => {
                console.log("inside the cath of the register");
                console.log(error);
            })
    }
}
export const logUser = (user) => {
     return (dispatch) => {
         axios.get(`https://localhost:44321/api/user/getUser?username=${user.userName}&password=${user.userPassword}`)
            .then(response => {
                console.log(response);
                if (response.data == null || response.data == undefined) {

                    alert("this user is not exist in the system")
                }
                else {  
                    console.log(response.data);
                    dispatch(saveUser(response.data))
                    
                }
            })
            .catch(error => {
                console.log("inside the catch");
                console.log(error);
            })
    }
}

export const updetaUser = (user) => {
    return (dispatch) => {  
        console.log(user);   
        axios.put('https://localhost:44321/api/user/updateUser',user).
            then(response => {
                console.log(response);
                dispatch(update(response.data))
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
export const update = (user) => {
    return {
        type: "USER_UPDATE",
        payload: user
    }
}
export const addUser = (user) => {
    
    return {
        type: ActionTypes.ADD_USER,
        payload: user
    }
}