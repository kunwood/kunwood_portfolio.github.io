import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView.jsx';
import smooth from "./utils/smooth.js";
import link from "./utils/link";

import AboutView from './views/AboutView.jsx';

const App = () => {

    useEffect(() => {
        smooth();
        link();
        
        },[]);

    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;