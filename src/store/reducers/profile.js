import * as ActionTypes from '../ActionTypes';

const initialState = {
    currentProfile: {
        name:''
    }
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_PROFILE:
            {
                
                return { ...state, currentProfile: action.payload }

            }
            return state;
        }
        return state;
    }