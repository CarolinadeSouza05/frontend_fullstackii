import "./Cabecalho.css";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import vetor3 from "../imagens/vector-3.svg"
import linha1 from "../imagens/line-1.svg"

export function Cabecalho() {
  return (
    <header className="header">
      <div className="flex-row">
        <div className="logo">
          <img className="vector" src={vetor3} alt="Vector" />
          <Link to="/">
            <h1 className="title">
              <span className="span0">Pet</span>
              <span className="span1">Adote</span>
            </h1>
          </Link>
        </div>
        <div className="menu_opc">
          <Link to="" className="adote-um-pet montserrat-bold-cod-gray-16px">
            Adote um Pet
          </Link>
          <Link to="" className="sobre-nos montserrat-bold-cod-gray-16px">
            Sobre Nós
          </Link>
          <Link to = "/cadastro-denuncia" className="faca_denuncia montserrat-bold-cod-gray-16px">
            Faça uma denúncia
          </Link>
        </div>
        <Menu />
      </div>
      <img className="line" src={linha1} alt="Line 1" />
    </header>
  );
}
