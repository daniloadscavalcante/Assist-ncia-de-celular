import '../home/home.css'
import cell from '../../assets/Icones/cell.png'
import camera from '../../assets/Icones/camera.png'
import bateria from '../../assets/Icones/bateria.png'
import desbloqueio from '../../assets/Icones/desbloqueio.png'
import placa from '../../assets/Icones/placa.png'
import software from '../../assets/Icones/software.png'

export default function contato(){
    return(
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
    )
}