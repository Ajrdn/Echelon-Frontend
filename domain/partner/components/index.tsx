import React from "react";
import type { NextPage } from "next";
import {
  PartnerProvider,
  ImageProvider,
  AnimationProvider,
} from "./index.style";
import Image from "next/image";
import { SildeImage } from "../assets";

const Partner: NextPage = () => {
  return (
    <PartnerProvider>
      <AnimationProvider>
        {new Array(80).fill(null).map((data, idx) => {
          return (
            <ImageProvider key={idx}>
              <Image src={SildeImage} layout="fixed" alt="파트너" />
            </ImageProvider>
          );
        })}
      </AnimationProvider>
    </PartnerProvider>
  );
};
export default Partner;
