import React from "react";
import type { NextPage } from "next";
import { MainProvider } from "../components/index.style";
import PartnerContainer from "../../partner/container";
import IntroduceContainer from "../../introduce/container";
import Jumbotron from "../components/jumbotron";

const MainContainer: NextPage = () => {
  return (
    <MainProvider>
      <Jumbotron />
      <PartnerContainer />
    </MainProvider>
  );
};
export default MainContainer;
