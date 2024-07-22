import './HeaderStyle.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

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
                <Link to={'/'} className="links">Home</Link>
                <Link to={'/ProductListingPage'} className="links">Produtos</Link>
                <Link to={'/ProductViewPage'} className="links">Categorias</Link>
                <Link to={'/ProductViewPage'} className="links">Meus Pedidos</Link>
            </div>
        </header>
    )
}