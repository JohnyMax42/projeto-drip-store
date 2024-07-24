import React from "react";
import styled from "styled-components";
import CadastroCard from "../../components/Cadastro/CadastroCard";

export default function CadastroPage() {

    const Container = styled.div`
        width: 1440px;
        height: 90vh;
        background: linear-gradient(to bottom, #E5E5E5 0%, #EFEFFF 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 100px; `



return (
    <Container>
        <CadastroCard></CadastroCard>
    </Container>
)

}