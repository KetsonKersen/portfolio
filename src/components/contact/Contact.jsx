import { Contact_Style } from "./style";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";

import emailjs from "@emailjs/browser"

export default function Contact(){
    
    const [formStatus,setFormStatus] = useState(true)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault()

        const tamplateParms = {
            from_name: name,
            from_email: email,
            message: message
        }

        emailjs.send("service_84xdzt6", "template_q8xw7xp", tamplateParms, "kANRWNxm9XtrGBGL_")
        .then((response)=>{
            setName('')
            setEmail('')
            setMessage('')
            setFormStatus(false)
        })
        .catch((error)=> alert(error))
    }

    return(
        <Contact_Style id="contact">
            <h2 className="title">CONTATO</h2>
            <p>Estou sempre aberto a novas oportunidades e colaborações interessantes. Se você deseja discutir um projeto, tem uma pergunta ou simplesmente quer dizer olá, sinta-se à vontade para entrar em contato através do formulário abaixo.</p>
            
            <div>
                <div>
                    <p>Você também pode me encontrar nas seguintes plataformas:</p>
                    <a href="https://www.linkedin.com/in/ketsonkersen/" target="_blank"><FaLinkedin size={22}/> Linkedin</a>
                    <a href="https://github.com/KetsonKersen" target="_blank"><FaGithubSquare size={22}/> GitHub</a>
                    <a href="https://www.instagram.com/k_kersen/" target="_blank"><FaInstagramSquare size={22}/> Instagram</a>
                    <a href="https://api.whatsapp.com/send/?phone=5531973075968&text=Ol%C3%A1%20Ketson!" target="_blank"><FaWhatsappSquare size={22}/> Whatsapp</a>
                </div>
                {
                    formStatus ?
                    <form onSubmit={sendEmail}>
                        <div>
                            <input type="text" placeholder="Digite seu nome." required value={name} onChange={(e)=>setName(e.target.value)}/>
                            <input type="email" placeholder="Digite seu E-mail." required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <textarea placeholder="Digite sua mensagem..." required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button type="submit">ENVIAR</button>
                    </form>
                    :
                    <div>
                        <p>E-mail enviado com sucesso!</p>
                        <div><MdMarkEmailRead size={50}/></div>
                    </div>
                }


            </div>

        </Contact_Style>
    )
}