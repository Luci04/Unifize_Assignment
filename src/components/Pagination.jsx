import React from "react";

const Pagination = ({ currentPage, onPageChange, rowsLength, rowsPerPage }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div
        onClick={() => onPageChange(currentPage - 1)}
        className={`${
          currentPage === 1 ? "opacity-50 cursor-default" : "group"
        } w-6 h-6 cursor-pointer flex items-center rotate-180`}
      >
        <img
          className="block group-hover:hidden"
          src="https://cdn.mercury.com/builds/78f7de5b461f38b6a0096dd9ece4fa0a8ab41c50/icons/pagination/chevron.svg"
        />
        <img
          className="hidden group-hover:block"
          src="https://cdn.mercury.com/builds/78f7de5b461f38b6a0096dd9ece4fa0a8ab41c50/icons/pagination/chevron-hover.svg"
        />
      </div>
      <div
        disabled={currentPage == Math.ceil(rowsLength / rowsPerPage)}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${
          currentPage == Math.ceil(rowsLength / rowsPerPage)
            ? "opacity-50 cursor-default"
            : "group"
        } w-6 h-6 cursor-pointer flex items-center`}
      >
        <img
          className="block group-hover:hidden"
          src="https://cdn.mercury.com/builds/78f7de5b461f38b6a0096dd9ece4fa0a8ab41c50/icons/pagination/chevron.svg"
        />
        <img
          className="hidden group-hover:block"
          src="https://cdn.mercury.com/builds/78f7de5b461f38b6a0096dd9ece4fa0a8ab41c50/icons/pagination/chevron-hover.svg"
        />
      </div>
    </div>
  );
};

export default Pagination;
