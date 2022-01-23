import * as ActionTypes from '../ActionTypes';


const initialState = {
    currentUser: {
        name:"Tamar"
    }
}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER:
            return { ...state, currentUser: action.payload }
    }
    return state;
}