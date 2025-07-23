import React from "react";
interface propsTypes {
  color?: string;
}
const Progression: React.FC<propsTypes> = ({ color }) => {
  return <div className={`${color} w-100/100 h-[8px] rounded-full`}></div>;
};

export default Progression;
