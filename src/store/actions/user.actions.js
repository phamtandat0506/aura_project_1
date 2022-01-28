import callApi from "../../utils/callAPI";
import { GET_TOKEN_USER, GET_DETAIL_USER } from "../constants/user.constants";
import { Buffer } from "buffer";

export const getTokenUserAction = (username, password) => {
  var credentials = Buffer.from(username + ":" + password).toString("base64");
  var basicAuth = "Basic " + credentials;
  const add = async (dispatch) => {
    try {
      const res = await callApi(`auth/local`, "GET", "", {
        Authorization: basicAuth,
      });
      dispatch({
        type: GET_TOKEN_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const getDetailUserAction = (_id) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `api/60939744ac969b4078488026/dmvt/${_id}?access_token=8e87610b543bec77cc2da2de4e99188e`,
        "GET",
      );
      dispatch({
        type: GET_DETAIL_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
