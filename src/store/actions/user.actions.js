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
      if(res.data)
      {
        dispatch({
          type: GET_TOKEN_USER,
          payload: res.data
        });
      }
      else{
        dispatch({
          type: GET_TOKEN_USER,
          payload: res
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const getDetailUserAction = (token) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `api/profile?access_token=${token}`,
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
