import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Cores from "../Cores";

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-left: 35px;
    padding-right: 35px;
`;

export default function ProductListing() {

    const products = [
        {
            name: "Nome do produto 1",
            image: "src/assets/shoes.png",
            price: 200,
            priceDiscount: 149
        },
        {
            name: "Nome do produto 2",
            image: "src/assets/shoes2.png",
            price: 49.9
        },
        {
            name: "Nome do produto 1",
            image: "src/assets/shoes.png",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "Nome do produto 1",
            image: "src/assets/shoes2.png",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "Nome do produto 1",
            image: "src/assets/shoes.png",
            price: 200,
        },
    ];

    return (
        <>
            <Wrapper>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        imagem={product.image}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                ))}
            </Wrapper >
        </>
    );
}
