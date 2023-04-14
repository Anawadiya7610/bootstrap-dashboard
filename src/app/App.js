import React from "react";
import { Provider } from "react-redux";
import "../index.css";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
import { AppRootPageContainer } from "./../shared/approot.container";
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRootPageContainer />
      </HashRouter>
    </Provider>
  );
}

export default App;
