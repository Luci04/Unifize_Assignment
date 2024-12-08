import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

const Table = ({ data, currentPage, onPageChange }) => {
  return (
    <div className="table-container">
      <TableHeader />
      <div className="table-body">
        {data.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </div>
      <div className="flex flex-row justify-end py-5">
        <Pagination currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default Table;
