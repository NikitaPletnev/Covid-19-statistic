import {CountryInterface} from "../interfaces/countryInterface";
import {SET_COUNTRIES} from "./actionTypes";

export const setCountries = (countries: CountryInterface[]): { type: string, countries: CountryInterface[] } => {
    return {
        type: SET_COUNTRIES,
        countries
    }
}
