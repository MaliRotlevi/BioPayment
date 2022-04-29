import * as ActionTypes from '../ActionTypes';

const initialState = {
    currentProfile: {
        profileCode:0,
        profileName:''
    },
    profiles: [{}]
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_PROFILE:
            {
                console.log("inside the case of save in the profileReducer");
                return { ...state, currentProfile: action.payload }

            }
         case ActionTypes.PROFILES_SAVE:
                return { ...state, profiles: action.payload }     
            return state;
        }
        return state;
    }