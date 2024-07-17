import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner';

const Layout = ({ pagina }) => {
    return (
        <div>
            <Header />

            {pagina}

            <Footer />
        </div>
    );
};

export default Layout