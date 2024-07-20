import './FooterStyle.css'
import logo2 from '../../assets/logo2.png'
import styled from 'styled-components'
import Cores from "../Cores";
import redesSociais from '../../assets/redesSociais.png'

const Link = styled.a`
    color: white;

    &:hover{
        color: ${Cores.primary};
    }
    
    
`

export default function Footer() {

    return (

        <footer className='caixaFooter'>
            <div className='caixaFooterDois'>
                <div>
                    <img id="logo2" src={logo2} alt="logo2" />
                    <p id='textoFooter'>Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quam blanditiis apas unde neque, minima architecto dolores dolorem?</p>
                    <img id="redesSociais" src={redesSociais} alt="Redes Sociais" />
                </div>
                <div className='sessoes'>
                    <p className='tituloSessoes'>Informação</p>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
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
                    <Link style={{ paddingBottom: 10 }} href="https://www.google.com.br/maps/place/Manhattan+Square+Garden/@-3.7327059,-38.5130634,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7485ec14d7791:0xe0279af6a0507e9!8m2!3d-3.7327113!4d-38.5104885!16s%2Fg%2F11bw2_h04b?hl=pt-BR&entry=ttu" target="_blank">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Link>
                    <p style={{ paddingTop: 10 }}>(85) 3051-3411</p>
                </div>
            </div>
            <hr id='linhaFooter' width="1240px" size="1px" />
            <p>@ 2022 Digital College</p>
        </footer>
    )
}