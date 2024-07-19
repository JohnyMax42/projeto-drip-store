import React from "react";
import styled from "styled-components";
import Cores from "../Cores";

const Titulo = styled.div`
    color: ${Cores.darkGray2};
    font-size: bold 14px;
`;

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

export default function FilterGroup({title, inputType, options=[]}){
    return (
        <>
        <Titulo>{title}</Titulo>
        <EscolhaInput escolha={inputType}/>
    </>
    )
}