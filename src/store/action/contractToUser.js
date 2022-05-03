import axios from "axios"
import * as ActionTypes from '../ActionTypes';
import swal from 'sweetalert';


// export const updateAccumulatedValue = (c, moneyToAdd) => {
//     return (dispatch) => {
//         axios.put(`https://localhost:44321/api/contractToUser/updatecontractToUser?c=${c}&moneyToAdd=${moneyToAdd}`)
//             .
//             then(response => {
//                 console.log(response);
//                 dispatch(update(response.data))
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }
export const addConsractToUser = (c, moneyToAdd = 0) => {
    return (dispatch) => {

        debugger
        axios.post(`https://localhost:44321/api/contractToUser/addcontractToUser?moneyToAdd=${moneyToAdd}`, c)
            .then(res => {

                console.log("1", res.data)

                dispatch(addContract(res.data));
                console.log("2", res.data)
                swal("the contract added successfully")
                dispatch(getContractToUser(c.userId));
                console.log("3", res.data)

            })
            .catch(err => {

                swal("Oops", "You don't need that contract, you have another active!", "warning")
                console.log(err);
            }
            )
    }
}

export const getContractToUser = (userId) => {
    return (dispatch) => {
        debugger
        axios.get(`https://localhost:44321/api/contractToUser/getContractsToUser?userId=${userId}`).
            then(response => {
                console.log(response.data);
                dispatch(saveContractToUser(response.data))
            })
            .catch(err => {
                console.log(err);

            })
    }
}


// export const addContractToUser = (c) => {

//     return (dispatch) => {
//         axios.post(`https://localhost:44321/api/contractToUser/`, c)
//             .then(response => {
//                 console.log(response.data);
//                 dispatch(addcontract(response.data));
//                 swal("BARUCH HASHEM!", "your contract have added successfully", "success");


//             }
//             )
//             .catch(error => {
//                 console.log(error);
//             })
//     }
// }

// export const update = (c) => {
//     return {
//         type: "contract_UPDATE",
//         payload: c
//     }
// }
export const addContract = (c) => {
    return {
        type: "CONTRACT_ADDED",
        payload: c
    }
}
export const saveContractToUser = (c) => {
    return {
        type: "contract_TO_USER_SAVED",
        payload: c
    }
}

// export const addConsractToUser = (c, moneyToAdd = 0) => {
//     debugger
//     if (c.contractCode == 1) {
//         return (dispatch) => {
//             axios.get(`https://localhost:44321/api/contractToUser/ifExistStoredValue?userId=${c.userId}`).then(
//                 response => {
//                     debugger
//                     if (response.data == true) {
//                         return (dispatch) => {
//                             axios.put(`https://localhost:44321/api/contractToUser/updatecontractToUser?c=${c}&moneyToAdd=${moneyToAdd}`)
//                                 .then(response => {
//                                     debugger
//                                     swal("added money to stored value");
//                                 })
//                         }
//                     }
//                     else {
//                         return (dispatch) => {
//                             axios.post(`https://localhost:44321/api/contractToUser/addcontractToUser?c=${c}&moneyToAdd=${moneyToAdd}`)
//                                 .then(
//                                     response => {
//                                         debugger
//                                         swal("added new stored value");
//                                     }
//                                 )
//                         }

//                     }
//                 }
//             )
//         }
//     }
//     else {
//         return (dispatch) => {
//             axios.get(`https://localhost:44321/api/contractToUser/ifExistAnycontract?userId=${c.userId}`).then(
//                 response => {
//                     if (response.data = true) {
//                         swal("it's not possible to create multiple contract to user")
//                     }
//                     else {
//                         return (dispatch) => {
//                             axios.post(`https://localhost:44321/api/contractToUser/addContractToUser?c=${c}`)
//                                 .then(response => {
//                                     swal("contract added successfully");
//                                 })
//                         }

//                     }
//                 }
//             )

//         }
//     }
// }
