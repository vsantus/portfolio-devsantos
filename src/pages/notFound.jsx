import { Link } from 'react-router-dom'
import { RiArrowLeftLine } from '@remixicon/react'

const NotFound = () => (
    <section className="not-found-area innerpage-single-area">
        <div className="container text-center">
            <p className="not-found-code">404</p>
            <h1>Página não encontrada</h1>
            <p>O endereço que você acessou não existe ou foi alterado.</p>
            <Link to="/" className="theme-btn">
                <RiArrowLeftLine size={18} /> Voltar para o início
            </Link>
        </div>
    </section>
)

export default NotFound
