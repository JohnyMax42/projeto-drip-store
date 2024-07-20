import React from "react";
import styled from "styled-components";
import Cores from "../Cores";

//estilo do titulo
const Titulo = styled.div`
    color: ${Cores.darkGray2};
    font-size: bold 14px;
    font-weight: 700;
    margin-top: 20px;
`;

const DivStyle = styled.div`
    color: ${Cores.darkGray2};
    font-size: bold 14px;
    font-weight: 500;
    width: auto;
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;

//estilo dos inputs
const InputStyle = styled.input`
    width: 22px;
    height: 22px;
    //visibility: hidden;
    //background-color: white;
    &:checked{
    background-color: ${Cores.primary};
    color: white;
    }
`;


//opções de categorias dos filtros
function EscolhaOption({escolher, inputType}){

    let Opcoes = []
    
    if(escolher==('marca')){
        Opcoes = [
            {texto: 'Adiddas'},
            {texto: 'Calenciada'},
            {texto: 'K-Swiss'},
            {texto: 'Nike'},
            {texto: 'Puma'}
        ]
    } else if(escolher==('categoria')){
        Opcoes = [
            {texto: 'Esporte e lazer'},
            {texto: 'Casual'},
            {texto: 'Utilitário'},
            {texto: 'Corrida'}
        ]
    } else if(escolher==('gênero')){
        Opcoes = [
            {texto: 'Masculino'},
            {texto: 'Feminino'},
            {texto: 'Unisex'}
        ]
    } else if(escolher==('estado')){
        Opcoes = [
            {texto: 'Novo'},
            {texto: 'Usado'}
        ]
    }
    return(
        <>
        {Opcoes.map((opcao, index) => (
        <DivStyle key={index}>
          <InputStyle type={inputType} name={`Type${inputType}`} id={`${escolher}-${index}`} value={opcao.texto}/>
          <label htmlFor={`${escolher}-${index}`}>{opcao.texto}</label>
        </DivStyle>
      ))}
       </> 
    )
};

export default function FilterGroup({title, inputType, option}){
    return (
    <>
        <Titulo>{title}</Titulo>
        <EscolhaOption escolher={option} inputType={inputType}/>
    </>
    );
}