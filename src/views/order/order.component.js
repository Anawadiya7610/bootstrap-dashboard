import { React, useState } from "react";
import DataTable from "../datatable/table.component";
import "./../../index.css";
import { Link } from "react-router-dom";

function Order(props) {
  const [hover, sethover] = useState(false);
  const { convertType } = props;

  return (
    <div className={` ${convertType ? "content_width" : "show_false"}`}>
      <Link to={"/form"}>
        <button
          className="position-absolute table-btn"
          onMouseOver={() => sethover(true)}
          onMouseOut={() => sethover(false)}
        >
          {hover ? "Orders" : <i class="bi bi-plus-circle"></i>}
        </button>
      </Link>
      <DataTable />
    </div>
  );
}

export default Order;
