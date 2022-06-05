import {StateInterface} from "./interfaces/stateInterface";

export const initialState: StateInterface = {
    deaths: [],
    recovered: [],
    confirmed: [],
    countries: [],
    countriesInfoMay152022: [],
    countriesInfoMay162022: [],
    valuesTotal: {recovered: null, confirmed: null, deaths: null},
}
