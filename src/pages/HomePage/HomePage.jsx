import Banner from "../../components/Banner"
import Banner2 from "../../components/Banner2"
import Carrossel from "../../components/Carrossel"
import Colecao1 from "../../components/Colecao1"
import Colecao2 from "../../components/Colecao2"
import ProductListing from "../../components/ProductListing/ProductListing"

export default function HomePage() {
    return (
        <>
            <Banner />
            <Colecao1 />
            <Colecao2 />
            <ProductListing></ProductListing>
            <Banner2 />
        </>
    )
}