import {
  Champion_success,
  Champion_loading,
  Champion_failure,
  ChampionDispatchTypes,
  Champion,
} from "../actions/championActionType";
interface AllChampions {
  loading: boolean;
  champions?: Champion;
}

const initialState: AllChampions = {
  loading: false,
};

const ChampionReducer = (
  state: AllChampions = initialState,
  action: ChampionDispatchTypes
): AllChampions => {
  switch (action.type) {
    case Champion_failure:
      return {
        loading: false,
      };
    case Champion_loading: {
      return { loading: true };
    }
    case Champion_success:
      return { loading: false, champions: action.payload };
    default:
      return state;
  }
};

export default ChampionReducer;
