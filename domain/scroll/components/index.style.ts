import styled from "styled-components";

export const ScrollProvider = styled.div`
  height: 300vh;
`;

export const ScrollTextProvider = styled.div`
  display: flex;
  position: sticky;
  justify-content: center;
  top: 50%;
`;

export const ScrollText = styled.h2<{ opacity: number }>`
  opacity: ${(props) => props.opacity};
`;
