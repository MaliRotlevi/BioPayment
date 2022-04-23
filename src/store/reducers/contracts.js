import * as ActionTypes from '../ActionTypes';


const initialState = {
    travelContracts: [{}]

}


export const contractsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.contractS_SAVED:
            return { ...state, travelContracts: action.payload } 
    }
    return state;
}