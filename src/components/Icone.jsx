export default function Icone({imgIcone, descricao}){
    return(    
        <div className="iconeItem">
            
                <div className="iconeItem_icone">
                    <img src={imgIcone} alt=""/>
                </div>
                <p>{descricao}</p>
            </div>
        
        
    )
}