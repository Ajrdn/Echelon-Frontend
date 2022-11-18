import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const IntroduceImageProvider = styled.div`
  border-radius: 1.5rem;
  position: relative;
  display: inline-block;
  z-index: 100;

  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0.5) 25%,
      rgba(255, 255, 255, 0.7) 40%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url("img/spain_4.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 30px;
`;

export const IntroduceElementText = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: ${theme.white};
  font-size: 2rem;
`;
export const IntroduceElementGradient = styled.div``;
