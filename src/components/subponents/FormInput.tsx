import React from "react";
interface Pros {
  label?: string;
  placeholder: string;
  type: string;
}
const FormInput: React.FC<Pros> = ({ label, placeholder, type }) => {
  return (
    <div>
      <h1 className="mb-1 text-[16px] font-medium">{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="  rounded-md  p-3 w-100/100 h-10 border-1 border-gray-400 outline-none"
      ></input>
    </div>
  );
};

export default FormInput;
