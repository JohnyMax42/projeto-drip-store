import React from "react"
import './Banner.css'
import Shoes from '../assets/shoes.png'

export default function Banner() {
    return (
        <>
            <div className="Banner">
                <div className="Banner-container">
                    <div className="texto">
                        <p>Melhores ofertas personalizadas</p>
                        <h1>Queima de stoque Nike 🔥</h1>
                        <span>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</span>
                        <input id="botaoEntrar" type="button" value="Ver Ofertas" />
                    </div>
                    <img className="imagem" src={Shoes} alt="shoes" />
                </div>
            </div>
        </>
    )
}