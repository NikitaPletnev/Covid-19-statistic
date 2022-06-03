import {getConfirmed, getCountries, getDeaths, getRecovered, getValuesTotal} from "./HelperAPI";
import {CountryInterface} from "../store/interfaces/countryInterface";
import {setCountries} from "../store/actions/setCountries";
import {setDeaths} from "../store/actions/setDeaths";
import {setValuesTotal} from "../store/actions/setValuesTotal";
import {setRecovered} from "../store/actions/setRecovered";
import {setConfirmed} from "../store/actions/setConfirmed";
import {AnyAction} from "redux";
import {Dispatch} from "react";

export const init = (dispatch:  Dispatch<AnyAction>) => {
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
            dispatch(setValuesTotal([result.recovered.value, result.confirmed.value, result.deaths.value]))
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
}
