import React from "react"
import './Colecao1.css'
import Camisa from '../assets/camisa-star-wars.png'
export default function Colecao1() {
    return (
        <div className="Colecao1">
            <div className="texto">Coleçôes em destaque</div>
            <div className="colecao-container1">

                <div className="texto">
                    <p className="texto30off">30% Off</p>
                    <p className="textoNovoDrop">Novo Drop Supreme</p>
                    <input className="butomColecoes" id="" type="button" value="Comprar" />
                </div>

                <div className="imagem1Colecao" src={Camisa} alt="camisa">

                </div>

            </div>

        </div>





    )

}