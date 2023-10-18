import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Telas/Home'
import {CadastroAdocao} from './Telas/CadastroAdocao'
import { CadastroAnimal } from './Telas/CadastroAnimal';



export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                {/* <Route path='/login' element={<Login />} /> */}
                {/* <Route path="/cadastro-denuncia" element={<CadastroDenuncia />} />
                <Route path='/cadastro-agendamento' element={<CadastroAgendamento />} /> */}
                <Route path='/cadastro-animais' element={<CadastroAnimal />} />
                <Route path="/cadastro-adocao" element={<CadastroAdocao/>} />
                {/*<Route path='/pets' element={<Pagpets />} /> */}
                {/* <Route path='/entradas' element={<LancEntrada />} /> */}
            </Routes>
        </BrowserRouter>
    )
}