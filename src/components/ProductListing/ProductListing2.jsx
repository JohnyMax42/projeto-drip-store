import React from "react";
import ProductCard2 from "../ProductCard/ProductCard2";
import styled from "styled-components";
import Cores from "../Cores";

const Wrapper = styled.div`

display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 35px;
    padding-right: 35px;
    max-width: 1000px; /* Largura máxima do container */
    margin: 0 auto; /* Centraliza o container na página */
`;

export default function ProductListing2() {

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
                    <ProductCard2
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