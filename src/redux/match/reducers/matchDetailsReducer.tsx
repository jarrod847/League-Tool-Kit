import {
  Details,
  Details_success,
  Details_failure,
  Details_loading,
  DetailDispatchTypes,
} from "../actions/matchDetailsActionType";

interface MatchDetails {
  loading: boolean;
  details?: Details;
}

const initialState: MatchDetails = {
  loading: false,
};

const DetailReducer = (
  state: MatchDetails = initialState,
  action: DetailDispatchTypes
): MatchDetails => {
  switch (action.type) {
    case Details_failure:
      return {
        loading: false,
      };
    case Details_loading: {
      return { loading: true };
    }
    case Details_success:
      return { loading: false, details: action.payload };
    default:
      return state;
  }
};

export default DetailReducer;
