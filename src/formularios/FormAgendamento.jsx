import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { urLBase } from '../util';
import Barradebusca from '../components/Barradebusca';

export default function FormAgendamento(props) {
    const [animalSelecionado, setAnimalSelecionado] = useState({});
    const [animais, setAnimais] = useState({});
    const [validado, setValidado] = useState(false);
    const [agendamento, setAgendamento] = useState({
        id: 0,
        animal: {},
        servico: "",
        veterinario: "",
        data: "",
        hora: ""
    })


    function manupilaAlteracao(e) {
        const elemForm = e.currentTarget;
        const id = elemForm.id;
        const valor = elemForm.value;
        setAgendamento({ ...agendamento, [id]: valor });
    }

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

    function gravarAgendamento(evento) {
        // fetch(urLBase + '/agendamentos', {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         "id": agendamento.id,
        //         "animal": animalSelecionado,
        //         "servico": agendamento.servico,
        //         "veterinario": agendamento.veterinario,
        //         "data": agendamento.data,
        //         "hora": agendamento.hora
        //     })
        // })
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (props.modoEdicao) {
                //PUT
                fetch(urLBase + '/agendamentos', {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "id": agendamento.id,
                        "animal": animalSelecionado,
                        "servico": agendamento.servico,
                        "veterinario": agendamento.veterinario,
                        "data": agendamento.data,
                        "hora": agendamento.hora
                    })
                }).then((resposta) => {
                    return resposta.json();
                }).then((dados) => {
                    if (dados.status) {
                        props.setModoEdicao(false);
                        fetch(urLBase + '/agendamentos', {
                            method: "GET"
                        })
                            .then((resposta) => resposta.json())
                            .then((agendamentoAtualizado) => {
                                props.setDenuncia(agendamentoAtualizado);
                                // props.exibirTabela(true);
                            });
                    }
                    window.alert(dados.mensagem);
                }).catch((erro) => {
                    window.alert("Erro ao executar alteração denuncia:" + erro.message);
                });

            }
            else {
                //POST
                fetch(urLBase + "/agendamentos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "id": agendamento.id,
                        "animal": animalSelecionado,
                        "servico": agendamento.servico,
                        "veterinario": agendamento.veterinario,
                        "data": agendamento.data,
                        "hora": agendamento.hora
                    })
                }).then((resposta) => {
                    return (resposta.json())
                }).then((dados) => {
                    if (dados.status) {
                        props.setModoEdicao(false);

                        let agendamentos = [...props.listadeagendamentos];
                        agendamentos.push(agendamento)
                        props.setAgendamento(agendamentos);
                        // props.exibirTabela(true);
                    }
                    window.alert(dados.mensagem);
                }).catch((erro) => {
                    window.alert("Erro ao executar a denuncia:" + erro.message);
                });
            }
            setValidado(false);
        }
        else {
            setValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();

    }
    return (
        <div>
            <h1>Formulário de Agendamento</h1>
            <form className='form'
                onSubmit={gravarAgendamento}
                noValidate
                validated={validado}>
                <div>
                    <label htmlFor="animal" className="montserrat-bold-cod-gray-12px">Animal:</label>
                    <Barradebusca
                        placeHolder={'Informe o animal'}
                        dados={animais}
                        campoChave={"id"}
                        campoBusca={"nome"}
                        funcaoSelecao={setAnimalSelecionado}
                    ></Barradebusca>
                </div>
                <div>
                    <label htmlFor="servico" className="montserrat-bold-cod-gray-12px">Serviço:</label>
                    <select
                        id="servico"
                        name="servico"
                        className="flex-row-item"
                        value={agendamento.servico}
                        onChange={manupilaAlteracao}
                        required
                    >
                        <option value="Selecione">Selecione</option>
                        <option value="Castração">Castração</option>
                        <option value="Consulta">Consulta</option>
                        <option value="Internação">Internação</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="veterinario" className="montserrat-bold-cod-gray-12px">Veterinário:</label>
                    <input
                        type="text"
                        id="veterinario"
                        name="veterinario"
                        value={agendamento.veterinario}
                        onChange={manupilaAlteracao}
                        className="flex-row-item"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="data" className="montserrat-bold-cod-gray-12px">Data:</label>
                    <input
                        type="date"
                        id="data"
                        name="data"
                        value={agendamento.data}
                        onChange={manupilaAlteracao}
                        className="flex-row-item"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hora" className="montserrat-bold-cod-gray-12px">Hora:</label>
                    <input
                        type="time"
                        id="hora"
                        name="hora"
                        value={agendamento.hora}
                        onChange={manupilaAlteracao}
                        className="flex-row-item"
                        required
                    />
                </div>
                <button type="submit" className='botao_agendar montserrat-bold-concrete-16px'>Agendar</button>
            </form>
        </div>
    );
}

