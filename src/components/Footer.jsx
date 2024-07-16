import './FooterStyle.css'
import logo2 from '../assets/logo2.png'
import redesSociais from '../assets/redesSociais.png'

export default function Footer(){
    
    return(
        
         <footer className="container">
                <img id="logo2" src={logo2} alt="logo2"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam blanditiis alias unde neque, minima architecto dolores dolorem?</p>
                <img id="redesSociais" src={redesSociais} alt="Redes Sociais"/>
                <div>
                    <p><strong>Informação</strong></p>
                    <ul>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>
                <div>
                    <p>Categorias</p>
                    <ul>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>
                <div>
                    <p>Contato</p>
                    <ul>
                        <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                        <li>(85) 3051-3411</li>
                    </ul>
                </div>
                <hr width="1240px" size="1px"/>
                <p>@ 2022 Digital College</p>

         </footer>
    )
}