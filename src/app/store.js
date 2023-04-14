import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

export const store = configureStore(
  { reducer: appReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
