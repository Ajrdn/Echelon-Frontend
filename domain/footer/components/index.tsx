import React from "react";
import type { NextPage } from "next";
import {
  FooterBody,
  FooterHead,
  FooterLogo,
  FooterLogoProvider,
  FooterProvider,
  FooterTextProvider,
} from "./index.style";
import Image from "next/image";
import {
  CallLogo,
  EmailLogo,
  FacebookLogo,
  LinkedinLogo,
  LocationLogo,
} from "../assets";

const Footer: NextPage = () => {
  return (
    <FooterProvider>
      <FooterTextProvider>
        <FooterHead>Echelon</FooterHead>
        <FooterBody>
          <Image src={LocationLogo} alt="" />
          <span>16 Eunos crescent #02-2859 Singapore, 400016</span>
        </FooterBody>
        <FooterBody>
          <Image src={CallLogo} alt="" />
          <span>+65 9853 5320</span>
        </FooterBody>
      </FooterTextProvider>

      <FooterLogoProvider>
        <FooterLogo>
          <Image src={FacebookLogo} alt={"페이스북 로고입니다"} />
        </FooterLogo>
        <FooterLogo>
          <Image src={EmailLogo} alt={"페이스북 로고입니다"} />
        </FooterLogo>
        <FooterLogo>
          <Image src={LinkedinLogo} alt={"페이스북 로고입니다"} />
        </FooterLogo>
      </FooterLogoProvider>
    </FooterProvider>
  );
};
export default Footer;
