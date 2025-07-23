import React from "react";
import Header from "./Header";
import OtpBox from "./subponents/OtpBox";
import Btn from "./subponents/Btn";
import { Link } from "react-router-dom";
import Footer from "./subponents/Footer";
import Progression from "./subponents/Progression";
const Otp = () => {
  return (
    <div className="pt-[150px] px-[33px] pb[41px]">
      <Header
        text="Verification OTP"
        paragraph="Rentrez vos infos pour vous connecter ."
      />
      <div className="flex justify-center items-center mt-10 ">
        <OtpBox />
      </div>
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
      <div>
        <Footer />
      </div>
      <div className="flex gap-1.5 pt-80 px-4">
        <Progression color="bg-[#FFA273] opacity-60" />
        <Progression color="bg-[#FFA273]" />
        <Progression color="bg-gray-400" />
        <Progression color="bg-gray-400" />
      </div>
    </div>
  );
};

export default Otp;
