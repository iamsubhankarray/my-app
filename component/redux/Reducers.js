// import { ADD_TO_CART } from "./constants";

// // const initialState =[]
// export const AddReducer =(state=[],action)=>{
//     if(action.type===ADD_TO_CART){
//        return [...state,action.data]

//     }
//     else{
//         return state
//     }

// }


import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

// Set default initial state to an empty array
const initialState = [];

export const AddReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.data]; // Add new item to the state array
        default:
            return state; // Return current state for unrecognized actions
    }
};

export const RemoveReducer = (state, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
            return filteredData= state.filter((item)=>item.id!==action.data); // Removematching item from the state array
            
        default:
            return state; // Return current state for unrecognized actions
    }
};
