import React from 'react';
import './FooterStyle.css'
import logo2 from '../../assets/logo2.png'
import styled from 'styled-components'
import Cores from "../Cores";
import redesSociais from '../../assets/redesSociais.png'

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

    return (
    <>
        <div className='containerPrincipal'>
            <div>
                <img id="logoFooter" src={logo2} alt="logo2" />
                <p id='textoFooter'>Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quam blanditiis apas unde neque, minima architecto dolores dolorem?</p>
                <img id="redesSociais" src={redesSociais} alt="Redes Sociais" />
            </div>
            
            <InformationComponent title={'Informação'} informations={['Sobre Drip Store', 'Segurança', 'Wishlist', 'Blog', 'Trabalhe Conosco', 'Meus Pedidos']}/>
            <InformationComponent title={'Categorias'} informations={['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis']}/>
            <InformationComponent title={'Contato'} informations={[<a href="https://maps.app.goo.gl/FWFsV2bRwoEw7SpD9" target="_blank"><Infos>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Infos></a>, '(85) 3051-3411']}/>
            
            <div id='caixaInferior'>
                <hr id='linhaFooter' width="1240px" />
                <p>@ 2022 Digital College</p>
            </div>
        </div>     
    </>
    )
}