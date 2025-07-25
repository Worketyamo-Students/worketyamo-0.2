import { Outlet } from "react-router-dom";
import SideTimeling from "./subponents/SideTimeling";
import LoginForm from "./subponents/LoginForm";

function Connection() {
  return (
    <div className=" lg:flex gap-25 lg:h-full">
      <div className="hidden lg:inline w-45/100 ">
        <SideTimeling />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:px-[10rem] lg:w-55/100 hidden  pb-20 ">
        <Outlet></Outlet>
      </div>
      <LoginForm hidden="lg:hidden" path="/verirification-otp" />
    </div>
  );
}

export default Connection;

{
  /* <Btn
          text="Creer le compte"
          border="border-1 border-gray-200"
          width="w-[300px]"
          hight="h-[30px]"
          color="text-white font-medium"
          bgcolor="bg-[#00539C]"
        /> */
}
