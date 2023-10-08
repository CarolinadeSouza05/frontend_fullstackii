import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Telas/Home'
import { CadastroDenuncia } from './Telas/CadastroDenuncia'
import { CadastroAgendamento } from './Telas/CadastroAgendamento'
import { CadastroAnimal } from './Telas/CadastroAnimal';
import {CadastroDesignar} from './Telas/CadastroDesignar';


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                {/* <Route path='/login' element={<Login />} /> */}
                <Route path="/cadastro-denuncia" element={<CadastroDenuncia />} />
                <Route path='/cadastro-agendamento' element={<CadastroAgendamento />} />
                <Route path='/cadastro-animais' element={<CadastroAnimal />} />
                <Route path="/designar-voluntario" element={<CadastroDesignar/>} />
                {/*<Route path='/pets' element={<Pagpets />} /> */}
                {/* <Route path='/entradas' element={<LancEntrada />} /> */}
            </Routes>
        </BrowserRouter>
    )
}