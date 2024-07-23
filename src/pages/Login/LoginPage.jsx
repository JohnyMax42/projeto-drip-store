import React from "react";
import styled from "styled-components";
import LoginCard from "../../components/Login/LoginCard";

export default function LoginPage() {
    const Container = styled.div`
        width: 1440px;
        height: 90vh;
        background: linear-gradient(to bottom, #B5B6F2 0%, #EFEFFF 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 100px;
    `
    return (
        <Container>
            <LoginCard></LoginCard>
        </Container>
    )
}