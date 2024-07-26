import React from 'react';
import './FooterStyle.css'
import logo2 from '../../assets/logo2.png'
import styled from 'styled-components'
import Cores from "../Cores";
import Face from '../../assets/faceLogo.png'
import Instagram from '../../assets/InstaLogo.png'
import X from '../../assets/TwitterLogo.png'

const ContainerInfos = styled.section`
    max-width: 233px;
    max-height: 78px;
    margin-top: 72px;
`

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 28px
`

const Infos = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    &:hover{
        color: ${Cores.primary};
        cursor: pointer
}
`
const InformationComponent = ({ title, informations }) => {
    return (
        <ContainerInfos className="InformacoesContainer">
            <Titulo>{title}</Titulo>
            {informations.map((info, index) => (
                <Infos key={index}>{info}</Infos>
            ))}
        </ContainerInfos>
    );
};


export default function Footer() {
    let facelink = "https://web.facebook.com/digitalcollegebr/"
    let Instalink = "https://www.instagram.com/digitalcollegebr/"
    let xlink = "https://x.com/eaicollegers"
    return (
        <>
            <div className='containerPrincipal'>

                <div id='caixaSuperior'>
                    <div>
                    <img id="logoFooter" src={logo2} alt="logo2" />
                    <p id='textoFooter'>Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quam blanditiis apas unde neque, minima architecto dolores dolorem?</p>
                    <div className="redesSociais">
                        <a href={facelink} target="_blank" title='Facebook'><img src={Face} alt="Facebook" /></a>
                        <a href={Instalink} target="_blank" title='Instagram' style={{ paddingRight: 35, paddingLeft: 35 }}><img src={Instagram} alt="Instagram" /></a>
                        <a href={xlink} target="_blank" title='X'><img src={X} alt="X" /></a>
                    </div>
                    </div>

                    <InformationComponent title={'Informação'} informations={['Sobre Drip Store', 'Segurança', 'Wishlist', 'Blog', 'Trabalhe Conosco', 'Meus Pedidos']} />
                    <InformationComponent title={'Categorias'} informations={['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis']} />
                    <InformationComponent title={'Contato'} informations={[<a href="https://maps.app.goo.gl/FWFsV2bRwoEw7SpD9" target="_blank"><Infos>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Infos></a>, '(85) 3051-3411']} />
                </div>

                <div id='caixaInferior'>
                    <hr id='linhaFooter'/>
                    <p>@ 2022 Digital College</p>
                </div>

            </div>
        </>
    )
}