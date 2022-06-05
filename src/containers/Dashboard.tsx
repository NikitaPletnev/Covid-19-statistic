import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateInterface} from "../store/interfaces/stateInterface";
import {initDashboard} from "../helpers/initDashboard";
import {styled} from "@mui/material";
import NumbersElementsSkeleton from "../skeletons/NumbersElementsSkeleton";
import NumbersElements from "../components/Numbers/NumbersElement";
import DashboardDiagramSkeleton from "../skeletons/DashboardDiagramSkeleton";
import DashboardDiagram from "../components/Diagram/DashboardDiagram";
import DashboardTableSkeleton from "../skeletons/DashboardTableSkeleton";
import DashboardTable from "../components/Table/DashboardTable";
import ContagionArticle from "../components/Banners/ContagionArticle";
import CoronavirusSymptoms from "../components/Banners/CoronavirusSymptoms";
import {size} from "../helpers/size";

const DashboardMain = styled('main')({
    position: 'absolute',
    height:  window.innerWidth > size.laptop ? 'calc(100% - 85px)' : 'auto',
    width: '100%',
    background: '#f3f3ff',
    padding: 45,
    boxSizing: "border-box",
    display: window.innerWidth > size.laptop ? 'grid' : '',
    gridTemplateColumns: '2fr 1fr',
})

const Dashboard = () => {

    const [numberElementsLoading, setNumberElementsLoading] = useState(true);
    const [diagramLoading, setDiagramLoading] = useState(true);
    const [tableLoading, setTableLoading] = useState(true);

    const state = useSelector((state: StateInterface) => {
        return state
    })
    const dispatch = useDispatch();

    useEffect(() => {
        initDashboard(dispatch);
    }, [dispatch])

    useEffect(() => {
        if (Object.values(state.valuesTotal as any).some((opt) => !!opt)) {
            setNumberElementsLoading(false)
        }
        if (!!state.countries.length) {
            setDiagramLoading(false)
        }
        if (!!state.countriesInfoMay152022.length && !!state.countriesInfoMay162022.length) {
            setTableLoading(false)
        }
    }, [state])


    const renderNumberElement = () => {
        if (numberElementsLoading) {
            return <NumbersElementsSkeleton/>
        }
        return <NumbersElements
            confirmed={state.valuesTotal.confirmed}
            deaths={state.valuesTotal.deaths}
            recovered={state.valuesTotal.recovered}
        />
    }

    const renderDiagram = () => {
        if (diagramLoading) {
            return <DashboardDiagramSkeleton/>
        }

        return <DashboardDiagram
            recovered={state.recovered}
            deaths={state.deaths}
            confirmed={state.confirmed}
            countries={state.countries}
        />
    }

    const renderTable = () => {
        if (tableLoading) {
            return <DashboardTableSkeleton/>
        }
        return <DashboardTable
            dayFirst={state.countriesInfoMay152022}
            daySecond={state.countriesInfoMay162022}
        />
    }

    const renderContagionArticle = () => {
        return <ContagionArticle/>
    }

    const renderCoronavirusSymptoms = () => {
        return <CoronavirusSymptoms/>
    }

    return <DashboardMain>
        <section>
            {renderNumberElement()}
            {renderDiagram()}
            {renderTable()}
        </section>
        <aside>
            {renderContagionArticle()}
            {renderCoronavirusSymptoms()}
        </aside>
    </DashboardMain>
}

export default Dashboard;
