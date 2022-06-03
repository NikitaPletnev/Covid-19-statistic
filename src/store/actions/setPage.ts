import {SET_PAGE} from "./actionTypes";

export const setPage = (page: 'dashboard' | 'countries' | 'contagion' | 'reports' | 'prevention'): { type: string, page: 'dashboard' | 'countries' | 'contagion' | 'reports' | 'prevention' } => {
    return {
        type: SET_PAGE,
        page,
    };
}
