import React from "react";
interface propsTypes {
  color?: string;
  text: string;
  width?: string;
  hight?: string;
  children?: React.ReactNode;
  bgcolor?: string;
  border?: string;
}
const Btn: React.FC<propsTypes> = ({
  bgcolor,
  color,
  text,
  width,
  hight,
  children,
  border,
}) => {
  return (
    <button
      className={`flex rounded-md justify-center items-center ${border} ${bgcolor} ${color} ${hight} ${width} ${hight} `}
    >
      {children}
      <h3 className="${color}">{text}</h3>
    </button>
  );
};

export default Btn;
