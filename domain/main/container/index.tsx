import React from "react";
import type { NextPage } from "next";
import PartnerContainer from "../../partner/container";
import IntroduceContainer from "../../introduce/container";

const MainContainer: NextPage = () => {
  return (
    <>
      <IntroduceContainer />
      <PartnerContainer />
    </>
  );
};
export default MainContainer;
