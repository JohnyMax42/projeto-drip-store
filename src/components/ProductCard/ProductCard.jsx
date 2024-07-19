import React from "react";
import styled from "styled-components";
import Cores from "../Cores";
import Line from "../../assets/Line.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    /* Bordar para se guiar melhor */
    /* border: 1px solid ${Cores.darkGray}; */
    border-radius: 8px;
    width: 300px;
`;

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Imagem = styled.img`
    width: 292px;
    height: 321px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const NomeProduto = styled.div`
    font-size: 24px;
    margin-top: 10px;
    font-weight: 400;
    align-self: flex-start;
`;

const Preco = styled.div`    
    font-size: 24px;
    font-weight: 700;
    color: ${Cores.darkGray};
    margin-top: 10px;
`;

const PrecoDesconto = styled.div`    
    font-size: 24px;
    font-weight: 400;
    color: ${Cores.lightGray};
    margin-top: 10px;
`;

export default function ProductCard({ imagem, name, price = 0, priceDiscount = 0 }) {
    return (
        <Container>
            <Imagem src={imagem} alt={name} />
            {/* <SmallText>Tênis</SmallText> */}
            <NomeProduto>{name}</NomeProduto>
            <ContainerTexto>
                {priceDiscount ? (
                    <>
                        <PrecoDesconto className={"teste-paragrafo"} style={{ paddingRight: "15px" }}>${price}</PrecoDesconto>
                        <Preco>${priceDiscount}</Preco>
                    </>
                ) : (
                    <Preco>${price}</Preco>
                )}
            </ContainerTexto>
        </Container >
    );
}
