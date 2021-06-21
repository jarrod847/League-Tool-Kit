import { Dispatch } from "redux";
import {
  Champion_success,
  Champion_failure,
  Champion_loading,
  ChampionDispatchTypes,
} from "./championActionType";
import BaseUrl from "../../../util/axios";
import {
  ChampionDetails_loading,
  ChampionDetailsDispatchTypes,
  ChampionDetails_failure,
  ChampionDetails_success,
} from "./championDetailsActionType";

export const GetChampions =
  () => async (dispatch: Dispatch<ChampionDispatchTypes>) => {
    try {
      dispatch({
        type: Champion_loading,
      });

      const res = await BaseUrl().get(`champions/`);

      dispatch({
        type: Champion_success,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: Champion_failure,
      });
    }
  };

export const GetChampionDetails =
  (id: string) => async (dispatch: Dispatch<ChampionDetailsDispatchTypes>) => {
    try {
      dispatch({ type: ChampionDetails_loading });

      const res = await BaseUrl().post(`champions/${id}`);
      dispatch({
        type: ChampionDetails_success,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: ChampionDetails_failure,
      });
    }
  };
