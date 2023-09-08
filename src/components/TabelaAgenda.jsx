import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import "./TabelaDenuncia.css";
import { urLBase } from "../util";


export  function TabelaAgenda(props) {

//   //Filtro sempre busca na lista original do banco de dados
//   function filtrarDenuncias(e) {
//     const termoBusca = e.currentTarget.value;

//     fetch(urLBase + "/agendamentos", { method: "GET" })
//       .then((resposta) => {
//         return resposta.json()
//       }).then((listadeagendamentos) => {
//         if (Array.isArray(listadeagendamentos)) {
//           const resultadoBusca = listadeagendamentos.filter((agendamento) =>
//             agendamento.observacoes.toLowerCase().includes(termoBusca.toLowerCase())
//           );
//           props.setDenuncia(resultadoBusca);
//         }
//       })
//   }
  function limparFormulario() {
    props.setAgendamentoEmEdicao({
        codag: 0,
        animal: {},
        servico: "",
        veterinario: "",
        data: "",
        hora: ""
    });
  }

 
  return (
    <Container className="container-table-denuncia body">
      {/* <button
        className="botao_denuncia_tab montserrat-bold-concrete-16px"
        onClick={() => {
          limparFormulario()
          props.exibirTabela(false);
          props.setAtualizando(false);
        }}>
        Novo Cadastro
      </button>

      <div className="group_pesquisa">
        <input
          type="text"
          id="termoBusca"
          className="searchInput_denuncia"
          onChange={filtrarDenuncias}
        />

        <div className="botaoprimario">
          <button className="searchButton">
            <FaSearch />
          </button>
        </div>
      </div> */}


      <Table>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Serviço</th>
            <th>Veterinário</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listadeagendamentos?.map((agendamento) => {
            const dataFormatada = new Date(agendamento.data).toLocaleDateString();
            return (
              <tr key={agendamento.codag}>
                <td>{agendamento.animal.nome}</td>
                <td>{agendamento.servico}</td>
                <td>{agendamento.veterinario}</td>
                <td>{dataFormatada}</td>
                <td>{agendamento.hora}</td>
                <td>
                  <div className="botoes">
                    <Button
                      className="botao_table"
                    onClick={() => {
                      props.editarAgendamento(agendamento)
                    }}
                    ><FaEdit />
                    </Button>
                    <Button
                      className="botao_table"
                      onClick={() => {
                        if (window.confirm("Confirma a exclusão desta denuncia?")){
                          props.excluirAgendamento(agendamento)
                        }
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
