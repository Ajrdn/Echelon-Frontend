import React from "react";
import type { NextPage } from "next";
import { IntroduceElementProvider } from "./introduceProvider.style";
import IntroduceElement from "./introduceElement";

const IntroduceProvider: NextPage<{ pictures: string[][] }> = ({
  pictures,
}) => {
  return (
    <IntroduceElementProvider>
      {pictures.map((data, idx) => {
        return (
          <IntroduceElement
            key={idx}
            introduceImageSrc={data[0]}
            introduceText={data[1]}
          />
        );
      })}
    </IntroduceElementProvider>
  );
};
export default IntroduceProvider;
