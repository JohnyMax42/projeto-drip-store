import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Cores from "../Cores";

const Wrapper = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 35px;
    padding-right: 35px;
`;

export default function ProductListing() {
    const [dadosAPI, setDadosAPI] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-store-do1w.onrender.com/shoes');
                const data = await response.json();
                setDadosAPI(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const products = [
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
            priceDiscount: 149
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "src/assets/CardShoes.png",
            price: 200,
        },

    ];

    return (
        <>
            <Wrapper>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        imagem={product.image}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                ))}
            </Wrapper >
        </>
    );
}
