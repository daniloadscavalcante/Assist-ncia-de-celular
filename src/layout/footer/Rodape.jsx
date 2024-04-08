import '../footer/rodape.css'
import maps from '../../assets/maps.png'
export default function Rodape(){
    return(
        <footer>
            <div className="conteudoRodape">
            <div className="dias">
                <h3 className='logoRodape'>Cell<span>Fe</span></h3>
                <p><strong>Segunda a sexta-feira:</strong><br/> 09:00 as 17:30 hrs 
                    <br/><strong>Sábado:</strong><br/> 09:00 as 12:30 hrs</p>
            </div>
            <div className="endereco">
                <h3>Endereço</h3>
                <p>Av. Paulista 1499 Loja 14 Dentro da Galeria Andrea Matarazzo </p>
                <div className='mapa'><img src={maps} alt="" /></div>
            </div>
            <div className="contato">
                <h3>Contato</h3>
                <p>Telefone: +55 (11) 288-3820</p>
                <p>Telefone: +55 (11) 288-3820</p>
                <p>Telefone: +55 (11) 288-3820</p>
                <p>E-mail: cellfe@cell.com.br</p>
            </div>
            <div className="redesociais">
                <h3>Rede sociais</h3>
                <div>
                    <span class="fa-brands fa-instagram"></span>
                    <span class="fa-brands fa-square-facebook"></span>
                </div>
                <div></div>
            </div>
            </div>
            <div className='copy'>© 2022 Notecellcare. Todos os direitos reservados.</div>
        </footer>
    )
}