import { combineReducers } from "redux";
import ChampionDetailsReducer from "./champions/reducers/championDetailsReducer";
import ChampionReducer from "./champions/reducers/championReducer";
import DetailReducer from "./match/reducers/matchDetailsReducer";
import MatchReducer from "./match/reducers/matchReducer";
import RankedReducer from "./ranked/reducers/rankedReducer";
import SummonerReducer from "./summoner/reducers/summonerReducer";

const RootReducer = combineReducers({
  summoner: SummonerReducer,
  matches: MatchReducer,
  details: DetailReducer,
  ranked: RankedReducer,
  champions: ChampionReducer,
  championDetails: ChampionDetailsReducer,
});

export default RootReducer;
