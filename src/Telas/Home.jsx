import Barradebusca from '../components/Barradebusca'
import { Cabecalho } from '../components/Cabecalho'
import { Footer } from '../components/Footer'
import './Home.css'

export function Home(){
    return(
        <>
            <Cabecalho />
            <main className='main-home'>
                <img src='vector-4.svg' alt='logo-home' />
                <h1>Home</h1>
            </main>
            <Footer />
        </>
    )
}