import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetMatchDetails,
  GetMatchIds,
} from "../redux/match/actions/matchActions";
import { RootStore } from "../redux/store";

const MatchHistory = () => {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  // const matchesApiData = useSelector((state: RootState) => state.matches);
  const userData = useSelector((state: RootStore) => state.summoner);
  // const matchDetails = useSelector((state: RootState) => state.details);

  // const ano = matchesApiData.matches;

  const getMatchesIds = () => {
    dispatch(GetMatchIds(userData.summoner?.puuid));
    setBool(true);
  };

  const getMatchDetails = () => {
    dispatch(GetMatchDetails("NA1_3945590230"));
  };
  // console.log(matchesApiData);
  return (
    <div>
      {Object.keys(userData).length !== 1 ? (
        <button onClick={getMatchesIds}>Match History</button>
      ) : (
        <div></div>
      )}
      {/* {ano?.map((item: string) => (
        <div>
          <h2>{item}</h2>
          <button onClick={getMatchDetails}>Get Details</button>
        </div>
      ))} */}
    </div>
  );
};

export default MatchHistory;
