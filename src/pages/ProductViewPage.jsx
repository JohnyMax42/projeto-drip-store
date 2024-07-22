import './ProductView.css'
import ProductListing3 from "../components/ProductListing/ProductListing3"

export default function ProductViewPage(){
    return(
    <>
        <div id='ProductViewPage'>
        <div className='extrasPagina'>
            <p><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
        </div>
        
        <div id="InfoSapato">
            <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
            <p>Casual | Nike | REF:38416711</p>
            <div className='lateralidade'>
            <img src="src/assets/Stars.png" alt="estrelas"/>
            <p class='bg-warning'>4.7{<img src='src/assets/star1.png' alt='estrela'/>}</p>
            <p>90 avaliações</p>
            </div>
            <h2>R$219,00</h2>
            <p>descrição do produto</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <p>Tamanho</p>
            <div className='lateralidade'>
            <input type="radio" name="tamanhoSapato" id="tamanho39"/>
            <input type="radio" name="tamanhoSapato" id="tamanho40"/>
            <input type="radio" name="tamanhoSapato" id="tamanho41"/>
            <input type="radio" name="tamanhoSapato" id="tamanho42"/>
            <input type="radio" name="tamanhoSapato" id="tamanho43"/>
            </div>
            <p>Cor</p>
            <div className='lateralidade'>
                <input type="radio" name="corSapato" id="corAzul"/>
                <input type="radio" name="corSapato" id="corVermelho"/>
                <input type="radio" name="corSapato" id="corPreto"/>
                <input type="radio" name="corSapato" id="corRoxo"/>
            </div>
            <button class='bg-warning text-light'>COMPRAR</button>
        </div>

        <div className='extrasPagina'>
            <p><strong>Produtos Relacionados</strong></p>
            <p>Ver todos{<img src='src/assets/arrow.png' alt='seta'/>}</p>
        </div>

        <ProductListing3></ProductListing3>

        </div>
    </>
    )
}