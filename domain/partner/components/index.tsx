import React from "react";
import type { NextPage } from "next";
import { PartnerProvider, ImageProvider } from "./index.style";
import Image from "next/image";
import { SildeImage } from "../assets";

const Partner: NextPage = () => {
  return (
    <PartnerProvider>
      {new Array(10).fill(null).map((data, idx) => {
        return (
          <ImageProvider key={idx}>
            <Image src={SildeImage} layout={"fixed"} alt={"파트너형님"} />
          </ImageProvider>
        );
      })}
    </PartnerProvider>
  );
};
export default Partner;
