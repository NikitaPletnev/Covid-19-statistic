import {ItemInterface} from "../interfaces/itemInterface";
import {SET_CONFIRMED} from "./actionTypes";

export const setConfirmed = (confirmed: ItemInterface[]): {type: string, confirmed: ItemInterface[]} => {
    return {
        type: SET_CONFIRMED,
        confirmed
    }
}
