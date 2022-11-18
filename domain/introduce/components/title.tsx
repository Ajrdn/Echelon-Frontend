import React from "react";
import type { NextPage } from "next";
import { Description, MainTitle } from "./title.style";

const Title: NextPage = () => {
  return (
    <>
      <MainTitle>Our Funding Solution</MainTitle>
      <Description>
        Our funding solution can be tailored to match each company’s specific
        requirement. Moreover’ our investment approval preocess is relatively
        quick, sowe can be responsive to any inquiry timely metter.
      </Description>
      <Description>We can offer various instrument including</Description>
    </>
  );
};
export default Title;
