import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateInterface} from "../store/interfaces/stateInterface";
import {init} from "../helpers/init";
import { styled} from "@mui/material";
import NumbersElementsSkeleton from "../skeletons/NumbersElementsSkeleton";
import NumbersElements from "../components/NumbersElement";

const DashboardMain = styled('main')({
    position: 'absolute',
    height: 'calc(100% - 85px)',
    width: '100%',
    background: '#f3f3ff',
    padding: 45,
    boxSizing: "border-box",
    display: 'grid',
    gridTemplateColumns: '2fr 1fr'
})

const Dashboard = () => {

    const [numberElementsLoading, setNumberElementsLoading] = useState(true)

    const state = useSelector((state: StateInterface) => {
        return state
    })
    const dispatch = useDispatch();

    useEffect(() => {
        init(dispatch);
        // setDiagramDashboard();
    }, [dispatch])

    useEffect(() => {
        //console.log(state)
        if (Object.values(state.valuesTotal as any).some((opt) => !!opt)) {
            setNumberElementsLoading(false)
        }
    }, [state])


    const renderNumberElement = () => {
        if (numberElementsLoading) {
            return <NumbersElementsSkeleton/>
        }
        return <NumbersElements confirmed={state.valuesTotal.confirmed} deaths={state.valuesTotal.deaths} recovered={state.valuesTotal.recovered} />
    }

    return <DashboardMain>
        <section>
            {renderNumberElement()}
        </section>
        <aside>

        </aside>
    </DashboardMain>
}

export default Dashboard;
