import React, { useState, useEffect } from "react";
import "./../index.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Header(props) {
  const { convertType, setConvertType } = props;
  console.log(convertType);

  return (
    <div className={`body-area${convertType ? " body-pd" : ""}`}>
      <header className={`header${convertType ? " body-pd" : ""}`}>
        <div className="header_toggle">
          <i
            className={`bi ${convertType ? "bi-x" : "bi-list"}`}
            onClick={() => setConvertType(!convertType)}
          />
        </div>
        <div className="header_img">
          <img
            src="https://reqres.in/img/faces/5-image.jpg"
            alt="Clue Mediator"
          />
        </div>
      </header>
      <div className={`l-navbar${convertType ? " show" : ""}`}>
        <nav className="nav">
          <div>
            <a
              href="https://cluemediator.com"
              target="_blank"
              className="nav_logo"
              rel="noopener"
            >
              <i className="bi bi-alexa nav_logo-icon" />{" "}
              <span className="nav_logo-name">Admin</span>
            </a>
            <div className="nav_list">
              <a className="nav_link" rel="noopener">
                <Link
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "#AFA5D9" }}
                >
                  <i className="bi bi-people nav_icon iconSpace" />
                  <span className="nav_name">Dashboard</span>
                </Link>
              </a>
              <a className="nav_link iconSpace" rel="noopener">
                <Link
                  to={"/form"}
                  style={{ textDecoration: "none", color: "#AFA5D9" }}
                >
                  <i className="bi bi-person-check iconSpace" id="iconSpace" />
                  <span className="nav_name">Form</span>
                </Link>
              </a>

              <Dropdown>
                <a className="nav_link" rel="noopener">
                  <Dropdown.Toggle
                    variant="Secondary"
                    className="dropdown_btn"
                    id="dropdown-basic"
                  >
                    <i className="bi bi-table nav_icon iconSpace" />
                    <span className="nav_name">Table</span>
                  </Dropdown.Toggle>
                </a>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to={"/order"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Order table
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to={"/rate"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Rate Table
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to={"/user"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      User Table
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to={"/visitor"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Visitors Table
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <a
            href="https://cluemediator.com"
            target="_blank"
            className="nav_link"
            rel="noopener"
          >
            <i className="bi bi-box-arrow-left nav_icon" />
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
