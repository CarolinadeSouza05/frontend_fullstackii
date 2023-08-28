import { useState, useEffect } from "react";
import Barradebusca from "../components/Barradebusca";
import { Cabecalho } from "../components/Cabecalho";
import { urLBase } from "../util";
// const listadeAnimais = [
//     {
//         id: "1",
//         nome: "Bob arruda"
//     }, {
//         id: "2",
//         nome: "Lisa belinda"
//     }
// ]


export function CadastroAgendamento(props) {
    const [animalSelecionado, setAnimalSelecionado] = useState({});
    const [animais, setAnimais] = useState([]);
    //Recebendo os Dados do banco de dados
    useEffect(() => {
        fetch(urLBase + "/animais", {
            method: "GET"
        }).then((resposta) => {
            return resposta.json();
        }).then((dados) => {
            if (Array.isArray(dados)) {
                setAnimais(dados);
            }
            else {

            }
        })
    }, []);
    return (
        <div className="page_container_denuncia">
            <Cabecalho />
            <Barradebusca
                placeHolder={'Informe o animal'}
                dados={animais}
                campoChave={"id"}
                campoBusca={"nome"}
                funcaoSelecao={setAnimalSelecionado}
            ></Barradebusca>
        </div>
    )
}