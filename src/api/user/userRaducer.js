import * as actionTypes from "./userActionType";

const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  loggedUser: null,
  convertType: true,
};

export const userRaducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONVERT_TYPE_INIT:
      return {
        ...state,
        convertType: action.payload.data,
      };

   
    case actionTypes.USER_LOGIN_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
      };

    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoggedIn: false,
      };

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
