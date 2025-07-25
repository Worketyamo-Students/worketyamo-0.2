import React from "react";
type propsTypes = {
  text: string;
  paragraph: string;
};
const Header: React.FC<propsTypes> = ({ text, paragraph }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img
        src="/worketyamo.svg"
        alt="work et yamo logo "
        className="hidden lg:inline"
      />
      <img
        src="/pc-logo.svg"
        alt="work et yamo logo"
        className="inline lg:hidden"
      />
      <div className="text-center">
        <h1 className="font-bold text-xl">{text}</h1>
        <p className="text-lg text-gray-300">{paragraph}</p>
      </div>
    </div>
  );
};

export default Header;
