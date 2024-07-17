import './HeaderStyle.css'
import logo from '../assets/logo.png'

export default function Header(){
    
    return(
         <header className="caixaHeader">
            <div id='cabecalho'>
                <img id="logo" src={logo} alt="logo"/>
                <input id="barraPesquisa" type="text" placeholder="Pesquisar produto..."/>
                <input id="botaoLupa" type="button" value=''/>
                <a id="cadastro" className="links" href="#cadastro">Cadastre-se</a>
                <input id="botaoEntrar" type="button" value="Entrar"/>
                <a id="iconeCarrinho" href="#carrinho"></a>
            </div>
            <div>
                <nav id="linksHeader">
                    <a className="links" href="#home">Home</a>
                    <a className="links" href="#produtos">Produtos</a>
                    <a className="links" href="#categorias">Categorias</a>
                    <a className="links" href="#meusPedidos">Meus Pedidos</a>
                </nav>
            </div>
         </header>
    )
}