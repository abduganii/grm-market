import { Select } from "antd";
import React from "react";

export default function SelectCostom({ label, className, placeholder }) {
  return (
    <label className={`w-full ${className && className}`}>
      <p className="text-[12px] leading-[14px] mb-[15px]">{label}</p>
      <Select
        placeholder={placeholder}
        className=" w-full ] outline-none border-[#EEEEEE] border-[1px] border-solid mb-4"
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </label>
  );
}
