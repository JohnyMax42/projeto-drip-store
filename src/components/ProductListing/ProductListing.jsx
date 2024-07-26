import React, { useContext } from "react";
import MyContext from '../MyContext';
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Shoes from "../../assets/CardShoes.png"
import products from "../Products";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* Retirado apos ajuste geral nas widths */
    /* padding-left: 35px;
    padding-right: 35px; */
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
                    products.slice(0, num).map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            imagem={(product.image)}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                        />
                    ))
                )}
            </Wrapper>
        </>
    );
}
