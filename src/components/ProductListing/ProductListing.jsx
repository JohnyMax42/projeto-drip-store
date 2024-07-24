import React, { useState, useEffect, useContext } from "react";
import MyContext from '../MyContext';
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Shoes from "../../assets/CardShoes.png"

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 35px;
    padding-right: 35px;
`;

export default function ProductListing({ num = 1 }) {
    const dadosAPI = useContext(MyContext);

    return (
        <>
            <Wrapper>
                {dadosAPI ? (
                    dadosAPI.slice(0, num).map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.nome}
                            imagem={(product.imagem_url ? product.imagem_url : Shoes)}
                            price={product.preco_original}
                            priceDiscount={product.preco_desconto}
                        />
                    ))
                ) : (
                    <ProductCard
                        key="1"
                        name="Tênis"
                        imagem=""
                        price="1"
                        priceDiscount="2"
                    />
                )}
            </Wrapper>
        </>
    );
}
