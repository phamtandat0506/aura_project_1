import { GET_TOKEN_USER, GET_DETAIL_USER } from "../constants/user.constants";

const initialState = {
  tokenUser: "",
  detailUser: [],
};

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOKEN_USER: {
      state.tokenUser = payload;
      return { ...state };
    }
    case GET_DETAIL_USER: {
      state.detailUser = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
