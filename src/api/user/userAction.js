import * as actionTypes from "./userActionType";

export const setConvertType = (data) => {
  return (dispatch) => {
    dispatch(setConvertTypeInit(data));
  };
};

export const setConvertTypeInit = (data) => ({
  type: actionTypes.SET_CONVERT_TYPE_INIT,
  payload: { data },
});

export const Login = () => {
  return (dispatch) => {
    dispatch(loginInint());
    dispatch(loginfail());
    dispatch(loginsuccess());
  };
};

export const loginInint = () => ({
  type: actionTypes.USER_LOGIN_INIT,
});
export const loginfail = () => ({
  type: actionTypes.USER_LOGIN_FAILURE,
});
export const loginsuccess = (data) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload: { data },
});
