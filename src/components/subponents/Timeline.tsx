import React from "react";
type propsTypes = {
  img: string;
  label: string;
  text: string;
  isactive: boolean;
  children?: React.ReactNode;
};
const Timeline: React.FC<propsTypes> = ({
  img,
  label,
  isactive,
  text,
  children,
}) => {
  return (
    <>
      <div className="flex gap-3 absolute z-2">
        <div
          className={`border-1 ${
            isactive ? "border-black" : "border-gray-300"
          } bg-white  rounded-2xl  h-[50px] w-[59px]  flex justify-center items-center `}
        >
          <img
            src={img}
            alt={label}
            className={`h-[32px] w-[25px] ${isactive ? " " : "invert-50"}`}
          />
        </div>
        <div>
          <h3 className={`font-bold ${isactive ? "text-black" : "text-text"}`}>
            {label}
          </h3>
          <p className="pt-2 text-text">{text}</p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Timeline;
