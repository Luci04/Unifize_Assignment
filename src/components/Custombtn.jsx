import React from "react";
import { FaFilter } from "react-icons/fa6";

function Custombtn({ title = "Add Filter", IconComponent }) {
  return (
    <button className="flex justify-center items-center px-3 py-2 rounded-3xl gap-2 group bg-[#f7f7f8] hover:bg-[#f0f1f4]">
      <FaFilter size={11} className="group-hover:text-[#5266eb]" />
      <div className="text-base font-normal">{title}</div>
    </button>
  );
}

export default Custombtn;
