import React, { useState } from 'react';
import Gmail from '../../assets/gmail.png'
import { styled } from "styled-components"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [senha, setSenha] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    }

    // const handleGmailLogin = async () => {
    //     try {
    //         const auth = getAuth();
    //         const email = ''; // Pode ser um input do usuário
    //         const senha = ''; // Pode ser um input do usuário

    //         await signInWithEmailAndPassword(auth, email, senha);
    //         // Autenticação bem-sucedida! Redirecione o usuário para a página principal.
    //     } catch (error) {
    //         console.error('Erro ao fazer login:', error);
    //     }
    // };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, senha);
            // console.log('Usuário logado com sucesso:', auth.currentUser.email);
            // Redirecione ou execute outras operações após o login bem-sucedido
            //Mensagem de sucesso
            toast.success('Login feito com sucesso', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            //Erro geral da API
            // toast.error('Erro ao fazer login' + error, {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            // Trate especificamente o erro de email inválido
            if (error.code === 'auth/invalid-email') {
                toast.warning('Endereço de email inválido. Verifique e tente novamente.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.error('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    };

    return (
        <Wrapper>
            <WrapperTitulo>
                <h3>Acesse sua conta</h3>
                <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
            </WrapperTitulo>


            <ToastContainer />
            <form onSubmit={handleLogin}>
                <WrapperDados>
                    <label htmlFor="emailInput" style={{ paddingBottom: '5px' }}>Email *</label>
                    <InputLogin
                        id="emailInput"
                        placeholder="Insira seu email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="senhaInput" style={{ paddingTop: '20px', paddingBottom: '5px' }}>Senha *</label>
                    <InputLogin
                        id="senhaInput"
                        placeholder="Insira sua senha"
                        type="password"
                        value={senha}
                        onChange={handleSenhaChange}
                    />
                    <a href="">Esqueci minha senha</a>
                    <BotaoAcessar>Acessar Conta</BotaoAcessar>
                </WrapperDados>

                <p style={{ paddingTop: 10 }}>Ou faça login com:
                    <img style={{ paddingLeft: 5 }} src={Gmail} alt="gmail" />
                </p>
            </form>

        </Wrapper>
    )
}