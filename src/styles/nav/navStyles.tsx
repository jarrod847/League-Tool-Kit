import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  padding: 0 3%;

  background: ${({ theme: { palette } }) => palette.secondary.main};
`;

export const NavHeader = styled.h2`
  display: flex;
  margin: auto 0;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  .link {
    padding: 0 15px;
    margin: auto;
    color: ${({ theme: { palette } }) => palette.primary.main};
    text-decoration: none;
  }
`;
