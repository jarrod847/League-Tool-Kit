import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSummonerRank } from "../redux/ranked/actions/rankedActions";
import { RootStore } from "../redux/store";
import { SummonerCont, RankedDetails } from "../styles/summoner/summonerStyles";
import LoadingSpinner from "../util/loadingSpinner";
interface RankedStats {
  queueType: string | undefined;
  rank: string | undefined;
  leaguePoints: number | undefined;
  wins: number | undefined;
  losses: number | undefined;
  tier: string;
}

const SummonerData = () => {
  const dispatch = useDispatch();
  const summonerApiData = useSelector((state: RootStore) => state.summoner);
  const rankedApiData = useSelector((state: RootStore) => state.ranked);
  useEffect(() => {
    dispatch(GetSummonerRank(summonerApiData.summoner?.id));
  }, []);

  return (
    <div>
      {summonerApiData.loading !== true && rankedApiData.loading !== true ? (
        <SummonerCont>
          <div>
            <h2>Name: {summonerApiData.summoner?.name}</h2>
            <h2>Summoner Level: {summonerApiData.summoner?.summonerLevel}</h2>
          </div>
          <RankedDetails>
            {rankedApiData.ranked?.map((item: RankedStats) => (
              <div className="rankedInfoCont">
                {item.queueType === "RANKED_FLEX_SR" ? (
                  <h2>Ranked Flex </h2>
                ) : (
                  <h2>Ranked Solo/Duo </h2>
                )}
                <div>
                  <h2>
                    {item.tier} {item.rank}
                  </h2>
                  <h2>LP: {item.leaguePoints}</h2>
                </div>
                <div>
                  <h2>&nbsp;Wins: {item.wins}</h2>
                  <h2>&nbsp;Losses: {item.losses}</h2>
                </div>
              </div>
            ))}
          </RankedDetails>
        </SummonerCont>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default SummonerData;
