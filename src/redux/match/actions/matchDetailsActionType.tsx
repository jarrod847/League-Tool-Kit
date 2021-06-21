export const Details_success = "Details_success";
export const Details_loading = "Details_loading";
export const Details_failure = "Details_failure";

// export type Details = {
//   assists: number;
//   kills: number;
//   deaths: number;
// };

export type Details = {};

export interface DetailsLoading {
  type: typeof Details_loading;
}

export interface DetailsFailure {
  type: typeof Details_failure;
}

export interface DetailsSuccess {
  type: typeof Details_success;
  payload: Details;
}

export type DetailDispatchTypes =
  | DetailsLoading
  | DetailsFailure
  | DetailsSuccess;
