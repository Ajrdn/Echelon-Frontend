import React from "react";
import type { NextPage } from "next";
import { Description, MainTitle, TitleProvider } from "./title.style";

const Title: NextPage = () => {
  return (
    <TitleProvider>
      <MainTitle>Partners</MainTitle>
      <Description>Echelon Capital Holding Limited</Description>
    </TitleProvider>
  );
};
export default Title;
