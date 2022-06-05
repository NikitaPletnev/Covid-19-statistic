import {SET_COUNTRIES_INFO_MAY162022} from "./actionTypes";
import {DailyInfoInterface} from "../interfaces/dailyInfoInterface";

export const setCountriesInfoMay162022 = (countriesInfoMay162022: DailyInfoInterface[]): { type: string, countriesInfoMay162022: DailyInfoInterface[] } => {
    return {
        type: SET_COUNTRIES_INFO_MAY162022,
        countriesInfoMay162022
    }
}
