import React from "react";
import Timeline from "./Timeline";
import Timelineline from "./Timeline-line";
const SideTimeling = () => {
  return (
    <div className=" bg-[#00539C0A] flex-1 flex flex-col items-baseline px-20  gap-20 pt-[28px] h-[100%]">
      <img src="/IT-logo.svg" alt="" className="w-[100px] h-[100px]" />
      <div>
        <Timeline
          isactive={true}
          img="/Person.svg"
          label="Inscription"
          text="TEntrez vos informations personnelles."
        >
          <Timelineline />
        </Timeline>
        <Timeline
          isactive={false}
          img="/mail-01-stroke-rounded 1.svg"
          label="Validation OTP"
          text="Confirmez votre adresse e-mail."
        >
          <Timelineline />
        </Timeline>
        <Timeline
          isactive={false}
          img="/add-team-stroke-rounded 1.svg"
          label="Invitez vos amis "
          text="Envoyez des invitations à vos amis."
        >
          <Timelineline />
        </Timeline>
        <Timeline
          isactive={false}
          img="/rocket-stroke-rounded 1.svg"
          label="Bienvenu à worketyamo"
          text="Votre inscription est terminée."
        ></Timeline>
      </div>
    </div>
  );
};

export default SideTimeling;
