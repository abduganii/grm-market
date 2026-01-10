import React from "react";

export default function InputCostom({ required,label,onChange,value, className, placeholder, type }) {
  return (
    <label className={`w-full ${className && className}`}>
   {label  &&  <p className="text-[12px] leading-[14px] mb-[15px]">{label}</p>}
      <input
        type={type}
        required={required}
        onChange={onChange}
        value={value}
        className="py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid mb-4"
        placeholder={placeholder}
      />
    </label>
  );
}
