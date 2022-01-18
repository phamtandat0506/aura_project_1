import callApi from "../../utils/callAPI";
import {
  GET_ALL_PRODUCT,
  GET_ITEM_PRODUCT,
} from "../constants/product.constants";

export const getAllProductAction = (limit, page) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `api/60939744ac969b4078488026/dmvt?access_token=8e87610b543bec77cc2da2de4e99188e&limit=${limit}&page=${page}`,
        "GET",
      );
      dispatch({
        type: GET_ALL_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const getItemProductAction = (_id) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `api/60939744ac969b4078488026/dmvt/${_id}?access_token=8e87610b543bec77cc2da2de4e99188e`,
        "GET",
      );
      dispatch({
        type: GET_ITEM_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
