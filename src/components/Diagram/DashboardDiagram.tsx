import React, {useEffect, useState} from 'react';
import {Autocomplete, Box, styled, TextField} from "@mui/material";
import {ItemInterface} from "../../store/interfaces/itemInterface";
import {CountryInterface} from "../../store/interfaces/countryInterface";
import setDiagramDashboard from "../../helpers/setDiagramDashboard";
import {getNumbersByCountries} from "../../helpers/getNumbersByCountries";
import Loader from "../Loader/Loader";
import {size} from "../../helpers/size";

interface DashboardDiagramInterface {
    deaths: ItemInterface[],
    confirmed: ItemInterface[],
    recovered: ItemInterface[],
    countries: CountryInterface[]
}

const StyledTextField = styled(TextField)({})


const DashboardDiagramBox = styled(Box)({
    margin:  window.innerWidth > size.laptop ? '25px 25px 0 0 ' : '25px 0 0 0 ',
    borderRadius: 16,
    height: window.innerWidth > size.laptop ? '30%' : '300px',
    background: '#FFF',
    position: "relative",
})

const StyledAutocomplete = styled(Autocomplete)({
    position: "absolute",
    width: '37%',
    left: '15%',
    top: '5%',
    zIndex: 1,
    background: '#f1f1fc',
    borderRadius: 8,
    padding: 5,
    '&.MuiInput-root.MuiInputBase-sizeSmall': {
        height: '20px'
    }
})

const DashboardDiagram = ({deaths, confirmed, recovered, countries}: DashboardDiagramInterface) => {

    const [countriesNames, setCountriesNames] = useState<string[]>([]);
    const [deathsNumbers, setDeathsNumbers] = useState<number[]>([]);
    const [confirmedNumbers, setConfirmedNumbers] = useState<number[]>([]);
    const [recoveredNumbers, setRecoveredNumbers] = useState<number[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

    const rebuildDiagram = (newCountriesArr: string[]) => {
        setSelectedCountries(newCountriesArr);
        setDeathsNumbers(getNumbersByCountries((!!newCountriesArr.length ? newCountriesArr : countriesNames), deaths, 'deaths'));
        setConfirmedNumbers(getNumbersByCountries((!!newCountriesArr.length ? newCountriesArr : countriesNames), confirmed, 'confirmed'));
        setRecoveredNumbers(getNumbersByCountries((!!newCountriesArr.length ? newCountriesArr : countriesNames), recovered, 'recovered'));
    }

    const getTotalActiveCases = () => {
        return confirmedNumbers.map((opt: number, index: number) => Math.abs(opt - (deathsNumbers[index] || 0) - (recoveredNumbers[index] || 0)))
    }

    useEffect(() => {
        setCountriesNames(countries.map((opt: CountryInterface) => opt.name))
    }, [])

    useEffect(() => {
        if (countriesNames.length) {
            if (deaths.length && !deathsNumbers.length) {
                setDeathsNumbers(getNumbersByCountries(countriesNames, deaths, 'deaths'))
            }
            if (confirmed.length && !confirmedNumbers.length) {
                setConfirmedNumbers(getNumbersByCountries(countriesNames, confirmed, 'confirmed'))
            }
            if (recovered.length && !recoveredNumbers.length) {
                setRecoveredNumbers(getNumbersByCountries(countriesNames, recovered, 'recovered'))
            }
        }
    }, [countriesNames, deaths, confirmed, recovered])

    useEffect(() => {
        if ((!!confirmedNumbers.length || !!confirmed.length)) {
            setDiagramDashboard((!!selectedCountries.length ? selectedCountries : countriesNames), deathsNumbers, getTotalActiveCases(), recoveredNumbers)
        }
    }, [deathsNumbers, confirmedNumbers, recoveredNumbers]);

    const renderCountriesSelector = () => {
        if (!confirmedNumbers.length) {
            return <Loader/>
        }
        return (
            <Box>
                <StyledAutocomplete
                    multiple={true}
                    limitTags={2}
                    value={selectedCountries}
                    options={countriesNames}
                    onChange={(e, value: any) => {
                        rebuildDiagram([...value]);
                    }}
                    size="small"
                    renderInput={(params) => (
                        <StyledTextField
                            variant={"standard"} {...params}
                            placeholder={!selectedCountries.length ? 'All Countries' : ''}/>
                    )}
                />
            </Box>
        )
    }

    return <DashboardDiagramBox>
        {renderCountriesSelector()}
        <div style={{
            height: '100%',
            width: '100%',
            paddingTop: 25,
        }} id='dashboardDiagram'/>
    </DashboardDiagramBox>
}

export default DashboardDiagram;
