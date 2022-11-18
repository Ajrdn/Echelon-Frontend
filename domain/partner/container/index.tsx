import React from "react";
import type { NextPage } from "next";
import Carousel from "../components/carousel";
import { SildeImage } from "../assets";
import { PartnerProvider } from "./index.style";
import Title from "../components/title";

const PartnerContainer: NextPage = () => {
  return (
    <PartnerProvider>
      <Title/>
      <Carousel imageData={new Array(10).fill(SildeImage)} />
      <Carousel
        imageData={new Array(10).fill(SildeImage)}
        start={1200}
      />
    </PartnerProvider>
  );
};
export default PartnerContainer;
