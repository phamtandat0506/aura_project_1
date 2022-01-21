import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    GET_ALL_PRODUCT,
    GET_ITEM_PRODUCT
  } from '../constants/product.constants'; 
  
  const initialState = {
    addProduct: '',
    listProduct: [],
    deleteProduct: 0,
    fixProduct: {},
    getOneProduct: {}
  };
  
  export const ProductReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_PRODUCT: {
        state.addProduct = payload;
        return { ...state };
      }
      case GET_ALL_PRODUCT: {
        state.listProduct = payload;
        return { ...state };
      }
      case DELETE_PRODUCT: {
        state.deleteProduct = payload;
        return { ...state };
      }
      case UPDATE_PRODUCT: {
        state.fixProduct = payload;
        return { ...state };
      }
      case GET_ITEM_PRODUCT: {
        state.getOneProduct = payload;
        return { ...state };
      }
      default:
        return state;
    }
  };
  