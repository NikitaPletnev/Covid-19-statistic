import {ItemInterface} from "./itemInterface";
import {CountryInterface} from "./countryInterface";

export interface StateInterface {
    page: 'dashboard' | 'countries' | 'contagion' | 'reports' | 'prevention';
    deaths: ItemInterface[];
    recovered: ItemInterface[];
    confirmed: ItemInterface[];
    countries: CountryInterface[];
    valuesTotal: number[];
}
