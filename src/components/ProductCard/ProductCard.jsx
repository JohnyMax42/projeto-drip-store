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
    /* border: 1px solid ${Cores.darkGray}; */
    border-radius: 8px;
    width: 300px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: row;
`;

const Imagem = styled.img`
    width: 292px;
    height: 321px;
`;

const NomeProduto = styled.div`
    font-size: 18px;
    margin-top: 10px;
`;

const Preco = styled.div`    
    font-size: 24px;
    color: ${Cores.darkGray};
    margin-top: 10px;

    ${({ desconto }) => desconto && `
        color: ${Cores.lightGray};
        text-decoration: line-through;
    `}
`;

// const SmallText = styled.span`
//     padding-top: 10px;
//     font-size: 12px;
//     text-align: left;
//     color: ${Cores.darkGray};
//     font-weight: 500;
// `;

export default function ProductCard({ imagem, name, price, priceDiscount }) {
    return (
        <Container>
            <Imagem src={imagem} alt={name} />
            {/* <SmallText>Tênis</SmallText> */}
            <NomeProduto>{name}</NomeProduto>
            <ContainerTexto>
                {priceDiscount ? (
                    <>
                        <Preco className={"teste-paragrafo"}>${price}</Preco>
                        <Preco>${priceDiscount}</Preco>
                    </>
                ) : (
                    <Preco>${price}</Preco>
                )}
            </ContainerTexto>
        </Container>
    );
}
