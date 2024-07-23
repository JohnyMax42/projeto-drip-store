import React from "react"
import { styled } from "styled-components"

export default function LoginCard() {

    const Wrapper = styled.div`
        display: grid;
        flex-flow: column wrap;
        justify-content: center;
        width: 583px;
        height: auto;
        /* border: 1px solid; */
        text-align: left;
        padding: 30px;
        background-color: #FFFFFF;
        border-radius: 7px;
    `

    const WrapperTitulo = styled.div`
        font-weight: 700;
    `

    const InputLogin = styled.input`
        width: 100%;
        height: 60px;
        border: 0px;
        border-radius: 7px;
        padding-inline-start: 25px;
        background-color: rgba(71, 71, 71, 0.04);
    `

    const WrapperDados = styled.div`
        font-weight: 700;
    `

    const BotaoAcessar = styled.button`
        width: 100%;
        height: 48px;
        margin-top: 20px;
        color: rgba(245, 245, 245, 1);
        background-color: var(--cor-primaria);
        border: 0px;
        border-radius: 8px;
    `

    return (
        <Wrapper>
            <WrapperTitulo>
                <h3>Acesse sua conta</h3>
                <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
            </WrapperTitulo>


            <form action="post">
                <WrapperDados>
                    <label htmlFor="" style={{ paddingBottom: '5px' }}>Login *</label>
                    <InputLogin placeholder="Insira seu login ou email" type="text" />
                    <label htmlFor="" style={{ paddingTop: '20px', paddingBottom: '5px' }}>Senha *</label>
                    <InputLogin placeholder="Insira sua senha" type="password" />
                    <a href="">Esqueci minha senha</a>
                </WrapperDados>
                <BotaoAcessar>Acessar Conta</BotaoAcessar>
                <p>Ou faça login com:</p>
            </form>

        </Wrapper>
    )
}