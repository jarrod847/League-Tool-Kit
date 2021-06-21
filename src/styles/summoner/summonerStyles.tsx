import styled from "styled-components";
import { Input, Button, Form } from "antd";

export const FindSumCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(232, 232, 232, 0.5);
  width: 35%;
  margin: 5% auto;
  height: 250px;
`;

export const SummonerCont = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SubCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SummonerInput = styled(Input)`
  width: 40%;
  height: 4rem;
  margin: 0 15px;
  font-size: 2rem;
  outline: none;
  ::placeholder {
    font-size: 2rem;
  }
`;

export const SummonerButton = styled(Button)`
  width: 15%;
  height: 4rem;
`;

export const SummonerForm = styled(Form)`
  display: flex;
  justify-content: center;
`;

export const RankedDetails = styled.div`
  display: flex;
  flex-direction: column;

  .rankedInfoCont {
    display: flex;
    flex-direction: column;
  }
`;
