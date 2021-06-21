import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from "../imgs/suke-22.jpg";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-size: 62.5%;
    max-width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-image: url(${backgroundImg});
    background-attachment: fixed;
    
  }

  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  address,
  ol,
  ul,
  li,
  form,
  label,
  table,
  caption {
    font-size: 1.6rem;
}
`;

export const AppCont = styled.div`
  text-align: center;
  background-attachment: fixed;
`;

export const Routes = styled.div`
  height: 100%;
  opacity: 0.5;
  background-color: ${({ theme: { palette } }) => palette.primary.light};
`;
