import {initialState} from "../initialState";
import {
    SET_CONFIRMED,
    SET_COUNTRIES,
    SET_DEATHS,
    SET_PAGE,
    SET_RECOVERED,
    SET_VALUES_TOTAL
} from "../actions/actionTypes";
import {StateInterface} from "../interfaces/stateInterface";

const rootReducer = (state: StateInterface = initialState, action?: any) => {
    switch (action.type) {
        case SET_PAGE :
            return Object.assign({}, state, {
                page: action.page,
            });
        case SET_DEATHS :
            return Object.assign({}, state, {
                deaths: action.deaths,
            });
        case SET_RECOVERED :
            return Object.assign({}, state, {
                recovered: action.recovered,
            });
        case SET_CONFIRMED :
            return Object.assign({}, state, {
                confirmed: action.confirmed,
            });
        case SET_COUNTRIES :
            return Object.assign({}, state, {
                countries: action.countries,
            });
        case SET_VALUES_TOTAL :
            return Object.assign({}, state, {
                valuesTotal: action.valuesTotal,
            });

        default:
            return state;
    }
};

export default rootReducer;
