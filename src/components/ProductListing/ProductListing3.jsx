import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Cores from "../Cores";

const Wrapper = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export default function ProductListing3() {

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
