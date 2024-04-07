import '../components/SecaoIcones.css';
import Icone from "../components/Icone";
import icone1 from '../assets/Icones/atendimentoAgil.png'
import icone2 from '../assets/Icones/peca.png'
import icone3 from '../assets/Icones/pagamento.png'
import icone4 from '../assets/Icones/orcamento.png'
import icone5 from '../assets/Icones/envie.png'
import icone6 from '../assets/Icones/compromisso.png'
import icone7 from '../assets/Icones/qualificado.png'

export default function SecaoIcones(){
    return(
        <section className='sectionIcones'>
            <h2>Vantagens da CellFe</h2>
        <div className='icones'>
            <Icone imgIcone={icone1} descricao={"Atendimento Ágil"}/>
            <Icone imgIcone={icone2} descricao={"Peças a Pronta Entrega"}/>
            <Icone imgIcone={icone3} descricao={"Pagamento Facilitado"}/>
            <Icone imgIcone={icone4} descricao={"Cobrimos qualquer orçamento"}/>
            <Icone imgIcone={icone5} descricao={"Envie o celular"}/>
            <Icone imgIcone={icone6} descricao={"Orçamento sem compromisso"}/>
            <Icone imgIcone={icone7} descricao={"Técnicos Qualificados"}/>
        </div>
        </section>
    )
}