import styled from "styled-components";

export const ChampionPageCont = styled.div`
  background-color: ${({ theme: { palette } }) => palette.background.main};
  width: 85%;
  margin: auto;

  img {
    width: 50%;
  }

  h1 {
    padding: 15px 0 0px 0;
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }
  h3 {
    padding-top: 15px;
    font-size: 1.7rem;
    text-decoration: underline black solid 3px;
    line-height: 1rem;
  }
  p {
    font-size: 1.7rem;
    line-height: 2rem;
  }

  b {
    font-size: 1.7rem;
  }
`;

export const ChampionDetailSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ChampionDetailCont = styled.div`
  padding: 15px;
  width: 45%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ChampionHeaderCont = styled.div``;
