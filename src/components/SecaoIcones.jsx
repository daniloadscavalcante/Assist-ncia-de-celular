import '../components/icones.css'

export default function SecaoIcones({imgIcone, descricao}){
    return(
        <section className='icones'>
            <div class="iconeItem">
                <div class="iconeItem_icone">
                    <img src={imgIcone} alt=""/>
                </div>
                <p>{descricao}</p>
            </div>
        </section>
    )
}