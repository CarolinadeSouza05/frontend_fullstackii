import { Cabecalho } from '../components/Cabecalho'
import { Footer } from '../components/Footer'
import './Home.css'
import vetor4 from "../imagens/vector-4.svg"

export function Home(){
    return(
        <>
            <Cabecalho />
            <main className='main-home'>
                <img src={vetor4} alt='logo-home' />
                <h1>Home</h1>
            </main>
            <Footer />
        </>
    )
}