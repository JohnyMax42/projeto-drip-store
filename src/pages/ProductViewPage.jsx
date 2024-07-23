import './ProductView.css'
import ProductListing3 from "../components/ProductListing/ProductListing3"
import styled from 'styled-components'
import React, { useState } from 'react';
import Carrossel2 from "../components/Carrossel2"

export default function ProductViewPage() {

    const [selectedSize, setSelectedSize] = useState('41');
    const [selectedColor, setSelectedColor] = useState(null);

    const handleSizeChange = (newSize) => {
        setSelectedSize(newSize === selectedSize ? null : newSize);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <>
            <div id='ProductViewPage'>
                <div id='extrasPagina'>
                    <p><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
                </div>
                
                <div id = 'boxProdutos'>

                    <Carrossel2></Carrossel2>

                    <div id="InfoSapato">
                        <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
                        <p>Casual | Nike | REF:38416711</p>
                        <div className='lateralidade'>
                            <img src="src/assets/Stars.png" alt="estrelas" />
                            <p className='bg-warning paragrafo-estrela text-white'>4.7{<img src='src/assets/star1.png' alt='estrela' />}</p>
                            <p>(90 avaliações)</p>
                        </div>
                        <h2>R$219,00</h2>
                        <p>descrição do produto</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>Tamanho</p>
                        <div className='lateralidade'>
                        <button
                            className={selectedSize === '39' ? 'selected' : ''}
                            onClick={() => handleSizeChange('39')}
                        >39</button>
                        <button
                            className={selectedSize === '40' ? 'selected' : ''}
                            onClick={() => handleSizeChange('40')}
                        >40</button>
                        <button
                            className={selectedSize === '41' ? 'selected' : ''}
                            onClick={() => handleSizeChange('41')}
                        >41</button>
                        <button
                            className={selectedSize === '42' ? 'selected' : ''}
                            onClick={() => handleSizeChange('42')}
                        >42</button>
                        <button
                            className={selectedSize === '43' ? 'selected' : ''}
                            onClick={() => handleSizeChange('43')}
                        >43</button>
                    </div>
                    <p>Cor</p>
                    <div className='lateralidade'>
                        <input className = "escolhacor" type="radio" name="corSapato" id="corAzul" />
                        <input className = "escolhacor" type="radio" name="corSapato" id="corvermelho" />
                        <input className = "escolhacor" type="radio" name="corSapato" id="corPreto" />
                        <input className = "escolhacor" type="radio" name="corSapato" id="corRoxo" />
                    </div>
                    <button className='bg-warning text-white'>COMPRAR</button>
                </div>
                </div>

                <div id='extrasPagina2'>
                    <p><strong>Produtos Relacionados</strong></p>
                    <p>Ver todos{<img src='src/assets/arrow.png' alt='seta' />}</p>
                </div>

                <ProductListing3></ProductListing3>

            </div>
        </>
    )
}