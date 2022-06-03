import {ItemInterface} from "../interfaces/itemInterface";
import {SET_DEATHS} from "./actionTypes";

export const setDeaths = (deaths: ItemInterface[]): {type: string, deaths: ItemInterface[]} => {
    return {
        type: SET_DEATHS,
        deaths
    }
}
