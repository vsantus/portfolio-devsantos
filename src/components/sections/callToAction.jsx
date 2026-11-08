import { Link } from 'react-router-dom'
import { RiMailLine, RiWhatsappFill } from '@remixicon/react'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-content-part call-to-action-part text-center">
                            <h2>Vamos transformar sua ideia em um produto digital completo?</h2>
                            <p>Posso contribuir desde a interface até a API e integrações. Estou disponível para projetos e oportunidades como Desenvolvedor Full Stack, com foco em qualidade, performance e experiência do usuário.</p>
                            <div className="hero-btns">
                                <Link to="/contact" className="theme-btn">Email <i><RiMailLine size={16} /></i></Link>
                                <a href="https://wa.me/11934916872" target="_blank" rel="noopener noreferrer" className="theme-btn">
                                    WhatsApp <i><RiWhatsappFill size={16} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
