import React from "react";
import styled from "styled-components";
import CadastroCard from "../../components/Cadastro/CadastroCard";

export default function CadastroPage() {

    const Container = styled.div`
         flex: 1 0 auto;
  width: 100%;
  background: #F9F8FE;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px; 
  box-sizing: border-box; /* Inclui padding no cálculo do tamanho total */`

    const BotaoAcessar = styled.button`
        width: 750px;
        height: 48px;
        margin: 20px 0px 20px 0px;
        color: rgba(245, 245, 245, 1);
        background-color: var(--cor-primaria);
        border: 0px;
        border-radius: 8px;
`

    const InputBox = styled.input`
        width: 22px;
        height: 22px;
        border-radius: 4px;
        background-color: '#FF5733','#4CAF50';
        transition: background-color 0.3s ease, border-color 0.3s ease;
`
    return (
        <Container>
            <p className="CadastroTitulo">Criar Conta</p>
            <CadastroCard></CadastroCard>
            <div className="containerCadastro">
                <InputBox type="checkbox"></InputBox>
                <p>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente</p>
            </div>
            <BotaoAcessar>Criar Conta</BotaoAcessar>
        </Container>
    )

}