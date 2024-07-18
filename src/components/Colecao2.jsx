import React from "react"
import Cores from './Cores'
import styled from "styled-components"
import colecao from '../assets/colecao2.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 712px;
    min-height: 196px;
    padding: 10px;
`;

const TextoColecao = styled.div`
    font-weight: 700;
    font-size: 24px;
`;

// const TituloColecao = styled.h3`
//     font-weight: 700;
//     font-size: 24px;
// `;

export default function Colecao2() {
    return (

        <Container>
            <TextoColecao as="h3">
                Coleções em destaque
            </TextoColecao>
            <div className="imagem-colecao">
                <img src={colecao} alt="colecao1" width={600} />
            </div>
        </Container>

    )
}