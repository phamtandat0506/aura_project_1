import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  GET_ALL_CART,
  GET_ITEM_CART,
} from "../constants/cart.constants";

const initialState = {
  addCart: "",
  listCart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  deleteCart: 0,
  fixCart: {},
  getOneCart: {},
};

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART: {
      if(payload)
      {
        
      }
      state.addCart = payload;
      return { ...state };
    }
    case GET_ALL_CART: {
      state.listCart = payload;
      return { ...state };
    }
    case DELETE_CART: {
      state.deleteCart = payload;
      return { ...state };
    }
    case UPDATE_CART: {
      state.fixCart = payload;
      return { ...state };
    }
    case GET_ITEM_CART: {
      state.getOneCart = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
