import './ProductListing.css'
import FilterGroup from '../components/FilterGroup/FilterGroup'

export default function ProductListingPage(){
    
    return(
        <div id='productListing'>

            <div className='bloco'>

                <p><strong>Resultados para "Tênis" -</strong> 389 produtos</p>

                
                <div id='botaoOrdem'>
                    <label htmlFor="selecaoPrecos"  id='labelSelecao'>Ordenar por:</label>
                    <select name="selecao" id="selecaoPrecos">
                        <option value="1"><span>menor preço</span></option>
                        <option value="2">maior preço</option>
                    </select>
                </div>

            </div>

            <div className='bloco'>
            
                <form action="#">

                <div>
                    <p className='filtro'>Filtrar por</p>
                    <hr id='linhaFiltros' />
                </div>

                <FilterGroup title='Marca' inputType='checkbox' options/>
                <FilterGroup title='Categoria' inputType='checkbox' options='Esporte e Lazer'/>
                <FilterGroup title='Gênero' inputType='checkbox' options='Masculino'/>
                <FilterGroup title='Estado' inputType='radio' options='Novo'/>

                <div className='caixasFiltro'>
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
                <div className='caixasFiltro'>
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
                <div className='caixasFiltro'>
                    <label htmlFor="" className='filtro'>Gênero</label><br />
                    <input type="checkbox" name="genero" id="generoMasculino" />
                    <label htmlFor="generoMasculino">Masculino</label><br />
                    <input type="checkbox" name="genero" id="generoFeminino" />
                    <label htmlFor="generoFeminino">Feminino</label><br />
                    <input type="checkbox" name="genero" id="generoUnisex" />
                    <label htmlFor="generoUnisex">Unisex</label><br />
                </div>
                <div className='caixasFiltro'>
                <label htmlFor="" className='filtro'>Estado</label><br />
                    <input type="radio" name="estado" id="estadoNovo" />
                    <label htmlFor="estadoNovo">Novo</label><br />
                    <input type="radio" name="estado" id="estadoUsado" />
                    <label htmlFor="estadoUsado">Usado</label>
                </div>

                </form>

                <div>
                    <h1>LISTA DE CARDS</h1>
                </div>

            </div>
            
        </div>

    )
}