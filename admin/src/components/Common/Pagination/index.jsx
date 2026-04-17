import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  page = 1,
  total = 10,
  rowsPerPage = 10,
  onPrev,
  onNext,
  onRowsChange
}) => {
  return (
    <div className="flex justify-end items-center gap-6 text-sm text-gray-600">

      {/* Rows per page */}
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsChange(e.target.value)}
          className="border rounded px-2 py-1 outline-none"
        >
          {[5, 10, 25, 50].map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
      </div>

      {/* Count */}
      <span>
        {(page - 1) * rowsPerPage + 1}–
        {Math.min(page * rowsPerPage, total)} of {total}
      </span>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>

    </div>
  );
};

export default Pagination;