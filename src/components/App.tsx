import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "./Header/Header";
import Dashboard from "../containers/Dashboard";
import PageInDevelopment from "./StubElements/PageInDevelopment";
import NoPage from "./StubElements/NoPage";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/countries" element={<PageInDevelopment/>}/>
                <Route path="/contagion" element={<PageInDevelopment/>}/>
                <Route path="/reports" element={<PageInDevelopment/>}/>
                <Route path="/prevention" element={<PageInDevelopment/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
