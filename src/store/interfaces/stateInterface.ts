import {ItemInterface} from "./itemInterface";
import {CountryInterface} from "./countryInterface";
import {ValuesTotalInterface} from "./valuesTotalInterface";

export interface StateInterface {
    deaths: ItemInterface[];
    recovered: ItemInterface[];
    confirmed: ItemInterface[];
    countries: CountryInterface[];
    valuesTotal: ValuesTotalInterface;
}
