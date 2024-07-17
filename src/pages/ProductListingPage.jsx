import './ProductListing.css'

export default function ProductListingPage(){
    
    return(
        <div>
            <p><strong>Resultados para "Tênis" -</strong> 389 produtos</p>
            <div>
                <button id='botaoSelecao'>
                <label htmlFor="selecaoPrecos">Ordenar por:</label>
                <select name="selecao" id="selecaoPrecos">
                    <option value="1"> menor preço</option>
                    <option value="2"> maior preço</option>
                </select>
                </button>
            </div>
            <form action="#">
            <p className='filtro'>Filtrar por</p>
            <hr width="258px" size="1px"/>
                <div>
                    <label htmlFor="" className='filtro'>Marca</label><br />
                    <input type="checkbox" name="marca" id="marcaAdiddas" />
                    <label htmlFor="marcaAdiddas">Adiddas</label><br />
                    <input type="checkbox" name="marca" id="marcaCalenciaga" />
                    <label htmlFor="marcaCalenciaga">Calenciaga</label><br />
                    <input type="checkbox" name="marca" id="marcaKswiss" />
                    <label htmlFor="marcaKswiss">K-Swiss</label><br />
                    <input type="checkbox" name="marca" id="marcaNike" />
                    <label htmlFor="marcaNike">Nike</label><br />
                    <input type="checkbox" name="marca" id="marcaPuma" />
                    <label htmlFor="marcaPuma">Puma</label><br />
                </div>
                <div>
                    <label htmlFor="" className='filtro'>Categoria</label><br />
                    <input type="checkbox" name="categoria" id="categoriaEsporte" />
                    <label htmlFor="categoriaEsporte">Esporte e lazer</label><br />
                    <input type="checkbox" name="categoria" id="categoriaCasual" />
                    <label htmlFor="categoriaCasual">Casual</label><br />
                    <input type="checkbox" name="categoria" id="categoriaUtilitario" />
                    <label htmlFor="categoriaUtilitario">Utilitário</label><br />
                    <input type="checkbox" name="categoria" id="categoriaCorrida" />
                    <label htmlFor="categoriaCorrida">Corrida</label><br />
                </div>
                <div>
                    <label htmlFor="" className='filtro'>Gênero</label><br />
                    <input type="checkbox" name="genero" id="generoMasculino" />
                    <label htmlFor="generoMasculino">Masculino</label><br />
                    <input type="checkbox" name="genero" id="generoFeminino" />
                    <label htmlFor="generoFeminino">Feminino</label><br />
                    <input type="checkbox" name="genero" id="generoUnisex" />
                    <label htmlFor="generoUnisex">Unisex</label><br />
                </div>
                <div>
                <label htmlFor="" className='filtro'>Estado</label><br />
                    <input type="radio" name="estado" id="estadoNovo" />
                    <label htmlFor="estadoNovo">Novo</label><br />
                    <input type="radio" name="estado" id="estadoUsado" />
                    <label htmlFor="estadoUsado">Usado</label>
                </div>
            </form>
        </div>

    )
}