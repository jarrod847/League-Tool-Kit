import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSummoner } from "../redux/summoner/actions/actions";
import { RootStore } from "../redux/store";
import SummonerData from "./summoner";
import {
  FindSumCont,
  SubCont,
  SummonerButton,
  SummonerInput,
  SummonerForm,
} from "../styles/summoner/summonerStyles";

const FindPlayer: React.FC = () => {
  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  const summonerState = useSelector((state: RootStore) => state.summoner);
  const rankedState = useSelector((state: RootStore) => state.ranked);
  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const findSummoner = () => {
    dispatch(GetSummoner(name));
    setName("");
  };
  return (
    <div>
      <FindSumCont>
        <SubCont>
          <h3>Search for a summoner in the NA region</h3>
          <SummonerForm>
            <SummonerInput
              onChange={updateInput}
              value={name}
              type="text"
              name="name"
              placeholder="Summoners Name"
            />
            <SummonerButton
              onClick={findSummoner}
              disabled={summonerState.loading}
            >
              {summonerState.loading ? "Loading" : "Find"}
            </SummonerButton>
          </SummonerForm>
        </SubCont>
      </FindSumCont>
      {Object.keys(summonerState).length !== 1 ? (
        <FindSumCont>
          <SubCont>
            <SummonerData />
          </SubCont>
        </FindSumCont>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FindPlayer;
