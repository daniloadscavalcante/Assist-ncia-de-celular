import logo from '../../assets/logo.png';
import '../Header/style.css'

export default function Header() {
    return(
        <header>
           <div className="container">
                <div className="logo"><img src={logo} alt="CellFe" /></div>
                <nav className="nav-wrapper">
                <ul className="menu">
                    <li><a href="http://">home</a></li>
                    <li><a href="http://">sobre nós</a></li>
                    <li><a href="http://">serviços</a></li>
                    <li><a href="http://">contato</a></li>
                    <a className='btnOrcamentot' href="http://">Orçamento</a>
                </ul>
                
                </nav>
            </div> 
        </header>
    )
}