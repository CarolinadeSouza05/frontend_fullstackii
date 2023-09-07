import React from "react";
import {
  FaHome,
  FaRegWindowClose,
  FaChartBar
} from "react-icons/fa";
import "./Sidebar.css";
import { SidebarItem } from "./SidebarItem";
import { Link } from "react-router-dom";

export function Sidebar({ active }) {
  return (
    <div className={`container-sidebar ${active}`}>
      <div className="content-sidebar">
        <Link to="/">
            <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        {/*<Link to="/login">
            <SidebarItem Icon={FaUserAlt} Text="Login" />
        </Link>
         <Link to="/cadastro">
            <SidebarItem Icon={FaSignInAlt} Text="Registro" />
        </Link>
        <Link to="/pets">
            <SidebarItem Icon={FaDog} Text="Animais" />
        </Link>
        <Link to="/cadastro-voluntario">
            <SidebarItem Icon={FaHandHoldingHeart} Text="Voluntários" />
        </Link> */}
        <Link to="/cadastro-agendamento">
            <SidebarItem Icon={FaChartBar} Text="Agenda" />
        </Link>
        <Link to="/cadastro-denuncia">
            <SidebarItem Icon={FaRegWindowClose} Text="Denuncias" />
        </Link>
      </div>
    </div>
  );
}
