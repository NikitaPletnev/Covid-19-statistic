import {
    getConfirmed,
    getCountries,
    getCountriesInfoMay152022, getCountriesInfoMay162022,
    getDeaths,
    getRecovered,
    getValuesTotal
} from "./HelperAPI";
import {CountryInterface} from "../store/interfaces/countryInterface";
import {setCountries} from "../store/actions/setCountries";
import {setDeaths} from "../store/actions/setDeaths";
import {setValuesTotal} from "../store/actions/setValuesTotal";
import {setRecovered} from "../store/actions/setRecovered";
import {setConfirmed} from "../store/actions/setConfirmed";
import {AnyAction} from "redux";
import {Dispatch} from "react";
import {setCountriesInfoMay152022} from "../store/actions/setCountriesInfoMay152022";
import {setCountriesInfoMay162022} from "../store/actions/setCountriesInfoMay162022";

export const initDashboard = (dispatch: Dispatch<AnyAction>) => {
    getCountries().then((response) => {
        response.json().then((result: { countries: CountryInterface[] }) => {
            dispatch(setCountries(result.countries))
        })
    }).catch((err) => {
        console.log(err)
    });
    getDeaths().then((response) => {
        response.json().then((result: any) => {
            dispatch(setDeaths(result))
        })
    }).catch((err) => {
        console.log(err)
    });
    getValuesTotal().then((response) => {
        response.json().then((result: any) => {
            dispatch(setValuesTotal({
                recovered: result.recovered.value,
                confirmed: result.confirmed.value,
                deaths: result.deaths.value
            }))
        })
    }).catch((err) => {
        console.log(err)
    });
    getRecovered().then((response) => {
        response.json().then((result: any) => {
            dispatch(setRecovered(result))
        })
    }).catch((err) => {
        console.log(err)
    });
    getConfirmed().then((response) => {
        response.json().then((result: any) => {
            dispatch(setConfirmed(result))
        })
    }).catch((err) => {
        console.log(err)
    });
    getCountriesInfoMay152022().then((response) => {
        response.json().then((result: any) => {
            dispatch(setCountriesInfoMay152022(result))
        })
    }).catch((err) => {
        console.log(err)
    });
    getCountriesInfoMay162022().then((response) => {
        response.json().then((result: any) => {
            dispatch(setCountriesInfoMay162022(result))
        })
    }).catch((err) => {
        console.log(err)
    });
}
