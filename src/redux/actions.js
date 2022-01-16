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

const loginStart = () => {
  return {
    type: types.LOGIN_START,
  };
};

const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};

const loginFail = (error) => {
  return {
    type: types.LOGIN_FAIL,
    payload: error,
  };
};

export const registerInitiate = (name, email, password) => {
  return (dispatch) => {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "Sign Up Firebase");
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "Sign In Firebase");
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};
