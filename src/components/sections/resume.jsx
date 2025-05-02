import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experiência</h2>
                                <div className="experience-list">
                                    <Card year={'2024 - Presente'} title={'Desenvolvedor Front-end'} institution={'Erreve Digital '} />
                                    {/* <Card year={'ano'} title={'cargo'} institution={'local'} />  Exemplo de card */}
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Educação</h2>
                                    <Card year={'2024 - Presente'} title={'Técnologo, Análise e Desenvolvimento de Sistemas'} institution={'Anhanguera'} />
                                    <Card year={'2025'} title={'Lógica de Programação'} institution={'Alura'} />
                                    <Card year={'2025'} title={'ChatGPT'} institution={'Alura'} />
                                    <Card year={'2025'} title={'Git e Github'} institution={'Alura'} />
                                    <Card year={'2025'} title={'Design Gráfico'} institution={'FIAP'} />
                                    <Card year={'2025'} title={'Python'} institution={'FIAP'} />
                                    <Card year={'2020 - 2021'} title={'Ensino Técnico, Manutenção e Suporte em Informática'} institution={'ETEC'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}