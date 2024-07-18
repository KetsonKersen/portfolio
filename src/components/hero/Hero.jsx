import { Hero_Style } from "./style";
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-scroll";
export default function Hero(){
    return(
        <Hero_Style id="hero">
            <div id="hero" className="content">
                <h2>KETSON KERSEN</h2>
                <h4>Desenvolvedor Full-Stack & UX/UI Designer</h4>
                <p>Se você busca um profissional comprometido em transformar visões em realidade digital, está no lugar certo. Explore meu portfólio para ver alguns dos projetos que me envolveram e inspire-se para nossa próxima colaboração.</p>
                <Link to="contact" spy={true} smooth={true} offset={-30} duration={500}> CONTATO <FaArrowRightLong size={20}/></Link>
            </div>
        </Hero_Style>
    )
}