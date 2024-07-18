import React from "react";
import styled from "styled-components";
import Cores from "../Cores";
import '../../index.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid ${Cores.darkGray};
    border-radius: 8px;
    width: 300px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Imagem = styled.img`
    width: 292px;
    height: 321px;
`;

const NomeProduto = styled.div`
    font-size: 18px;
    margin-top: 10px;
`;

export default function ProductCard({ imagem, name, price, priceDiscount }) {
    return (
        <Container>
            <Imagem src={imagem} alt={name} />
            <NomeProduto>{name}</NomeProduto>
            {priceDiscount ? (
                <>
                    <p className={"teste-paragrafo"}>${price}</p>
                    <p>${priceDiscount}</p>
                </>
            ) : (
                <p>{price}</p>
            )}
        </Container>
    );
}
