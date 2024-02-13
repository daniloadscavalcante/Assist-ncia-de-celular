import '../home/home.css'
export default function contato(){
    return(
        <section className='cards-servicos'>
            <h2>Conhe nossos serviços</h2>
            <div className="cards">
            <div className="card_item">
               <div className='card_item-icone'>
                 <img src="#" alt="" />
               </div>                
                <p>Troca de Tela</p>
             </div>
             <div className="card_item">
             <div className='card_item-icone'>
                 <img src="#" alt="" />
               </div>  
                <p>Cameras</p>
             </div>
             <div className="card_item">
             <div className='card_item-icone'>
                 <img src="#" alt="" />
               </div>  
                <p>Troca de Bateria</p>
             </div>
             <div className="card_item">
             <div className='card_item-icone'>
                 <img src="#" alt="" />
               </div>  
                <p>Reparo de placa</p>
             </div>
             <div className="card_item">
             <div className='card_item-icone'>
                 <img src="#" alt="" />
               </div>  
                <p>Desbloqueio</p>
             </div>
             <div className="card_item">
             <div className='card_item-icone'>
                 <img src="#" alt="" />
               </div>  
                <p>Restaurações software</p>
             </div>             
            </div>
        </section>
    )
}