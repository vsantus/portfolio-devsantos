import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                <p>Serviços</p>
                                <h2>Soluções de Qualidade em Desenvolvimento</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card
                            id={1}
                            icon={<RiGlobalFill size={60} />}
                            title={"Identidade Visual e Digital"}
                            description={"Criação de identidades digitais únicas, alinhadas à proposta da sua marca, com foco em presença online e consistência visual."}
                        />

                        <Card
                            id={2}
                            icon={<RiQuillPenLine size={60} />}
                            title={"Desenvolvimento de Sites Responsivos"}
                            description={"Sites modernos, rápidos e otimizados com React e Tailwind, entregando experiências fluídas tanto no desktop quanto no mobile."}
                        />

                        <Card
                            id={3}
                            icon={<RiPantoneFill size={60} />}
                            title={"Interfaces para Web Apps e Dashboards"}
                            description={"Designs funcionais, integração com APIs e autenticação segura — perfeitos para sistemas e aplicações interativas."}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}