import React from "react";
import "./../../index.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import LineCharts from "../chart/lineChart.component";
import CalendarDate from "../calendar/calendar.component";
import Img from "./imgs.jpg";
import ImgLeft from "./left.jpg";

function Home() {
  return (
  <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-end">
              <li className="breadcrumb-item list-unstyled">
                <a href="#" className="text-decoration-none">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active list-unstyled mx-2">
                Dashboard v1
              </li>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info text-white  ">
                <div className="inner mx-3 py-3 d-flex align-items-center justify-content-between">
                  <div className="left">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="right">
                    <BsFillBagFill size="large" className="icons" />
                  </div>
                </div>

                <a
                  href="#"
                  className="smallBox text-decoration-none text-white  w-100 d-flex align-items-center justify-content-center"
                >
                  More info <BsFillArrowRightCircleFill className="mx-2" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="small-box bg-success text-white ">
                <div className="inner mx-3 py-3 d-flex align-items-center justify-content-between">
                  <div className="left">
                    <h3>
                      53<sup style={{ fontSize: "20px" }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="right">
                    <BsFillBarChartLineFill size="large" className="icons" />
                  </div>
                </div>

                <a
                  href="#"
                  className="smallBox text-decoration-none text-white w-100 d-flex align-items-center justify-content-center"
                >
                  More info <BsFillArrowRightCircleFill className="mx-2" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning text-white ">
                <div className="inner mx-3 py-3 d-flex align-items-center justify-content-between">
                  <div className="left">
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="right">
                    <BsFillPersonPlusFill size="large" className="icons" />
                  </div>
                </div>

                <a
                  href="#"
                  className="text-decoration-none text-white smallBox w-100 d-flex align-items-center justify-content-center"
                >
                  More info <BsFillArrowRightCircleFill className="mx-2" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger text-white ">
                <div className="inner mx-3 py-3  d-flex align-items-center justify-content-between">
                  <div className="left">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="right">
                    <AiFillDashboard size="large" className="icons" />
                  </div>
                </div>

                <a
                  href="#"
                  className="smallBox text-decoration-none py-2 text-white w-100 d-flex align-items-center justify-content-center"
                >
                  More info <BsFillArrowRightCircleFill className="mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid   pt-3">
        <Row>
          <Col sm={7}>
            <div className="container border py-3 ">
              <div className="w-100 m-auto">
                <div className="paperLeft">
                  <div className="topPaperImg d-flex align-items-center justify-content-between">
                    <h5>Sales</h5>
                    <div className="d-flex align-items-center">
                      <button className="bg-primary text-white border-none outline-none">
                        {" "}
                        Aera
                      </button>
                      <p className="m-auto px-2">Span</p>
                    </div>
                  </div>
                  <hr className="hr" />
                  <div className="DownPaperImg">
                    <img src={Img} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border my-3 py-3 pr-3">
              <LineCharts />
            </div>
          </Col>
          <Col sm={5}>
            <CalendarDate />
            <div className="container border my-3 py-3 ">
            <div className="w-100 m-auto">
              <div className="paperLeft">
                <div className="topPaperImg d-flex align-items-center justify-content-between">
                  <h5>Sales</h5>
                  <div className="d-flex align-items-center">
                    <button className="bg-primary text-white border-none outline-none">
                      {" "}
                      Aera
                    </button>
                    <p className="m-auto px-2">Span</p>
                  </div>
                </div>
                <hr className="hr" />
                <div className="DownPaperImg">
                  <img src={ImgLeft} alt="" />
                </div>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
