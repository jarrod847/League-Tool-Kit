import { Dispatch } from "redux";
import {
  SummonerDispatchTypes,
  Summoner_loading,
  Summoner_success,
  Summoner_failure,
} from "./summonerActionTypes";
import BaseUrl from "../../../util/axios";

export const GetSummoner =
  (summonerName: string) =>
  async (dispatch: Dispatch<SummonerDispatchTypes>) => {
    try {
      dispatch({
        type: Summoner_loading,
      });

      const res = await BaseUrl().post(`player/getSummoner`, {
        summonerName: summonerName,
      });

      if (res.status === 200) {
        dispatch({
          type: Summoner_success,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: Summoner_failure,
      });
    }
  };
