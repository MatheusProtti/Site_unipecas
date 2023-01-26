import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './produtos.css'
import Imagem1 from "../../Images/corrente-de-transmissao.png"
import Imagem2 from "../../Images/ImgemIlustrativa6.jpeg"

function Produtos() {
    return(
        <div className="contentProdutos">
            <Header />
            <h1>Produtos</h1>
            <section className="inicio">
                <h3>
                    Fornecendo produtos diferenciados na linha de correntes e rodas dentadas normatizados ou desenvolvidos sob projeto
                    a UNIPEÇAS não trabalha com "produtos de segunda linha".
                </h3>
                <div className="primeirasFotos">
                    <img className="fotos" src={Imagem1} alt="corrente-de-transmissao"></img>
                    <img className="fotos" src={Imagem2} alt="ImgemIlustrativa6"></img>
                </div>
                <p>  Correntes ou rodas dentadas standard ou especiais, todas com a qualidade UNP.</p>
            </section>
            <section className="correntesDeTransmissao">

            </section>
            <section className="acoplamentosDeCorrente">

            </section>
            <Footer />
        </div>
    )
}

export default Produtos;