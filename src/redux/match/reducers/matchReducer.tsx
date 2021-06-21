import {
  Match_success,
  Matches,
  Match_failure,
  Match_loading,
  MatchDispatchTypes,
} from "../actions/matchActionTypes";
interface AllMatches {
  loading: boolean;
  matches?: Matches;
}

const initialState: AllMatches = {
  loading: false,
};

const MatchReducer = (
  state: AllMatches = initialState,
  action: MatchDispatchTypes
): AllMatches => {
  switch (action.type) {
    case Match_failure:
      return {
        loading: false,
      };
    case Match_loading: {
      return { loading: true };
    }
    case Match_success:
      return { loading: false, matches: action.payload };
    default:
      return state;
  }
};

export default MatchReducer;
