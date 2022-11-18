import React from "react";
import type { NextPage } from "next";
import {
  CarouselProvider,
  ImageProvider,
  AnimationProvider,
  ImageGroupProvider,
} from "./carousel.style";
import Image from "next/image";

const Partner: NextPage<{ reverse?: boolean; imageData: string[] }> = ({
  reverse = false,
  imageData,
}) => {
  const [imageWidth, setImageWidth] = React.useState<number>(0);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const providerWidth = imageRef.current?.getBoundingClientRect().width;
    setImageWidth(providerWidth!);
  }, [imageWidth]);

  return (
    <CarouselProvider>
      <AnimationProvider width={imageWidth} reverse={reverse}>
        <ImageGroupProvider ref={imageRef}>
          {imageData.map((data, idx) => {
            return (
              <ImageProvider key={idx}>
                <Image
                  src={data}
                  layout="fixed"
                  alt="파트너"
                  loading="eager"
                  width={142}
                  height={80}
                />
              </ImageProvider>
            );
          })}
        </ImageGroupProvider>

        <ImageGroupProvider>
          {imageData.map((data, idx) => {
            return (
              <ImageProvider key={idx}>
                <Image src={data} layout="fixed" alt="파트너" />
              </ImageProvider>
            );
          })}
        </ImageGroupProvider>
      </AnimationProvider>
    </CarouselProvider>
  );
};
export default Partner;
