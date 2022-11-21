import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const HeaderProvider = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.main};
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: border-box;
`;

export const LogoProvider = styled.div``;

export const MenuProvider = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const List = styled.li`
  list-style: none;
  padding-left: 1rem;
  a {
    color: ${theme.black};
  }
`;

export const LanguageProvider = styled.select`
  margin-left: 1rem;
`;
export const Language = styled.option``;
