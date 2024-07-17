import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Layout = ({pagina})=>{
    return(
    <div>
        <Header />

        {pagina}

        <Footer />
    </div>
    );
};

export default Layout