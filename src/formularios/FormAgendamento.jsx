﻿import React from 'react';
import { useEffect, useState } from 'react';
import { urLBase } from '../util/index.jsx';
import Barradebusca from '../components/Barradebusca';

export default function FormAgendamento(props) {
    const [animalSelecionado, setAnimalSelecionado] = useState({});
    const [animais, setAnimais] = useState();
    const [validado, setValidado] = useState(false);
    const [agendamento, setAgendamento] = useState({
        codag: 0,
        animal: {},
        servico: "",
        veterinario: "",
        data: "",
        hora: ""
    })
    function limparFormulario() {
        props.setModoEdicao(false);
        props.setAgendamentoEmEdicao({
            codag: 0,
            animal: {},
            servico: "",
            veterinario: "",
            data: "",
            hora: ""
        });
    }

    useEffect(() => {
        setAgendamento(props.agendamentoEmEdicao);
    }, [props.agendamentoEmEdicao]);

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

    function manupilaAlteracao(e) {
        const elemForm = e.currentTarget;
        const id = elemForm.id;
        const valor = elemForm.value;
        setAgendamento({ ...agendamento, [id]: valor });
    }



    function gravarAgendamento(evento) {
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
                        "codag": agendamento.codag,
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
                                props.setAgendamento(agendamentoAtualizado);
                                // props.exibirTabela(true);
                            });
                    }
                    window.alert(dados.mensagem);
                }).catch((erro) => {
                    window.alert("Erro ao executar alteração agendamento:" + erro.message);
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
                        "codag": agendamento.codag,
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

                        // Após o cadastro bem-sucedido, faça uma nova solicitação GET para obter o agendamento recém-criado
                        fetch(urLBase + '/agendamentos/', {
                            method: "GET"
                        })
                            .then((resposta) => resposta.json())
                            .then((agendamentoAtualizado) => {
                                props.setAgendamento(agendamentoAtualizado);

                                // Atualize animalSelecionado aqui com os detalhes do animal do agendamento recém-criado
                                setAnimalSelecionado(agendamentoAtualizado.animal);
                            });

                        // let agendamentos = [...props.listadeagendamentos];
                        // agendamentos.push(agendamento)
                        // props.setAgendamento(agendamentos);
                        // // props.exibirTabela(true);
                        // // Atualize animalSelecionado aqui

                    }
                    window.alert(dados.mensagem);
                }).catch((erro) => {
                    window.alert("Erro ao executar a agendamento:" + erro.message);
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
            <form className='form_agenda'
                onSubmit={gravarAgendamento}
                noValidate
                validated={validado}>
                <input
                    type="text"
                    id="codag"
                    name="codag"
                    value={agendamento.codag}
                    onChange={manupilaAlteracao}
                    hidden
                />
                <div>
                    <Barradebusca
                        placeHolder={'Informe o animal'}
                        dados={animais}
                        campoChave={"id"}
                        campoBusca={"nome"}
                        funcaoSelecao={setAnimalSelecionado}
                    ></Barradebusca>
                </div>
                <div >
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
                <div >
                    <label htmlFor="veterinario" className="montserrat-bold-cod-gray-12px">Veterinário:</label>
                    <input
                        type="text"
                        id="veterinario"
                        name="veterinario"
                        value={agendamento.veterinario}
                        onChange={manupilaAlteracao}
                        className="flex-row-item "
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
                <div className='alinha_button'>
                    <button
                        type="button"
                        id="limpar"
                        className="botao_denuncia montserrat-bold-concrete-16px"
                        onClick={limparFormulario}
                    >
                        Limpar
                    </button>
                    <button type="submit" className='botao_agendar montserrat-bold-concrete-16px'>{props.modoEdicao ? "Remarcar" : "Agendar"}</button></div>
            </form>
        </div>
    );
}

