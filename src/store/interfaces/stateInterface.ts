import {ItemInterface} from "./itemInterface";
import {CountryInterface} from "./countryInterface";
import {ValuesTotalInterface} from "./valuesTotalInterface";
import {DailyInfoInterface} from "./dailyInfoInterface";

export interface StateInterface {
    deaths: ItemInterface[];
    recovered: ItemInterface[];
    confirmed: ItemInterface[];
    countries: CountryInterface[];
    countriesInfoMay152022: DailyInfoInterface[],
    countriesInfoMay162022: DailyInfoInterface[],
    valuesTotal: ValuesTotalInterface;
}
