import { Projects_Style } from "./style";
import financeapp from "../../assets/projects/financeapp.png"
import findcar from "../../assets/projects/findcar.png"
import academia2k from "../../assets/projects/academia2k.png"
import cardapio from "../../assets/projects/cardapio.png"

import financeapp_video from "../../assets/projects/financeapp.mp4"
import findcar_video from "../../assets/projects/findcar.mp4"
import academia2k_video from "../../assets/projects/academia2k.mp4"
import cardapio_video from "../../assets/projects/cardapioonline.mp4"

import { useState } from "react";

export default function Projects(){
    const [currentProject,setCurrentProject] = useState()
    const [state,setState] = useState(false)

    const projects = [
        {title: "FinanceApp", img: financeapp, video: financeapp_video, description: "Este é um site de controle financeiro desenvolvido em React.js, utilizando o Firebase como Backend as a Service (BaaS). O site permite aos usuários gerenciar suas finanças pessoais de forma eficiente e intuitiva.", code: "https://github.com/KetsonKersen/FianceApp?tab=readme-ov-file#-financeapp", deploy:"https://fiance-app-sable.vercel.app/"},
        {title: "FindCar", img: findcar, video: findcar_video, description: "FindCar é um site para concessionaria de veiculos desenvolvido em Next.js e TypeScript, que oferece uma vasta opção de filtragem para encontrar o veículo que atenda a suas expectativas.", code: "https://github.com/KetsonKersen/find-car?tab=readme-ov-file#-findcar", deploy:"https://findcar-nu.vercel.app/"},
        {title: "Academia2k", img: academia2k, video: academia2k_video, description: "Landing page para uma academia desenvolvido com React.js, dando ao usuário uma boa experiência de navegação, podendo ainda realizar um calculo de IMC diretamente no site da academia.", code: "https://github.com/KetsonKersen/academia2k?tab=readme-ov-file#-academia2k", deploy:"https://academia2k.vercel.app/"},
        {title: "Cardapio Online", img: cardapio, video: cardapio_video, description: "2kCardapio-Online é um site de pedidos online desenvolvido em Next.js e TypeScript, onde o usuário pode realizar seu pedido de forma rápida e intuitiva.", code: "https://github.com/KetsonKersen/2kcardapio-online?tab=readme-ov-file#-2kcardapio-online", deploy:"https://2kcardapio-online.vercel.app/"}
    ]
    
    function Modal(){
        const {title, img, video, description, code, deploy} = currentProject
        return(
            <div className="modal">
                <div>
                    <button className="close" onClick={()=>setState(false)}>X</button>
                    <h2 className="title">{title}</h2>
                    {/* <img src={img} alt={title}/> */}
                    <video src={video} width="100%" loop autoPlay></video>
                    <p>{description}</p>
                    <div>
                        <a href={code} target="_blank">Code</a>
                        <a href={deploy} target="_blank">Deploy</a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <Projects_Style id="projects">
            <h2 className="title">PROJETOS</h2>
            <div>
                {
                    projects.map((project, index)=>{
                        return(
                            <div key={index} onClick={()=>{
                                setCurrentProject(project)
                                setState(true)}}>
                                <p>{project.title}</p>
                                <img src={project.img} alt={project.title}/>
                            </div>
                        )
                    })
                }
            </div>
            {state && <Modal/>}
        </Projects_Style>
    )
}
