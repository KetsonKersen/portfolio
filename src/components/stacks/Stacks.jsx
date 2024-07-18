import { Stacks_Style } from "./style";
import html from "../../assets/stacks/html.png"
import css from "../../assets/stacks/css.png"
import tailwind from "../../assets/stacks/tailwind.png"
import sass from "../../assets/stacks/sass.png"
import js from "../../assets/stacks/js.png"
import react from "../../assets/stacks/react.png"
import ts from "../../assets/stacks/ts.png"
import next from "../../assets/stacks/next.png"

import node from "../../assets/stacks/node.png"
import python from "../../assets/stacks/python.png"
import java from "../../assets/stacks/java.png"
import docker from "../../assets/stacks/docker.png"
import postgresql from "../../assets/stacks/postgresql.png"
import mysql from "../../assets/stacks/mysql.png"
import mongodb from "../../assets/stacks/mongodb.png"

import figma from "../../assets/stacks/figma.png"
import ps from "../../assets/stacks/ps.png"
import ai from "../../assets/stacks/ai.png"

import vscode from "../../assets/stacks/vscode.png"
import git from "../../assets/stacks/git.png"
import notion from "../../assets/stacks/notion.png"
import trello from "../../assets/stacks/trello.png"
import miro from "../../assets/stacks/miro.png"

export default function Stacks(){
    const frontend = [html,css,tailwind,sass,js,react,ts,next]
    const design = [figma,ps,ai]
    const backend = [node,python,java,docker,postgresql,mysql,mongodb]
    const ferramentas = [vscode,git,trello,notion,miro]

    return(
        <Stacks_Style id="stacks">
            <h2 className="title">STACKS</h2>
            <div>
                <div className="card">
                    <p>FRONT-END</p>
                    {frontend.map((stack,index)=>{
                        return(
                            <img key={index} src={stack} alt={stack.toString()}/>
                        )
                    })}
                </div>
                <div className="card">
                    <p>DESIGN</p>
                    {design.map((stack,index)=>{
                        return(
                            <img key={index} src={stack} alt={stack.toString()}/>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className="card">
                    <p>BACK-END</p>
                    {backend.map((stack,index)=>{
                        return(
                            <img key={index} src={stack} alt={stack.toString()}/>
                        )
                    })}
                </div>
                <div className="card">
                    <p>FERRAMENTAS</p>
                    {ferramentas.map((stack,index)=>{
                        return(
                            <img key={index} src={stack} alt={stack.toString()}/>
                        )
                    })}
                </div>
            </div>
        </Stacks_Style>
    )
}