import React from "react";
import type { NextPage } from "next";
import {
  IntroduceElementText,
  IntroduceImageProvider,
} from "./IntroduceElement.style";
import Image from "next/image";

const IntroduceElement: NextPage<{
  introduceImageSrc: string;
  introduceText: string;
}> = ({ introduceImageSrc, introduceText }) => {
  console.log(introduceImageSrc);
  return (
    <IntroduceImageProvider>
      <IntroduceElementText>{introduceText}</IntroduceElementText>
    </IntroduceImageProvider>
  );
};
export default IntroduceElement;
