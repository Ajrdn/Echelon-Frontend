import Image from "next/image";
import styled from "styled-components";

export const ImageProvider = styled.div`
  margin-right: 0.5rem;
`;

export const PartnerProvider = styled.div`
  background-color: black;
  display: flex;
  overflow: hidden;
`;

export const CustomImage = styled(Image)`
  display: block;
`;
