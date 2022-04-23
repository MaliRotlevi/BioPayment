import * as ActionTypes from '../ActionTypes';


const initialState = {
    contractsToUser: [{}],
    

}

export const contractToUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.contract_TO_USER_SAVED:
            return { ...state, contractsToUser: action.payload }
        case ActionTypes.contract_ADDED:
            return {
                ...state,
                 contractsToUser: [...state.contractsToUser, action.payload]
            }
        case ActionTypes.contract_UPDATE:
            let arr2 = state.contractsToUser.filter((item) => item.id !== action.payload.id);
            arr2.push(action.payload)
            console.log(arr2)
            return {
                ...state,
                contractsToUser: arr2
            }
    }
    return state;
}