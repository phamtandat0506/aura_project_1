import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  GET_ALL_CART,
  GET_ITEM_CART
} from '../constants/cart.constants';

export const getAllCartAction = () => {
  const add = async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CART,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const getItemCartAction = (id) => {
  const add = async (dispatch) => {
    try {
      dispatch({
        type: GET_ITEM_CART,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const updateCartAction = (item) => {
  const add = async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_CART,
        payload: item,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const deleteCartAction = (id) => {
  const add = async (dispatch) => {
    try {
      dispatch({
        type: DELETE_CART,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const addCartAction = (item) => {
  const add = async (dispatch) => {
    try {
      dispatch({
        type: ADD_CART,
        payload: item,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
