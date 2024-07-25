import Banner2 from "../../components/Banner2"
import Carrossel from "../../components/Carrossel"
import Colecao1 from "../../components/Colecao1"
import Colecao2 from "../../components/Colecao2"
import ProductListing from "../../components/ProductListing/ProductListing"
import Seta from "../../assets/arrow.png"

export default function HomePage() {
    return (
        <>
            <Carrossel />
            <Colecao1 />
            <Colecao2 />
            <div id='extrasPagina2'>
                <p className="strong">Produtos em alta</p>
                <p>Ver todos{<img src={Seta} alt='seta' />}</p>
            </div>
            <ProductListing num={8}></ProductListing>
            <Banner2 />
        </>
    )
}