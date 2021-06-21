import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetChampions } from "../redux/champions/actions/championAction";
import { RootStore } from "../redux/store";
import {
  ChampionCard,
  ChampionCont,
  SearchCont,
} from "../styles/champions/championStyles";
import { SummonerInput } from "../styles/summoner/summonerStyles";
import { Link } from "react-router-dom";
import LoadingSpinner from "../util/loadingSpinner";

interface Champ {
  name: string;
  id: string;
  tags: string[];
  info: {
    difficulty: number;
  };
  blurb: string;
}

const AllChampions: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const championData = useSelector((state: RootStore) => state.champions);
  useEffect(() => {
    dispatch(GetChampions());
  }, []);

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const champImg = (champId: string) =>
    `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${champId}.png`;

  return (
    <div>
      <SearchCont>
        <h3>Search: </h3>
        <SummonerInput
          onChange={updateInput}
          value={name}
          type="text"
          name="name"
          placeholder="Champion Name"
        />
      </SearchCont>
      {championData.loading === false ? (
        <ChampionCont>
          {championData.champions
            ?.filter((champion: Champ) => {
              if (name === "") {
                return champion;
              } else if (
                champion.name.toLowerCase().includes(name.toLowerCase())
              ) {
                return champion;
              }
            })
            .map((champion: Champ) => (
              <ChampionCard>
                <div>
                  <h2>{champion.name}</h2>
                  <img src={champImg(`${champion.id}`)} alt="champion Icon" />
                </div>
                <div>
                  {" "}
                  <div>
                    <h3>Type: &nbsp;</h3>
                    {champion.tags.map((tag) => (
                      <p>&nbsp;{tag}</p>
                    ))}
                    <h3>Difficulty: {champion.info.difficulty}</h3>
                  </div>
                  <p>{champion.blurb}</p>{" "}
                  <Link to={`/champion/${champion.id}`}>Champion Page</Link>
                </div>
              </ChampionCard>
            ))}
        </ChampionCont>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default AllChampions;
