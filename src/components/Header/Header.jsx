import './HeaderStyle.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

export default function Header() {

    const [selectedLink, setSelectedLink] = useState('Home');

    const handleLinkSelection = (linkName) => {
        setSelectedLink(linkName);
    };

    return (
        <header className="caixaHeader">
            <div id='cabecalho'>
                <img id="logo" src={logo} alt="logo" />
                <input id="barraPesquisa" type="text" placeholder="Pesquisar produto..." />
                <input id="botaoLupa" type="button" value='' />
                <a id="cadastro" className="links" href="#cadastro">Cadastre-se</a>
                <input id="botaoEntrar" type="button" value="Entrar" />
                <a id="iconeCarrinho" href="#carrinho">
                    <div id='bolinhaCarrinho'>2</div>
                </a>
            </div>
            <div id="linksHeader">
                <Link to={'/'} className={`links ${selectedLink === 'Home' ? 'selected' : ''}`}
                    onClick={() => handleLinkSelection('Home')}>Home</Link>
                <Link to={'/ProductListingPage'} className={`links ${selectedLink === 'Produtos' ? 'selected' : ''}`}
                    onClick={() => handleLinkSelection('Produtos')}>Produtos</Link>
                <Link to={'/ProductViewPage'} className={`links ${selectedLink === 'Categorias' ? 'selected' : ''}`}
                    onClick={() => handleLinkSelection('Categorias')}>Categorias</Link>
                <Link to={'/ProductViewPage'} className={`links ${selectedLink === 'Pedidos' ? 'selected' : ''}`}
                    onClick={() => handleLinkSelection('Pedidos')}>Meus Pedidos</Link>
            </div>
        </header>
    )
}