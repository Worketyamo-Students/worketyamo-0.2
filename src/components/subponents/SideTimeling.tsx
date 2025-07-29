import React from "react";
import Timeline from "./Timeline";
import Timelineline from "./Timeline-line";
import TimeLineFooter from "./TimeLineFooter";
const SideTimeling = () => {
  return (
    <div className=" bg-[#00539C0A] flex-1 flex flex-col items-baseline pl-10 pr-25 gap-20 pt-[1.75rem] h-[100%] lg:gap-10 ">
      <img src="/IT-logo.svg" alt="" className="w-[6.25rem] h-[6.25rem] " />
      <div>
        <Timeline
          path="/"
          img="/Person.svg"
          label="Inscription"
          text="Entrez vos informations personnelles."
        >
          <Timelineline />
        </Timeline>
        <Timeline
          path="/verifications"
          img="/mail-01-stroke-rounded 1.svg"
          label="Validation OTP"
          text="Confirmez votre adresse e-mail."
        >
          <Timelineline />
        </Timeline>
        <Timeline
          path="/invitations"
          img="/add-team-stroke-rounded 1.svg"
          label="Invitez vos amis "
          text="Envoyez des invitations à vos amis."
        >
          <Timelineline />
        </Timeline>
        <Timeline
          path="onboardings"
          img="/rocket-stroke-rounded 1.svg"
          label="Bienvenu à worketyamo"
          text="Votre inscription est terminée."
        ></Timeline>
      </div>
      <TimeLineFooter path="/bb" />
    </div>
  );
};

export default SideTimeling;
