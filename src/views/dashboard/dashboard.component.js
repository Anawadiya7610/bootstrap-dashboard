import React from "react";
import { HeaderPageContainer } from "../../component/header/header.container";
import { Row } from "react-bootstrap";
import Home from "../homeDashboard/homeDas.component";
import "./../../index.css";

const Dashboard = (props) => {
  const { convertType } = props;
  return (
    <div className="content-wrapper">
      <HeaderPageContainer />
      <Row className={` ${convertType ? "content_width" : "show_false"}`}>
        <Home />
      </Row>
    </div>
  );
};

export default Dashboard;
