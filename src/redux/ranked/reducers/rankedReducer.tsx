import {
  Ranked,
  Ranked_success,
  Ranked_failure,
  Ranked_loading,
  RankedDispatchTypes,
} from "../actions/rankedActionTypes";

interface RankedDetails {
  loading: boolean;
  ranked?: Ranked;
}

const initialState: RankedDetails = {
  loading: false,
};

const RankedReducer = (
  state: RankedDetails = initialState,
  action: RankedDispatchTypes
): RankedDetails => {
  switch (action.type) {
    case Ranked_failure:
      return {
        loading: false,
      };
    case Ranked_loading: {
      return { loading: true };
    }
    case Ranked_success: {
      return { loading: false, ranked: action.payload };
    }
    default:
      return state;
  }
};

export default RankedReducer;
