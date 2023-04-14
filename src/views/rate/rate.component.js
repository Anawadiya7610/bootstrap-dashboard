import { React, useState } from "react";
import "./../../index.css";
import DataTable from "../datatable/table.component";
import { Link } from "react-router-dom";

function Rate(props) {
  const{convertType} = props;
  const [hover, sethover] = useState(false);
  return (
    <div className={` ${convertType ? "content_width" : "show_false"}`}>
    <div className="top-Container">
    <Link to={"/form"}>
      <button
        className="position-absolute table-btn"
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
      >
        {hover ? "Rates " : <i class="bi bi-plus-circle"></i>}
      </button>
      </Link>
      <DataTable />
    </div>
    </div>
  );
}

export default Rate;
