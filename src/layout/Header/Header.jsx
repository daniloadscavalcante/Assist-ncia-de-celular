import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';
import '../Header/style.css';
import banner from '../../assets/Banner-Assist.png';

export default function Header() {
    return(
        <header>
        <div className='bg-black'>
           <div className="container">
                <div className="logo"><img src={logo} alt="CellFe" /></div>
                <nav className="nav-wrapper">
                   <ul className="menu">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/sobre">sobre nós</Link></li>
                    <li><Link to="/servico">serviços</Link></li>
                    <li><Link to="/contato">contato</Link></li>  
                    <Link  className="btnOrcamentot" to="/#">Orçamento</Link>    
                   </ul>
                
                </nav>                
            </div> 
            </div>
            <div className='Banner'>
                    <img src={banner} alt="" />
                </div>
        </header>
    )
}