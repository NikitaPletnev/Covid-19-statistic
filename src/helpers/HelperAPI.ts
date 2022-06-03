export const getCountries = (): Promise<any> => {
    return fetch('https://covid19.mathdro.id/api/countries');
}

export const getDeaths = (): Promise<any> => {
    return fetch('https://covid19.mathdro.id/api/deaths');
}

export const getValuesTotal = (): Promise<any> => {
    return fetch('https://covid19.mathdro.id/api');
}

export const getRecovered = (): Promise<any> => {
    return fetch('https://covid19.mathdro.id/api/recovered');
}

export const getConfirmed = (): Promise<any> => {
    return fetch('https://covid19.mathdro.id/api/confirmed')
}
