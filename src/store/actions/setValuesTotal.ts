import {SET_VALUES_TOTAL} from "./actionTypes";

export const setValuesTotal = (valuesTotal: number[]): { type: string, valuesTotal: number[] } => {
    return {
        type: SET_VALUES_TOTAL,
        valuesTotal
    }
}
