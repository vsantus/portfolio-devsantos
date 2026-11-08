import { RiArrowRightUpLine, RiDashboard3Line, RiFlashlightLine, RiWindowLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import SlideUp from '../../utlits/animations/slideUp'

const services = [
    {
        icon: RiWindowLine,
        title: 'Landing pages e sites',
        description: 'Páginas rápidas, responsivas e pensadas para apresentar sua empresa e transformar visitas em contatos.',
        benefits: ['Posicionamento profissional', 'Contato facilitado', 'Experiência mobile'],
    },
    {
        icon: RiDashboard3Line,
        title: 'Sistemas e dashboards',
        description: 'Ferramentas sob medida para centralizar informações, acompanhar indicadores e organizar processos.',
        benefits: ['Dados em um só lugar', 'Rotinas organizadas', 'Acesso por perfil'],
    },
    {
        icon: RiFlashlightLine,
        title: 'Automações e integrações',
        description: 'Conexões entre serviços e automação de tarefas repetitivas para reduzir retrabalho e economizar tempo.',
        benefits: ['Menos trabalho manual', 'Sistemas conectados', 'Processos mais rápidos'],
    },
]

const ServiceGrid = () => {
    return (
        <section id="solutions" className="services-area commercial-section">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="commercial-heading text-center mx-auto">
                                <p>Soluções</p>
                                <h2>O digital trabalhando a favor do seu negócio.</h2>
                                <span>Escolhemos o formato certo de acordo com o problema que precisa ser resolvido.</span>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service, index) => <Card key={service.title} {...service} id={index + 1} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon: Icon, title, description, benefits, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    <Icon size={42} aria-hidden="true" />
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <ul>
                        {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                    </ul>
                    <Link to="/#contact" className="service-link">Conversar sobre esta solução <RiArrowRightUpLine aria-hidden="true" /></Link>
                </div>
            </SlideUp>
        </div>
    )
}
