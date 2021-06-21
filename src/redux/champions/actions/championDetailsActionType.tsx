export const ChampionDetails_success = "ChampionDetails_success";
export const ChampionDetails_loading = "ChampionDetails_loading";
export const ChampionDetails_failure = "ChampionDetails_failure";

export type ChampionDetails = {
  id: string;
  title: string;
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
};

export interface ChampionDetailsLoading {
  type: typeof ChampionDetails_loading;
}

export interface ChampionDetailsFailure {
  type: typeof ChampionDetails_failure;
}

export interface ChampionDetailsSuccess {
  type: typeof ChampionDetails_success;
  payload: ChampionDetails;
}

export type ChampionDetailsDispatchTypes =
  | ChampionDetailsLoading
  | ChampionDetailsFailure
  | ChampionDetailsSuccess;
