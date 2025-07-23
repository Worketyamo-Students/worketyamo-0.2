import React from "react";
import Header from "./subponents/Header";
import { Link } from "react-router-dom";
import Btn from "./subponents/Btn";
import Footer from "./subponents/Footer";
import Progression from "./subponents/Progression";

const OnBoarding = () => {
  return (
    <div className="pt-[150px] px-[33px] pb[41px]">
      <Header
        text="Bienvenue"
        paragraph="Plus que 3 petites minutes ........"
      />
      <div className="flex justify-center items-center mt-10 ">
        <img
          src="/home.jpg"
          alt="Onboarding picture"
          className="w-100/100 h-60 rounded-xl"
        />
      </div>
      <Link to="/verirification-otp">
        <Btn
          text="Creer le compte"
          border="border-1  mt-2 border-gray-200"
          width="w-100/100 mt-10"
          hight="h-[36px]"
          color="text-white font-medium"
          bgcolor="bg-[#00539C]"
        />
      </Link>
      <Footer />
      <div className="flex gap-1.5 pt-50 px-4">
        <Progression color="bg-[#FFA273] opacity-60" />
        <Progression color="bg-[#FFA273]" />
        <Progression color=" from-[#FFA273]  bg-linear-to-r to-[#00539C]" />
        <Progression color="bg-[#00539C]" />
      </div>
    </div>
  );
};

export default OnBoarding;
