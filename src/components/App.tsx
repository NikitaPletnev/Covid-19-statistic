import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "./Header";
import Dashboard from "../containers/Dashboard";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/countries" element={<span>Page in development</span>}/>
                <Route path="/contagion" element={<span>Page in development</span>}/>
                <Route path="/reports" element={<span>Page in development</span>}/>
                <Route path="/prevention" element={<span>Page in development</span>}/>
                <Route path="*" element={<span>Page not found</span>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
