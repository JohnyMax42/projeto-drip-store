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
            <InformationComponent title={'Contato'} informations={[<a href="https://www.google.com.br/maps/place/Manhattan+Square+Garden/@-3.7327059,-38.5130634,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7485ec14d7791:0xe0279af6a0507e9!8m2!3d-3.7327113!4d-38.5104885!16s%2Fg%2F11bw2_h04b?hl=pt-BR&entry=ttu" target="_blank"><Infos>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Infos></a>, '(85) 3051-3411']}/>
            
            <div id='caixaInferior'>
                <hr id='linhaFooter' width="1240px" />
                <p>@ 2022 Digital College</p>
            </div>
        </div>     
    </>
    )
}