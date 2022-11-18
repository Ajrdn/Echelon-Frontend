import React from "react";
import type { NextPage } from "next";
import Title from "../components/title";
import IntroduceElement from "../components/introduceProvider";
import { IntroduceProvider } from "./index.style";
import {
  Introduce1,
  Introduce2,
  Introduce3,
  Introduce4,
  Introduce5,
  Introduce6,
} from "../assets";

const IntroduceContainer: NextPage = () => {
  const [pictures, setPictures] = React.useState<string[][]>([

  ]);

  return (
    <IntroduceProvider>
      <Title />
      <IntroduceElement pictures={pictures} />
    </IntroduceProvider>
  );
};
export default IntroduceContainer;
