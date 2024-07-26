import React from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export default function Pagina404() {

    const BackgroundDiv = styled.div`
     background: #F9F8FE;
    `

    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px;
    `

    const WrapperTexto = styled.div`
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding-left: 25px;
        font-weight: 700;

        & p {
            font-size: 64px;
        }
    `

    const ButtonPrimary = styled.button`
        background-color: #C92071;
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 10px;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
            background-color: #AD165F; /* Cor alterada ao passar o mouse */
        }

        &:focus {
            outline: none; /* Remove o contorno padrão ao focar */
        }
    `

    return (
        <BackgroundDiv>
            <Wrapper>
                <img src="https://http.cat/[404]" alt="404" width={450} />
                <WrapperTexto>
                    <h2>Página não encontrada</h2>
                    <p>404</p>
                    <Link to="/"><ButtonPrimary>Voltar para Home</ButtonPrimary></Link>
                </WrapperTexto>
            </Wrapper>
        </BackgroundDiv>
    )
}