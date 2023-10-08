import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";
import React from "react";
import FormDesignarTarefas from "../formularios/FormDesignarTarefas.jsx";
import './CadastroDesignar.css';
import vetor3 from '../imagens/vector-3.svg';


export function CadastroDesignar(){
    return (
        <div >
            <Cabecalho/>
                <div>
                <div className="titulo_designar">
                    <img
                        className="vector vectoranimais"
                        src={vetor3}
                        alt="Vector"
                    />
                    <>
                        Designar atividades <span className="span1">para voluntários</span>
                    </></div></div>
            <div className="main_designar">
            <FormDesignarTarefas/>
           
            </div>
            <Footer/>
        </div>
    );
}