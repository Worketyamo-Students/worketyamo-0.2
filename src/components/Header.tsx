import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src="/pc-logo.svg" alt="" />
      <div className="text-center">
        <h1 className="font-bold text-xl">Creation de compte</h1>
        <p className="text-sm text-gray-300">
          Rentrez vos infos pour creer votre compte .
        </p>
      </div>
    </div>
  );
};

export default Header;
