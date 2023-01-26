import './header.css'
import Logo from '../../Images/logoUnipecas.png'
import { Link } from 'react-router-dom'

function Header() {
  return(
    <div className="conteudoHeader">
      <div className="infoHeader">
        <p>Rua Primavera, 198 - Canoas - RS</p>
        <p>Telefone: (51) 3059 3805</p>
      </div>  
      <div className="navHeader">
        <img src={Logo} alt="logo"></img>

        <div className="navItems">
          <ul>
            <li><Link to='/'>Início</Link></li>
            <li><Link to='/sobrenos'>Sobre Nós</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            {/* <li><Link to='/localizacao'>Localização</Link></li> */}
          </ul>
        </div>
      </div>      
    </div>
  )
}

export default Header;