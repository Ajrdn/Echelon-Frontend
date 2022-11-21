import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const JumbotronProvider = styled.div`
  width: 100%;
  margin: 3rem 0;
  position: relative;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

export const JumbotronText = styled.div`
  position: absolute;
  top: 33%;
  left: 10%;
  color: ${theme.white};
  z-index: 1;
`;

export const HeadText = styled.h3``;
export const BodyText = styled.p`
  margin: 0;
`;
