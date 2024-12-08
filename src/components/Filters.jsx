import React from "react";
import Custombtn from "./Custombtn";
import { FaFilter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

const Filters = () => {
  return (
    <div className="filters table-container flex flex-row justify-between ">
      <div className="flex flex-row items-center gap-5">
        <Custombtn title="Add Filter" IconComponent={FaFilter} />
        <span>No filters applied</span>
      </div>
      <Custombtn title="Export All" IconComponent={FaDownload} />
    </div>
  );
};

export default Filters;
