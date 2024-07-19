import React from "react";
import styled from "styled-components";
import Cores from "../Cores";

//estilo do input
const Titulo = styled.div`
    color: ${Cores.darkGray2};
    font-size: bold 14px;
`;


//escolha do input type checkbox ou radio
function EscolhaInput({escolha}){

    let Resultado

    if(escolha=='checkbox'){
        Resultado = ({})=>{
            return(
            <>
            <input type="checkbox" id="cb1" />
            <label htmlFor="cb1">label teste checkbox</label>
            </>
            )
        }
    } else if(escolha=='radio'){
        Resultado = ({})=>{
            return(
            <>
            <input type="radio" name="r1" id="r1" />
            <label htmlFor="r1">label teste radio</label>
            </>
            )
        }
    }
    return(
        <>
        <p>{<Resultado/>}</p>
       </> 
    )
}

//opções de categorias dos filtros
function EscolhaOption({escolha}){

    let Opcoes = []

    if(escolha==('Marka'||'marka')){
        Opcoes = [
            {texto: 'Adiddas'},
            {texto: 'Calenciada'},
            {texto: 'K-Swiss'},
            {texto: 'Nike'},
            {texto: 'Puma'}
        ]
    } else if(escolha==('Categoria'||'categoria')){
        Opcoes = [
            {texto: 'Esporte e lazer'},
            {texto: 'Casual'},
            {texto: 'Utilitário'},
            {texto: 'Corrida'}
        ]
    } else if(escolha==('Gênero'||'gênero')){
        Opcoes = [
            {texto: 'Masculino'},
            {texto: 'Feminino'},
            {texto: 'Unisex'}
        ]
    } else if(escolha==('Estado'||'estado')){
        Opcoes = [
            {texto: 'Novo'},
            {texto: 'Usado'}
        ]
    }

    let ObjetosFiltros = Opcoes.map((item)=>item.texto)

    return(
        <>
        <p>{<ObjetosFiltros/>}</p>
       </> 
    )
}

export default function FilterGroup({title, inputType, option}){
    return (
    <>
        <Titulo>{title}</Titulo>
        <EscolhaInput escolha={inputType}/>
        {/* <EscolhaOption escolha={option}/> */}
    </>
    )
}