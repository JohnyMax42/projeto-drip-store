import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ProductListingPage from "./ProductListingPage";
import ProductViewPage from "./ProductViewPage";
import LoginPage from "./Login/LoginPage";
import MyContext from "../components/MyContext";
import Shoes from "../assets/CardShoes.png"

const sharedValue = [
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
        priceDiscount: 149
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 49.9
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
        priceDiscount: 149.9
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
        priceDiscount: 149.9
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
    },
    {
        name: "K-Swiss V8 - Masculino",
        image: Shoes,
        price: 200,
    },

];

export default function RoutesPages() {
    return (
        <MyContext.Provider value={sharedValue}>
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/ProductListingPage' element={<ProductListingPage />} />
                <Route path='/ProductViewPage' element={<ProductViewPage />} />
                <Route path='/Login' element={<LoginPage />} />
                <Route path='/ProductViewPage/:id' element={<ProductViewPage />} />
            </Routes>
        </MyContext.Provider>
    )
}