import * as types from "./actionTypes";
import { auth } from "../firebase";

const registerStart = () => {
  return {
    type: types.REGISTER_START,
  };
};

const registerSuccess = (user) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: user,
  };
};

const registerFail = (error) => {
  return {
    type: types.REGISTER_FAIL,
    payload: error,
  };
};

export const registerInitiate = (name, email, password) => {
  return (dispatch) => {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "from firebase");
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};
