import { Dispatch } from "redux";
import {
  Match_success,
  Match_failure,
  Match_loading,
  MatchDispatchTypes,
} from "./matchActionTypes";
import {
  DetailDispatchTypes,
  Details_failure,
  Details_loading,
  Details_success,
} from "./matchDetailsActionType";
import BaseUrl from "../../../util/axios";

export const GetMatchIds =
  (puuid: string | undefined) =>
  async (dispatch: Dispatch<MatchDispatchTypes>) => {
    try {
      dispatch({
        type: Match_loading,
      });

      const res = await BaseUrl().post(`match/getMatchIds`, {
        puuid: puuid,
      });

      dispatch({
        type: Match_success,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: Match_failure,
      });
    }
  };

export const GetMatchDetails =
  (matchId: string) => async (dispatch: Dispatch<DetailDispatchTypes>) => {
    try {
      dispatch({
        type: Details_loading,
      });

      const res = await BaseUrl().post(`match/getMatch`, {
        matchId: matchId,
      });
      dispatch({
        type: Details_success,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: Details_failure,
      });
    }
  };
