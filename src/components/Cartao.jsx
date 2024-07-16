export default function Cartao({nome, imagem, descricao}){
    return(
        <div class='card' style={{width: '18rem'}}>
            <img src={imagem} class='card-img-top' alt='card'/>

        </div>
    )
}