import React, { useState, useEffect, useContext } from "react";
import MyContext from '../MyContext';
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 35px;
    padding-right: 35px;
`;

export default function ProductListing({ num = 4 }) {
    const sharedValue = useContext(MyContext);
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

    return (
        <>
            <Wrapper>
                {sharedValue.slice(0, num).map((product, index) => (
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
