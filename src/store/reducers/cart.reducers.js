import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  GET_ALL_CART,
  GET_ITEM_CART,
} from "../constants/cart.constants";

const initialState = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART: {
      let temp = 0;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === payload.id) {
          state[i].quantity = state[i].quantity + 1;
          temp = 1;
        }
      }
      if (temp === 0) {
        state.push(payload);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case GET_ALL_CART: {
      return [...state];
    }
    case DELETE_CART: {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === payload.id) {
          state.splice(i, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case UPDATE_CART: {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === payload.id) {
          state[i].quantity = payload.quantity;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case GET_ITEM_CART: {
      return [...state];
    }
    default:
      return state;
  }
};
