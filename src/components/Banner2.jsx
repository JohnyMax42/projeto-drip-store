import React from "react"
import './Banner2.css'
import Shoes2 from '../assets/shoes2.png'

export default function Banner2() {
    return (
        <>
            <div className="Banner2">
                <div className="Banner-container">
                    <img className="imagem" src={Shoes2} alt="shoes" />
                    <div className="texto">
                        <p>Oferta especial</p>
                        <h1>Air Jordan edição de colecionador</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                        {/* <input id="botaoEntrar" type="button" value="Ver Ofertas" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}