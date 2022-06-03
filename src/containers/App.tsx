import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {StateInterface} from "../store/interfaces/stateInterface";
import {init} from "../helpers/init";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "./Header";

function App() {

    const state = useSelector((state: StateInterface) => {
        return state
    })
    const dispatch = useDispatch();

    useEffect(() => {
        init(dispatch);
        // setDiagramDashboard();
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])


    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<span>CONTENT</span>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
