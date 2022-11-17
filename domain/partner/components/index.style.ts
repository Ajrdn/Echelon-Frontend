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
  filter: drop-shadow(rgba(0, 0, 0, 0.04) 0px 2px 11px)
    drop-shadow(rgba(50, 83, 198, 0.14) 0px 18px 40px);
  overflow: hidden;
  display: flex;
`;

const rolling = keyframes` 
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  100% {
    transform: translate3d(-25%, 0px, 0px);
  }
`;

export const AnimationProvider = styled.div`
  display: flex;
  animation-duration: 30s;
  animation-name: ${rolling};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: normal;
  align-items: stretch;
  flex-direction: row;
`;
