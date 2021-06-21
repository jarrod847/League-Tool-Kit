export const Match_success = "Match_success";
export const Match_loading = "Match_loading";
export const Match_failure = "Match_failure";

export type Matches = [];

export interface MatchLoading {
  type: typeof Match_loading;
}

export interface MatchFailure {
  type: typeof Match_failure;
}

export interface MatchSuccess {
  type: typeof Match_success;
  payload: Matches;
}

export type MatchDispatchTypes = MatchLoading | MatchFailure | MatchSuccess;
