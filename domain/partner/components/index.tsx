import React from "react";
import type { NextPage } from "next";
import {
  PartnerProvider,
  ImageProvider,
  AnimationProvider,
  ImageGroupProvider,
} from "./index.style";
import Image from "next/image";
import { SildeImage } from "../assets";

const Partner: NextPage = () => {
  const [imageWidth, setImageWidth] = React.useState<number>(0);
  const [imageCount, setImageCount] = React.useState<number>(20);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const providerHeight = imageRef.current?.getBoundingClientRect().width;
    console.log(providerHeight);
    setImageWidth(providerHeight!);
    console.log(imageWidth);
  }, [imageWidth]);

  return (
    <PartnerProvider>
      <AnimationProvider width={imageWidth} count={imageCount}>
        <ImageGroupProvider>
          {new Array(imageCount).fill(null).map((_, idx) => {
            return (
              <ImageProvider key={idx} ref={imageRef}>
                <Image
                  src={SildeImage}
                  layout="fixed"
                  alt="파트너"
                  loading="eager"
                />
              </ImageProvider>
            );
          })}
        </ImageGroupProvider>

        <ImageGroupProvider>
          {new Array(imageCount).fill(null).map((_, idx) => {
            return (
              <ImageProvider key={idx}>
                <Image src={SildeImage} layout="fixed" alt="파트너" />
              </ImageProvider>
            );
          })}
        </ImageGroupProvider>
      </AnimationProvider>
    </PartnerProvider>
  );
};
export default Partner;
