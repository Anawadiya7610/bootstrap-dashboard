import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RoutePath from "./../routes";
// import { TopPageContainer } from "./../../component/top/top.container";
import { LoginPageContainer } from "../views/LoginPage/login.container";

export default function AppRoot() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const routesWithoutTopPageContainer = ["/"];

  useEffect(() => {
    const loc = location.pathname.split("/");
    loc.length <= 1
      ? setOpen(false)
      : routesWithoutTopPageContainer.indexOf(loc[1]) > 0
      ? setOpen(true)
      : setOpen(false);
  }, [location]);
  return (
    <Fragment>
      <div  className="backgroundRes" >
        {open ? <LoginPageContainer /> : null}
        <RoutePath />
      </div>
    </Fragment>
  );
}
