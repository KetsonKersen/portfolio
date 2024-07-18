import { Cards_Style } from "./style";
import responsive from "../../assets/icon-responsive.png"
import design from "../../assets/icon-design.png"
import seo from "../../assets/icon-seo.png"

export default function Cards(){
    return(
        <Cards_Style>
            <div className="card">
                <div className="icon"><img src={responsive} width={"80%"} alt="Responsividade"/></div>
                <p>Websites Responsivos</p>
                <p>Criação de websites que se adaptam automaticamente a diferentes
                dispositivos e tamanhos de tela (desktops, tablets, smartphones).</p>
            </div>
            <div className="card">
                <div className="icon"><img src={design} width={"80%"} alt="Responsividade"/></div>
                <p>UX/UI Design</p>
                <p>Design de interfaces de usuário (UI) intuitivas e atraentes.
                Design de interfaces de usuário (UX) proporcionado melhores expreriencias.</p>
            </div>
            <div className="card">
                <div className="icon"><img src={seo} width={"80%"} alt="Responsividade"/></div>
                <p>SEO (Search Engine Optimization)</p>
                <p>Implementação de práticas de SEO no desenvolvimento front-end
                para melhorar a visibilidade do site nos resultados de busca.</p>
            </div>
        </Cards_Style>
    )
}