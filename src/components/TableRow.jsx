import React from "react";
import { FaReceipt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Avatar from "./Avatar";
import { FaRegCreditCard } from "react-icons/fa6";

const formatAmount = (amount) => {
  const [whole, decimal] = amount.toFixed(2).split(".");
  return { whole, decimal };
};

const TableRow = ({ row }) => {
  const { whole, decimal } = formatAmount(row.amount);

  return (
    <div className="table-row group hover:bg-[#f7f7f8] transition-all duration-500 rounded-sm h-12 text">
      <div
        className={`${
          row.showDate
            ? "text-black border-[#f7f7f8] border-t"
            : "text-transparent group-hover:text-black transition-all duration-500"
        }  px-2 h-full flex items-center`}
      >
        {row.date}
      </div>
      <div
        className={`font-normal text-base flex flex-row items-center h-full`}
      >
        <div
          className={`h-full flex justify-center items-center ${
            row.showDate ? "border-[#f7f7f8] border-t" : ""
          } `}
        >
          <Avatar name={row.toFrom} showDate={row.showDate} />
        </div>
        <div className="flex flex-1 items-center w-full border-[#f7f7f8] border-t h-full">
          {row.toFrom}
        </div>
      </div>
      <div
        className={
          row.amount > 0
            ? "positive font-normal text-base text-right border-[#f7f7f8] border-t h-full items-center flex"
            : "font-normal text-base text-right border-[#f7f7f8] border-t h-full items-center flex"
        }
      >
        {whole}
        <span
          className="relative -top-1"
          style={{
            fontSize: "0.73em",
          }}
        >
          {decimal && " ." + decimal}
        </span>
      </div>
      <div className="w-48 text-right border-[#f7f7f8] border-t items-center flex h-full">
        {row.account}
      </div>
      <div className="w-36 px-[6px] py-2 text-center border-[#f7f7f8] border-t flex items-center h-full gap-2">
        <FaRegCreditCard
          size={14}
          className="text-[#9d9da8] group-hover:text-black"
        />{" "}
        {row.paymentMethod}
      </div>
      <div className="flex justify-center border-[#f7f7f8] border-t items-center h-full w-20">
        <button className="group w-8 h-8 rounded-full bg-[#efeff1] flex justify-center items-center hover:bg-[#e9eaee]">
          {row.attachment ? (
            <FaPlus
              className="text-gray-500 group-hover:text-[#3e5aeb]"
              size={11}
            />
          ) : (
            <FaReceipt
              className="text-gray-500 group-hover:text-[#3e5aeb]"
              size={11}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default TableRow;
