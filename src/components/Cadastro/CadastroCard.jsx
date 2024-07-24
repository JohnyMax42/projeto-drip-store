import React, { useState } from 'react';
import { styled } from "styled-components"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function CadastroCard() {

    const Wrapper = styled.div`
    display: grid;
    flex-flow: column wrap;
    justify-content: center; 
    width: 750px;
    height: auto;
    /* border: 1px solid; */
    text-align: left;
    padding: 30px;
    background-color: #FFFFFF;
    border-radius: 7px;
   
`
    const WrapperTitulo = styled.div`
        font-weight: 700;
        margin-bottom: 22px;
        
        `

    const InputCadastro = styled.input`
    color: black;
    width: 100%;
    height: 60px;
    border: 0px;
    border-radius: 7px;
    padding-inline-start: 25px;
    background-color: rgba(71, 71, 71, 0.04);`

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
#botaoEntrar:hover {
    background-color: rgba(126, 0, 61, 0.815);
}
` 
const InputBox = styled.input`
width: 22px;
height: 22px;
gap: 0px;
opacity: 0px;
background-color: rgba(126, 0, 61, 0.815);;
` 

    return (

        <Wrapper>
            <WrapperTitulo>
                <h3>Criar Conta</h3>
                <p>Informações Pessoais</p>
            </WrapperTitulo>
            <form action="post">
                <WrapperDados>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>Nome Completo *</label>
                <InputCadastro placeholder="Insira seu nome" type="text"/>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>CPF *</label>
                <InputCadastro placeholder="Insira seu CPF" type="number"/>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>Email *</label>
                <InputCadastro placeholder="Insira seu email" type="email"/>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>Celular *</label>
                <InputCadastro placeholder="Insira seu celular" type="number"/>
                </WrapperDados>

            </form>
              <WrapperTitulo>
                    <p>Informações de entrega</p>
                </WrapperTitulo>
                <form action="post"></form>
                <WrapperDados>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>Endereço *</label>
                <InputCadastro placeholder="Insira seu endereço" type="text"/>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>Bairro *</label>
                <InputCadastro placeholder="Insira seu bairo" type="text"/>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>Cidade *</label>
                <InputCadastro placeholder="Insira sua cidade" type="text"/>
                <label htmlFor="" style={{ paddingBottom: '5px' }}>CEP *</label>
                <InputCadastro placeholder="Insira seu CEP" type="number"/>

                </WrapperDados>

                 <InputBox  type="checkbox"/>
                 <label htmlFor="" style={{ paddingBottom: '5px' }}>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>

                <BotaoAcessar>Criar Conta</BotaoAcessar>


        </Wrapper>

    )

}