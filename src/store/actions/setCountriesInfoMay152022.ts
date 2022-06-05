import {SET_COUNTRIES_INFO_MAY152022} from "./actionTypes";
import {DailyInfoInterface} from "../interfaces/dailyInfoInterface";

export const setCountriesInfoMay152022 = (countriesInfoMay152022: DailyInfoInterface[]): { type: string, countriesInfoMay152022: DailyInfoInterface[] } => {
    return {
        type: SET_COUNTRIES_INFO_MAY152022,
        countriesInfoMay152022
    }
}
