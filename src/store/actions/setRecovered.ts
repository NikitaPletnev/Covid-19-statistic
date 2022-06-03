import {ItemInterface} from "../interfaces/itemInterface";
import {SET_RECOVERED} from "./actionTypes";

export const setRecovered = (recovered: ItemInterface[]): { type: string, recovered: ItemInterface[] } => {
    return {
        type: SET_RECOVERED,
        recovered
    }
}
