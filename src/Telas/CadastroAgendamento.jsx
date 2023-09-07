// import { useState, useEffect } from "react";
// import Barradebusca from "../components/Barradebusca";
import { Cabecalho } from "../components/Cabecalho";
// import { urLBase } from "../util";
import FormAgendamento from "../formularios/FormAgendamento.jsx"
import { Footer } from "../components/Footer";
import "./CadastroAgendamento.css"

export function CadastroAgendamento(props) {
   
    return (
        <div className="page_container_denuncia">
            <Cabecalho />
            

            <FormAgendamento/>
            <Footer />
        </div>
    )
}