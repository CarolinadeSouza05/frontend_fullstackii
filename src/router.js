import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Telas/Home'
import { CadastroDenuncia } from './Telas/CadastroDenuncia'
import { CadastroAgendamento } from './Telas/CadastroAgendamento'


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                {/* <Route path='/login' element={<Login />} /> */}
                <Route path="/cadastro-denuncia" element={<CadastroDenuncia />} />
                <Route path='/cadastro-agendamento' element={<CadastroAgendamento />} />
                {/*<Route path='/cadastro' element={<CadastroPessoa />} />
                <Route path="/designar-voluntario" element={<DesignarAtividades />} />
                <Route path='/pets' element={<Pagpets />} /> */}
                {/* <Route path='/entradas' element={<LancEntrada />} /> */}
            </Routes>
        </BrowserRouter>
    )
}