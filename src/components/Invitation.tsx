import React from "react";
import Footer from "./subponents/Footer";
import Header from "./Header";
import FormInput from "./subponents/FormInput";
import { Link } from "react-router";
import Btn from "./subponents/Btn";
import Progression from "./subponents/Progression";

const Invitation = () => {
  return (
    <div className="pt-[95px] px-[33px] pb[41px]">
      <Header
        text="Finalisation"
        paragraph="Inviter 04 amis pour finaliser l’inscription "
      />
      <div className="px-3 pt-10 flex flex-col gap-5">
        <FormInput
          label="Numeros de Télephone"
          placeholder="Numero whatsapp"
          type="text"
        />
        <FormInput placeholder="Numero whatsapp" type="text" />
        <FormInput placeholder="Numero whatsapp" type="text" />
        <FormInput placeholder="Numero whatsapp" type="text" />
      </div>
      <div className="pt-43pr-1.5 px-4">
        <Link to="/invitation">
          <Btn
            text="Creer le compte"
            border="border-1  mt-10 border-gray-200"
            width="w-100/100"
            hight="h-[36px]"
            color="text-white font-medium"
            bgcolor="bg-[#00539C]"
          />
        </Link>
      </div>
      <Footer />
      <div className="flex gap-1.5 pt-50 px-4">
        <Progression color="bg-[#FFA273] opacity-60" />
        <Progression color="bg-[#FFA273]" />
        <Progression color=" from-[#FFA273]  bg-linear-to-r to-[#00539C]" />
        <Progression color="bg-gray-400" />
      </div>
    </div>
  );
};

export default Invitation;
