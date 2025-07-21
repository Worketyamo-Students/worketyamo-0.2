import React from "react";
import Header from "./Header";
import FormInput from "./subponents/FormInput";
import Progression from "./subponents/Progression";
import Divider from "./subponents/Divider";
function Connection() {
  return (
    <div className=" pt-[82px] px-[33px] pb[41px]">
      <Header
        text="Creation de compte"
        paragraph="Rentrez vos infos pour creer votre compte ."
      />
      <div className="px-3 pt-10 flex flex-col gap-7">
        <FormInput label="Email" placeholder="abc@gmail.com" type="email" />
        <FormInput
          label="Mot de passe"
          placeholder="**************"
          type="password"
        />
      </div>
      <div className="flex gap-1.5 pt-3 px-4">
        <Progression color="bg-[#00539C]" />
        <Progression color="bg-gray-400" />
        <Progression color="bg-gray-400" />
        <Progression color="bg-gray-400" />
      </div>
      <div className="pt-5 pr-1.5">
        <Divider />
      </div>
    </div>
  );
}

export default Connection;
