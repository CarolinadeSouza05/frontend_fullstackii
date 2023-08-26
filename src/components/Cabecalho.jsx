import "./Cabecalho.css";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";

export function Cabecalho() {
  return (
    <header class="header">
      <div class="flex-row">
        <div class="logo">
          <img class="vector" src={"/public/vector-3.svg"} alt="Vector" />
          <Link to="/">
            <h1 class="title">
              <span class="span0">Pet</span>
              <span class="span1">Adote</span>
            </h1>
          </Link>
        </div>
        <div class="menu_opc">
          <Link to="" class="adote-um-pet montserrat-bold-cod-gray-16px">
            Adote um Pet
          </Link>
          <Link to="" class="sobre-nos montserrat-bold-cod-gray-16px">
            Sobre Nós
          </Link>
          <Link to = "/cadastro-denuncia" class="faca_denuncia montserrat-bold-cod-gray-16px">
            Faça uma denúncia
          </Link>
        </div>
        <Menu />
      </div>
      <img class="line" src={"line-1.svg"} alt="Line 1" />
    </header>
  );
}
