export const Ranked_success = "Ranked_success";
export const Ranked_loading = "Ranked_loading";
export const Ranked_failure = "Ranked_failure";

export type Ranked = [];

export interface RankedLoading {
  type: typeof Ranked_loading;
}

export interface RankedFailure {
  type: typeof Ranked_failure;
}

export interface RankedSuccess {
  type: typeof Ranked_success;
  payload: Ranked;
}

export type RankedDispatchTypes = RankedLoading | RankedFailure | RankedSuccess;
