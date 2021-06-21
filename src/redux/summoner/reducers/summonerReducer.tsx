import { SummonerDispatchTypes, Summoner, Summoner_loading, Summoner_failure, Summoner_success } from "../actions/summonerActionTypes"

interface Champions {
    loading: boolean,
    summoner?: Summoner
}



const initialState: Champions = {
    loading: false
}

const SummonerReducer = (state:Champions = initialState, action: SummonerDispatchTypes) : Champions => {
    switch(action.type) {
        case Summoner_failure: return {
            loading: false
        }
        case Summoner_loading: {
            return {loading: true}
        }
        case Summoner_success: return {loading: false,
        summoner: action.payload}
        default: return state
    }

}


export default SummonerReducer