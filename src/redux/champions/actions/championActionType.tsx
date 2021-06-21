export const Champion_success = "Champion_success";
export const Champion_loading = "Champion_loading";
export const Champion_failure = "Champion_failure";

export type Champion = [];

export interface ChampionLoading {
  type: typeof Champion_loading;
}

export interface ChampionFailure {
  type: typeof Champion_failure;
}

export interface ChampionSuccess {
  type: typeof Champion_success;
  payload: Champion;
}

export type ChampionDispatchTypes =
  | ChampionLoading
  | ChampionFailure
  | ChampionSuccess;
