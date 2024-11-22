import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { NavBar } from '../Components.jsx/NavBar';
import { Footer } from '../Components.jsx/Footer';
import { DataShirt } from '../Pages/DataShirt';


export const MainRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/datos_compra' element={<DataShirt/>} />
            </Routes>
            <Footer />
        </Router>
    );
};
