import './FooterStyle.css'
import logo2 from '../assets/logo2.png'
import redesSociais from '../assets/redesSociais.png'

export default function Footer(){
    
    return(
        
         <footer className='caixaFooter'>
            <div className='caixaFooterDois'>
            <div>
                <img id="logo2" src={logo2} alt="logo2"/>
                <p id='textoFooter'>Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quam blanditiis apas unde neque, minima architecto dolores dolorem?</p>
                <img id="redesSociais" src={redesSociais} alt="Redes Sociais"/>
            </div>
            <div className='sessoes'>
                <p className='tituloSessoes'>Informação</p>
                <p>Sobre Drip Store</p>
                <p>Segurança</p>
                <p>Wishpst</p>
                <p>Blog</p>
                <p>Trabalhe conosco</p>
                <p>Meus Pedidos</p>
            </div>
            <div className='sessoes'>
                <p className='tituloSessoes'>Categorias</p>
                <p>Camisetas</p>
                <p>Calças</p>
                <p>Bonés</p>
                <p>Headphones</p>
                <p>Tênis</p>
            </div>
            <div className='sessoes'>
                <p className='tituloSessoes'>Contato</p>
                <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p>(85) 3051-3411</p>
            </div>
            </div>
                <hr width="1240px" size="1px"/>
                <p>@ 2022 Digital College</p>
         </footer>
    )
}