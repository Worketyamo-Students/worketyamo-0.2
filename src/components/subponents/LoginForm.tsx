import React from "react";
import Header from "./Header";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import Progression from "./Progression";
import Divider from "./Divider";
import Btn from "./Btn";
import Footer from "./Footer";
interface LoginFormProps {
  hidden?: string;
  path: string;
}

const LoginForm = ({ hidden, path }: LoginFormProps) => {
  return (
    <>
      <div
        className={` pt-[2.8rem]  lg:pt-[3rem] px-[2.1rem] pb-[2.6rem] lg:px-[0]  lg: ${hidden}`}
      >
        <Header
          text="Creation de compte"
          paragraph="Rentrez vos infos pour creer votre compte ."
        />
        <div className="px-3 pt-10  lg:pt-3 flex flex-col gap-7">
          <FormInput label="Email" placeholder="abc@gmail.com" type="email" />
          <FormInput
            label="Mot de passe"
            placeholder="**************"
            type="password"
          />
        </div>
        <div className="flex gap-1.5 pt-3  px-4 lg:hidden">
          <Progression color="bg-[#00539C]" />
          <Progression color="bg-gray-400" />
          <Progression color="bg-gray-400" />
          <Progression color="bg-gray-400" />
        </div>
        <div className="pt-7 pr-1.5 lg:pt-5 ">
          <Divider />
        </div>
        <div className="pt-10 pr-1.5 px-4 lg:pt-5">
          <Btn
            text="Github"
            border="border-1 border-gray-200"
            width="w-100/100"
            hight="h-[36px]"
            color="text-black font-medium"
          >
            <img src="/github-logo.svg" alt="git hub logo" />
          </Btn>
          <Btn
            text="Google"
            border="border-1 mt-3 border-gray-200"
            width="w-100/100"
            hight="h-[36px]"
            color="text-black font-medium"
          >
            <img src="/google.svg" alt="google logo" />
          </Btn>
          <br />
          <Link to={path}>
            <Btn
              text="Creer le compte"
              border="border-1  mt-2 border-gray-200"
              width="w-100/100"
              hight="h-[36px]"
              color="text-white font-medium"
              bgcolor="bg-[#00539C]"
            />
          </Link>
        </div>
        <div>
          <Footer />
        </div>
        <div className="flex gap-1.5 pt-15 px-4 lg:pt-10">
          <Progression color="bg-[#FFA273]" />
          <Progression color="bg-gray-400" />
          <Progression color="bg-gray-400" />
          <Progression color="bg-gray-400" />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
