
import { Nav_Style } from "./style";
import logo from "../../assets/logo.svg"
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import {Link} from "react-scroll";

export default function Nav(){

    const [state,setState] = useState(false);
    function toggleMenu(){
        const menu = document.querySelector("nav > ul")
        menu.classList.toggle("activeMenu")
        setState(!state)
    }
    function close(){
        setState(false)
        const menu = document.querySelector("nav > ul")
        menu.classList.remove("activeMenu")
    }


    return(
        <Nav_Style>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}><img src={logo} width={60} alt=""/></Link>
            <ul>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>close()}><li>INICIO</li></Link>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>close()}><li>SOBRE</li></Link>
                <Link to="stacks" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>close()}><li>STACKS</li></Link>
                <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>close()}><li>PROJETOS</li></Link>
                <Link to="contact" spy={true} smooth={true} offset={-30} duration={500} onClick={()=>close()}><li>CONTATO</li></Link>
            </ul>
            <button onClick={()=>toggleMenu()}>{state ? <IoClose size={36}/> :<HiMenuAlt3 size={36}/>}</button>
        </Nav_Style>
    )
}