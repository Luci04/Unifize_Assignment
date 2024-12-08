import React, { useState } from "react";
import Table from "./components/Table";
import Filters from "./components/Filters";
import mockData from "./components/1.json";
import Pagination from "./components/Pagination";
import "./App.css";

const preprocessData = (data) => {
  const seenDates = new Set();
  return data.map((row) => {
    if (seenDates.has(row.date)) {
      return { ...row, showDate: false };
    } else {
      seenDates.add(row.date);
      return { ...row, showDate: true };
    }
  });
};

const App = () => {
  const [data, setData] = useState(mockData || []);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const paginatedData = preprocessData(
    data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(data.length / rowsPerPage)) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="app py-7">
      <div className="flex flex-row flex-nowrap items-center table-container justify-between">
        <div className="text-3xl">Transactions</div>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          rowsLength={mockData.length}
          rowsPerPage={rowsPerPage}
        />
      </div>
      <Filters />
      <Table
        data={paginatedData}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
