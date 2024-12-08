import React from "react";
import Custombtn from "./Custombtn";

const Filters = () => {
  return (
    <div className="filters table-container flex flex-row justify-between ">
      <div className="flex flex-row items-center gap-5">
        <Custombtn title="Add Filter" />
        <span>No filters applied</span>
      </div>
      <Custombtn title="Export All" />
    </div>
  );
};

export default Filters;
