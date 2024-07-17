import React from "react"
import './Banner.css'
import Shoes from '../assets/White-Sneakers-PNG-Clipart 1.png'
import Ornamente from '../assets/Ornament 11.png'
export default function Banner() {
    return (
        <>
            <div className="Banner">
                <div className="Banner-container1">
                    <div className="texto">
                        <p className="melhoresOfertas">Melhores ofertas personalizadas</p>
                        <h1 className="textoPrincipal">Queima de stoque Nike 🔥</h1>
                        <span className="textoSecundario">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</span>
                        <br />
                         <input className="butomOfertas" id="" type="button" value="Ver Ofertas" /> 
                    </div>
                    <div className="imagens">
                    <img className="imagem1" src={Shoes} alt="shoes" />
                    <img className="imagem2" src={Ornamente} alt="Ornament11" /> 
                    
                    </div>

                </div>
            </div>
        </>
    )
}