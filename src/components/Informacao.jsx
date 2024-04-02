import '../components/informacao.css';
export default function Informacao({titulo, descricao, botao, imagem}){
    return(
        <section className="infoAss">
            <div className='infoAss-blocoText'>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <a className='btnOrcamento' href="http://">{botao}</a>
            </div>
            <div><img src={imagem} alt="" /></div>
        </section>
    )
}