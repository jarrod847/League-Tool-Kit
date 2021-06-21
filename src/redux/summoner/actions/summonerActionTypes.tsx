export const Summoner_success = "Summoner_success";
export const Summoner_loading = "Summoner_loading";
export const Summoner_failure = "Summoner_failure";

export type Summoner = {
  name: string;
  summonerLevel: number;
  puuid?: undefined | string;
  id?: undefined | string;
};

export interface SummonerLoading {
  type: typeof Summoner_loading;
}

export interface SummonerFailure {
  type: typeof Summoner_failure;
}

export interface SummonerSuccess {
  type: typeof Summoner_success;
  payload: Summoner;
}

export type SummonerDispatchTypes =
  | SummonerLoading
  | SummonerFailure
  | SummonerSuccess;
