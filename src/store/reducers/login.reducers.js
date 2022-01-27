
import { GET_ALL_USER } from './../constants/login.const';


const initialState = {
    listUser: []
}

export const userReducer = (state = initialState, action ) => {
   const { type, payload } = action;
   switch (type ) {
       case GET_ALL_USER: {
           state.listUser = payload
           return { ...state}
       }
       default: 
        return state
   } 
}