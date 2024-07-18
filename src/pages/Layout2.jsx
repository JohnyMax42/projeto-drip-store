import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RoutesPages from './RoutesPages';
import { BrowserRouter } from 'react-router-dom';

const Layout2 = ({ pagina }) => {
    return (
        <>
        <BrowserRouter>
            <Header />
            <RoutesPages/>
            <Footer />
        </BrowserRouter>
        </>
    );
};

export default Layout2