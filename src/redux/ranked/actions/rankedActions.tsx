import { Dispatch } from "redux";
import {
  RankedDispatchTypes,
  Ranked_success,
  Ranked_loading,
  Ranked_failure,
} from "./rankedActionTypes";
import BaseUrl from "../../../util/axios";

export const GetSummonerRank =
  (summonerId: string | undefined) =>
  async (dispatch: Dispatch<RankedDispatchTypes>) => {
    try {
      dispatch({
        type: Ranked_loading,
      });

      const res = await BaseUrl().post(`player/getSummonerRank`, {
        summonerId: summonerId,
      });
      dispatch({
        type: Ranked_success,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: Ranked_failure,
      });
    }
  };
