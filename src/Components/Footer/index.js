import './footer.css'
import Logo from '../../Images/logoUnipecas.png'

function Footer() {
    return(
        <div className='contentFooter'>
            <img src={Logo} alt="logo"></img>
            <div className='infoFooter'>
                <p>UniPeças - Todos os direitos Reservados @ - 2023</p>
                <p>Rua Primavera, 198 - Bairro Rio Branco - Canoas - RS. CEP 92200-030</p>
            </div>
        </div>
    )
}

export default Footer;