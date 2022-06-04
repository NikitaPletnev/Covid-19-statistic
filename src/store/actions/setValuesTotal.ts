import {SET_VALUES_TOTAL} from "./actionTypes";
import {ValuesTotalInterface} from "../interfaces/valuesTotalInterface";

export const setValuesTotal = (valuesTotal: ValuesTotalInterface): { type: string, valuesTotal: ValuesTotalInterface } => {
    return {
        type: SET_VALUES_TOTAL,
        valuesTotal
    }
}
