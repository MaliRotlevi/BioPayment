import * as ActionTypes from '../ActionTypes';


const initialState={
    travelsToUserList:[{}]
}

export const travelsToUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TRAVELSTOUSER_SAVED:
            return { ...state, travelsToUserList: action.payload }
        
    }
    return state;
}