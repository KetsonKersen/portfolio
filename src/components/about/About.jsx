import { About_Style } from "./style";
import foto from "../../assets/foto.png"

export default function About(){
    return(
        <About_Style id="about">
            <h2 className="title">SOBRE</h2>
            <div className="grid-about">
                <div>
                    <img src={foto} alt="foto"/>
                </div>
                <div>
                    <p>Olá! Sou Ketson Kersen, um desenvolvedor Full-Stack.</p>
                    <p>Minha paixão é transformar ideias criativas em experiências digitais incríveis.
                    Durante minha jornada no desenvolvimento, mergulhei de cabeça na arte de traduzir conceitos em interfaces interativas e funcionais. Cada projeto é uma oportunidade emocionante de combinar design e tecnologia para impactar positivamente os usuários.</p>
                </div>
                <div>
                    <p>O que me diferencia?</p>
                    <p>Foco no Usuário: Acredito que cada linha de código deve contribuir para uma experiência que encanta e envolve. Trabalho com empenho para garantir que meus projetos sejam intuitivos e acessíveis.</p>
                    <p>Colaboração Efetiva: Adoro trabalhar em equipe, trocar ideias e construir soluções eficazes. Minha abordagem colaborativa garante resultados que superam as expectativas.</p>
                </div>
            </div>
        </About_Style>
    )
}
