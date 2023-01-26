import Header from "../../Components/Header";
import ImagemUm from "../../Images/ImgemIlustrativa1.jpeg"
import './sobrenos.css'

function SobreNos() {
    return(
        <div className="sobreNos">
            <Header />
            <section className="secaoUm">
              <div className="aondeAtuamos">
                <p>Aqui na Unipeças atuamos nos principais setores da economia, tais como:
                  <ul>
                    <li>Mineração e siderurgia;</li>
                    <li>Processamento de grãos;</li>
                    <li>Indústria de madeira, papel e celulose;</li>
                    <li>Indústria química e petroquímica;</li>
                    <li>Indústria de fertilizantes e transmissão em geral,</li>
                  </ul>
                  onde as correntes e rodas dentadas representam um dos itens mais críticos sob o ponto de vista de manutenção, segurança e confiabilidade dos equipamentos.
                </p>    
              </div>
              <div className="imagemUm">
                <img src="../../Images/ImgemIlustrativa1.jpeg" alt="Um"/>
              </div>
            </section>
            
        </div>
    )
}

export default SobreNos;