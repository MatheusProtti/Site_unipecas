import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from 'react-router-dom'
// import Imagem1 from '../../Images/ImgemIlustrativa3.jpeg'
// import Imagem2 from '../../Images/acoplamento-de-correntes.png'
// import Imagem3 from '../../Images/corrente-de-transmissao.png'
// import Imagem4 from '../../Images/ImgemIlustrativa4.jpeg'
import './home.css'

function Home() {
    return(
        <div className="homeContent">
            <Header />
            <section className="secaoslidePaginaInicio">
                <div className="infoGeral">
                  <h1>Atualmente a Equipe Técnica da UNIPEÇAS é referência nacional no desenvolvimento de soluções em correntes de transmissão e de engenharia.</h1>
                  <p>UNIPEÇAS é capaz de oferecer produtos e serviços que superam as expectativas quanto à agilidade, qualidade e custos</p>
                </div>
                <div className="botoesDoSlide">
                  <button className="botaoSaibaMais"><Link to='/sobrenos'>Saiba Mais</Link></button>
                  <button className="botaoCatalogo">DOWNLOAD DE NOSSO CATÁLOGO</button>
                </div>
            </section>

            <section className="infoSectionProdutos">
              <h2>Produtos</h2>
              <p>
                Fornecendo produtos diferenciados na linha de correntes e rodas dentadas normatizados ou desenvolvidos sob projeto,
                a UNIPEÇAS não trabalha com "produtos de segunda linha".
              </p>
              <div className="SectionProdutosPaginaHome">
                <div className="gridProdutos">
                  <div className="ItemImagem1">
                    <div className="tituloDaImagem"><span>acoplamento-de-correntes</span></div>
                  </div>
                  <div className="ItemImagem2">
                    <div className="tituloDaImagem"><span>acoplamento-de-correntes</span></div>
                  </div>
                  <div className="ItemImagem3">
                    <div className="tituloDaImagem"><span>corrente-de-transmissao</span></div>
                  </div>
                  <div className="ItemImagem4">
                    <div className="tituloDaImagem"><span>acoplamento-de-correntes</span></div>
                  </div>
                </div>
                <div className="botaoParaPaginaProdutos">
                  <button className="botaoVerMaisProdutos"><Link to='/produtos'>Ver Mais Produtos</Link></button>
                </div>
              </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;