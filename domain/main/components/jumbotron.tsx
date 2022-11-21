import React from "react";
import type { NextPage } from "next";
import {
  BodyText,
  HeadText,
  JumbotronProvider,
  JumbotronText,
} from "./jumbotron.style";
import Image from "next/image";
import { JumbotronBackground } from "../assets";

const Jumbotron: NextPage = () => {
  return (
    <JumbotronProvider>
      <JumbotronText>
        <HeadText>Distressed Situation</HeadText>
        <BodyText>A Company With Good Fundamentals.</BodyText>
        <BodyText>But Is Experiencing Liquidity Shortage.</BodyText>
      </JumbotronText>
      <Image
        src={JumbotronBackground}
        alt="배경이요"
        objectFit="cover"
        layout="fill"
        className="autoImage"
      />
    </JumbotronProvider>
  );
};
export default Jumbotron;
