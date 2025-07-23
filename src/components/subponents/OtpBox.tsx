import React from "react";
import OTPInput from "react-otp-input";
import { useState } from "react";
const OtpBox = () => {
  const [value, setValue] = useState(" ");
  console.log(typeof setValue);
  return (
    <OTPInput
      inputStyle={` text-center rounded w-[4rem] bg-gray-100 h-[4rem] border-2  border-gray-300 `}
      value={value}
      onChange={setValue}
      numInputs={4}
      renderSeparator={<span className="mx-3"></span>}
      renderInput={(props) => <input {...props} />}
      inputType="text"
      skipDefaultStyles={true}
    />
  );
};

export default OtpBox;
