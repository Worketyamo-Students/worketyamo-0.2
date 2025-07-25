import React from "react";
import { NavLink } from "react-router-dom";
type propsTypes = {
  img: string;
  label: string;
  text: string;
  children?: React.ReactNode;
  path: string;
};
const Timeline: React.FC<propsTypes> = ({
  img,
  label,
  text,
  children,
  path,
}) => {
  return (
    <>
      <NavLink to={path}>
        <div className="flex gap-3 absolute z-2 cursor-pointer ">
          <div
            className={`border-1
              border-gray-300 bg-white  rounded-2xl  h-[50px] w-[59px]  flex justify-center items-center siderbar`}
          >
            <img
              src={img}
              alt={label}
              className={`h-[32px] w-[25px]  invert-50`}
            />
          </div>
          <div>
            <h3 className={`font-bold "text-black" : text-text`}>{label}</h3>
            <p className="pt-2 text-text">{text}</p>
          </div>
        </div>
      </NavLink>
      {children}
    </>
  );
};

export default Timeline;
