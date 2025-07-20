import React from "react";
interface Pros {
  label?: string;
  placeholder: string;
  type: string;
}
const FormInput: React.FC<Pros> = ({ label, placeholder, type }) => {
  return (
    <>
      <h1 className="mb-1 text-[16px] font-medium">{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="  rounded-md  p-3 w-[310px] h-8 border-1 border-gray-400 outline-none"
      ></input>
    </>
  );
};

export default FormInput;
