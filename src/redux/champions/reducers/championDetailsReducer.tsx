import {
  ChampionDetails_success,
  ChampionDetails_loading,
  ChampionDetails_failure,
  ChampionDetailsDispatchTypes,
  ChampionDetails,
} from "../actions/championDetailsActionType";
interface ChampionsInfo {
  loading: boolean;
  championDetails?: ChampionDetails;
}

const initialState: ChampionsInfo = {
  loading: false,
};

const ChampionDetailsReducer = (
  state: ChampionsInfo = initialState,
  action: ChampionDetailsDispatchTypes
): ChampionsInfo => {
  switch (action.type) {
    case ChampionDetails_failure:
      return {
        loading: false,
      };
    case ChampionDetails_loading: {
      return { loading: true };
    }
    case ChampionDetails_success:
      return { loading: false, championDetails: action.payload };
    default:
      return state;
  }
};

export default ChampionDetailsReducer;
