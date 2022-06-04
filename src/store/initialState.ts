import {StateInterface} from "./interfaces/stateInterface";

export const initialState: StateInterface = {
    deaths: [],
    recovered: [],
    confirmed: [],
    countries: [],
    valuesTotal: {recovered: null, confirmed: null, deaths: null},
}
