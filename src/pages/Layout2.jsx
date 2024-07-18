import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RoutesPages from './RoutesPages';
import { BrowserRouter } from 'react-router-dom';

export default function Layout2(){
    return (
        <>
        <BrowserRouter>
            <Header/>
            <RoutesPages/>
            <Footer/>
        </BrowserRouter>
        </>
    )
}