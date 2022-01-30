import * as ActionTypes from '../ActionTypes';


const initialState = {
    currentUser: {
        userName:"",
        userPassword:""
    }
}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER:
            console.log("inside the reduser");
            return { ...state, currentUser: action.payload }
    }
    return state;
}