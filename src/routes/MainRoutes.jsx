import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { NavBar } from '../Components.jsx/NavBar';
import { Footer } from '../Components.jsx/Footer';
import { DataShirt } from '../Pages/DataShirt';
import { Recharge } from '../Pages/Recharge';
import { Account } from '../Pages/Account';


export const MainRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/datos_compra' element={<DataShirt />} />
                <Route path='/recarga' element={<Recharge />} />
                <Route path='/cuenta' element={<Account />} />
            </Routes>
            <Footer />
        </Router>
    );
};
