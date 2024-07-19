import Banner from "../../components/Banner"
import Banner2 from "../../components/Banner2"
import Colecao1 from "../../components/Colecao1"
import Colecao2 from "../../components/Colecao2"
import ProductCard from "../../components/ProductCard/ProductCard"

export default function HomePage(){
    return(
        <>
        <Banner/>
        <Colecao1 />
        <Colecao2 />
        <ProductCard imagem="src/assets/camisa-star-wars.png" name="Teste" price="100" priceDiscount="150" />
        <ProductCard imagem="src/assets/camisa-star-wars.png" name="Teste" price="100" priceDiscount="150" />
        <Banner2/>
        </>
    )
}