import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const ImageProvider = styled.span`
  margin: 0.5rem;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PartnerProvider = styled.div`
  width: 100%;
  position: relative;
  filter: drop-shadow(rgba(0, 0, 0, 0.04) 0px 2px 11px)
    drop-shadow(rgba(50, 83, 198, 0.14) 0px 18px 40px);
  overflow: hidden;
`;

const rolling = (width: number, count: number) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${width * count}px)
  }
`;

export const ImageGroupProvider = styled.div`
  display: flex;
`;

export const AnimationProvider = styled.div<{ width: number; count: number }>`
  animation: ${(props) => rolling(props.width, props.count)} 24s linear infinite;
  display: flex;
`;
