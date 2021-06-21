import styled from "styled-components";

export const ChampionCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 575px;
  border: solid 1px ${({ theme: { palette } }) => palette.primary.main};
  background-color: rgba(232, 232, 232, 0.7);
  margin: 15px;
  height: 250px;
  padding: 15px;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 60%;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: auto;
    }
  }
`;

export const ChampionCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  align-items: baseline;
`;
