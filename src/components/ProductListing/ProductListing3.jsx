import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import MyContext from '../MyContext';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export default function ProductListing3() {
    const sharedValue = useContext(MyContext);

    return (
        <>
            <Wrapper>
                {sharedValue.slice(0, 4).map((product, index) => (
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
