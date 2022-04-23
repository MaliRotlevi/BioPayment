// import * as ActionTypes from '../ActionTypes';
// import axios from 'axios';
// import swal from 'sweetalert';


// export const getTravelsList = () => {
    
//     return (dispatch) => {
//         axios.get(`https://localhost:44321/api/travels/getAllTravels`)
//             .then(response => {
//                 console.log(response);
//                 console.log("inside then of travels");
//                 if (response == null) {
//                     swal("Oops... didnt get travels" );
//                 }
//                 else {
//                     dispatch(saveTravels(response.data))
                    
                    

//                 }
//             })
//             .catch(error => {
//                 console.log("inside the catch");
//                 console.log(error);
//             })
//     }
// }

// export const saveTravels = (travels) => {
//     return {
//         type: ActionTypes.SAVE_TRAVELS,
//         payload: travels
//     }
// }

