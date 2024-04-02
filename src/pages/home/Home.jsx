import '../home/home.css'
import cell from '../../assets/Icones/cell.png'
import camera from '../../assets/Icones/camera.png'
import bateria from '../../assets/Icones/bateria.png'
import desbloqueio from '../../assets/Icones/desbloqueio.png'
import placa from '../../assets/Icones/placa.png'
import software from '../../assets/Icones/software.png'
import Informacao from '../../components/Informacao'
import img from '../../assets/capaInfo.jpg'
import huawei from '../../assets/huawei.png'
import lg from '../../assets/lg.png'
import apple from '../../assets/apple.png'
import mi from '../../assets/mi.png'
import motorola from '../../assets/motorola.png'
import samsung from '../../assets/samsung.png'
import oneplus from '../../assets/oneplus.png'
import SecaoIcones from '../../components/SecaoIcones'

import icone1 from '../../assets/Icones/atendimentoAgil.png'


export default function contato(){
    return(
      <>
        <section className='cards-servicos'>
            <h2>Conhe nossos serviços</h2>
            <div className="cards">
            <div className="card_item cardTela">
               <div className='card_item-icone'>
                 <img src={cell} alt="icone celular" />
               </div>                
                <p>Troca de Tela</p>
             </div>
             <div className="card_item cardCamera">
             <div className='card_item-icone'>
                 <img src={camera} alt="icone camera" />
               </div>  
                <p>Cameras</p>
             </div>
             <div className="card_item cardBateria">
             <div className='card_item-icone'>
                 <img src={bateria} alt="icone bateria" />
               </div>  
                <p>Troca de Bateria</p>
             </div>
             <div className="card_item cardPlaca">
             <div className='card_item-icone'>
                 <img src={placa} alt="icone placa" />
               </div>  
                <p>Reparo de placa</p>
             </div>
             <div className="card_item cardDesblo">
             <div className='card_item-icone'>
                 <img src={desbloqueio} alt="icone desbloqueio" />
               </div>  
                <p>Desbloqueio</p>
             </div>
             <div className="card_item cardSoft">
             <div className='card_item-icone'>
                 <img src={software} alt="icone software" />
               </div>  
                <p>Restaurações software</p>
             </div>             
            </div>
        </section>
        <Informacao 
        titulo={'Assistência Técnica'}
        descricao={'Aqui você tem as melhores vantagens no reparo do seu smartphone. A Notecellcare possui uma ampla variedade de serviços voltados para telefonia celular e, com ela, você pode comprar acessórios originais e solicitar assistência técnica para celulares e smartphones das diversas marcas como: iPhone, LG, Motorola, Samsung, Xiaomi e muito mais. O reparo dos celulares é feito por técnicos altamente capacitados.'}
        botao={'Orçamento'}
        imagem={img}
        />
        <section className='marcas'>
          <h2>Atendemos as seguintes marcas</h2>
          <div>
            <ul className='marcasLogo'>
              <li className='logo-item'><img src={huawei} alt="" /></li>
              <li className='logo-item'><img src={lg} alt="" /></li>
              <li className='logo-item'><img src={apple} alt="" /></li>
              <li className='logo-item'><img src={mi} alt="" /></li>
              <li className='logo-item'><img src={motorola} alt="" /></li>
              <li className='logo-item'><img src={samsung} alt="" /></li>
              <li className='logo-item'><img src={oneplus} alt="" /></li>
            </ul>
          </div>
        </section>
        <SecaoIcones imgIcone={icone1} descricao={"Atendimento Ágil"}/>
      </>
    )
}