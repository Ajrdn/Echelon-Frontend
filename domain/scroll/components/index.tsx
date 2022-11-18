import React from "react";
import type { NextPage } from "next";
import { ScrollProvider, ScrollText, ScrollTextProvider } from "./index.style";

const Scroll: NextPage = () => {
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);
  const [opa, setOpa] = React.useState<number>(0);
  React.useEffect(() => {
    console.log(divRef.current);
    console.log(divRef.current!.getBoundingClientRect().x);
    console.log(divRef.current!.getBoundingClientRect().y);
    window.addEventListener("scroll", () => {
      // 420 ~ 1120
      const value =
        (Math.round(document.documentElement.scrollTop) - 420) / 700;
      const revValue =
        -(Math.round(document.documentElement.scrollTop) - 420) / 700;

      console.log((Math.round(document.documentElement.scrollTop) - 420) / 700);

      setOpa(value < 1 ? value : 1.6 - value);
    });
  }, []);

  return (
    <ScrollProvider ref={divRef}>
      <ScrollTextProvider>
        <ScrollText ref={textRef} opacity={opa}>
          엄 준 식 화 이팅 엄 준 식화 이팅 엄 준 식 화 이팅 엄 준 식화 이팅 엄
        </ScrollText>
      </ScrollTextProvider>
    </ScrollProvider>
  );
};
export default Scroll;
