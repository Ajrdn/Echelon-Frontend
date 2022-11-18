import React from "react";
import type { NextPage } from "next";
import Title from "../components/title";
import IntroduceElement from "../components/introduceProvider";
import { IntroduceProvider } from "./index.style";
import ShortElement from "/public/assets/image/elements/shortElement.svg";
import LongElement from "/public/assets/image/elements/longElement.svg";

const IntroduceContainer: NextPage = () => {
  const [pictures, setPictures] = React.useState<string[][]>([
    [ShortElement, "Shares"],
    [LongElement, "Zero Coupon Convertible Bonf"],
    [ShortElement, "Shares"],
    [LongElement, "Zero Coupon Convertible Bonf"],
    [ShortElement, "Shares"],
    [ShortElement, "Shares"],
  ]);

  return (
    <IntroduceProvider>
      <Title />
      <IntroduceElement pictures={pictures} />
    </IntroduceProvider>
  );
};
export default IntroduceContainer;
