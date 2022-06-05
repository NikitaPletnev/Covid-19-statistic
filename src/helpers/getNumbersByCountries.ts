import {ItemInterface} from "../store/interfaces/itemInterface";

export const getNumbersByCountries = (countries: string[], parsingArr: ItemInterface[], value: string) => {
    return countries.map((opt: string) => {
        return parsingArr.filter((el: ItemInterface) => el.countryRegion === opt)
    }).map((opt) => {
        if (!opt.length) {
            return 0
        } else {
            return opt.map((el:any) => el?.[value]).reduce((prev, curr) => (prev || 0) + (curr || 0))
        }
    })
}
