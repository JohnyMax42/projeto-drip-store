import React, { useState } from 'react';
import Gmail from '../../assets/gmail.png'
import { styled } from "styled-components"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginCard() {

    const firebaseConfig = {
        apiKey: "AIzaSyAOuprveLnjUp7UHM_QuqG1b3z1OjMy9R8",
        authDomain: "tutorialff-f3880.firebaseapp.com",
        projectId: "tutorialff-f3880",
        storageBucket: "tutorialff-f3880.appspot.com",
        messagingSenderId: "1055193701629",
        appId: "1:1055193701629:web:0dd03008f5149666817294"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleGmailLogin = async () => {
        try {
            const auth = getAuth();
            const email = setEmail; // Pode ser um input do usuário
            const senha = 'sua-senha'; // Pode ser um input do usuário

            await signInWithEmailAndPassword(auth, email, senha);
            // Autenticação bem-sucedida! Redirecione o usuário para a página principal.
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

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
        color: black;
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
                    <InputLogin placeholder="Insira seu login ou email" type="email" onChange={handleEmailChange} value={email} />
                    <label htmlFor="" style={{ paddingTop: '20px', paddingBottom: '5px' }}>Senha *</label>
                    <InputLogin placeholder="Insira sua senha" type="password" />
                    <a href="">Esqueci minha senha</a>
                </WrapperDados>
                <BotaoAcessar>Acessar Conta</BotaoAcessar>
                <p>Ou faça login com:
                    <img src={Gmail} alt="gmail" onClick={handleGmailLogin} />
                </p>
            </form>

        </Wrapper>
    )
}