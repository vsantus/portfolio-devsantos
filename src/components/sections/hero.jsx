import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiCheckLine, RiCodeBoxLine, RiDashboardLine, RiFlashlightLine, RiWindowLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const Hero = () => (
    <section className="commercial-hero" aria-labelledby="hero-title">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-7">
                    <SlideUp>
                        <div className="commercial-hero-copy">
                            <p className="commercial-eyebrow">Desenvolvimento web sob medida</p>
                            <h1 id="hero-title">Sites e sistemas que ajudam sua empresa a vender mais e trabalhar melhor.</h1>
                            <p className="commercial-hero-summary">
                                Transformo ideias e processos manuais em landing pages, sites, sistemas e automações
                                pensados para gerar oportunidades e simplificar a rotina do seu negócio.
                            </p>
                            <ul className="hero-benefits" aria-label="Benefícios do serviço">
                                <li><RiCheckLine aria-hidden="true" /> Projeto alinhado ao objetivo do negócio</li>
                                <li><RiCheckLine aria-hidden="true" /> Comunicação direta durante toda a entrega</li>
                                <li><RiCheckLine aria-hidden="true" /> Solução responsiva e preparada para evoluir</li>
                            </ul>
                            <div className="commercial-hero-actions">
                                <Link to="/#contact" className="theme-btn">
                                    Conte sobre seu projeto <RiArrowRightLine size={18} aria-hidden="true" />
                                </Link>
                                <Link to="/#projects" className="secondary-btn">Ver projetos realizados</Link>
                            </div>
                        </div>
                    </SlideUp>
                </div>

                <div className="col-lg-5">
                    <SlideUp delay={2}>
                        <div className="solution-preview" aria-label="Exemplos de soluções digitais">
                            <div className="preview-browser">
                                <div className="preview-browser-bar">
                                    <span></span><span></span><span></span>
                                    <div>seunegocio.com.br</div>
                                </div>
                                <div className="preview-content">
                                    <div className="preview-copy">
                                        <span></span><strong></strong><strong></strong><i></i>
                                    </div>
                                    <div className="preview-card-grid">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="preview-solutions">
                                <div><RiWindowLine aria-hidden="true" /><span>Sites que geram contatos</span></div>
                                <div><RiDashboardLine aria-hidden="true" /><span>Sistemas para organizar</span></div>
                                <div><RiFlashlightLine aria-hidden="true" /><span>Automações que economizam tempo</span></div>
                            </div>
                            <div className="preview-code-badge"><RiCodeBoxLine aria-hidden="true" /> Solução sob medida</div>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
