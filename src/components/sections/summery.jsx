import React from 'react'
import profile from "../../assets/images/about/vsantos.jpg"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    Eu sou Vinicius Santos, Desenvolvedor Web Front-End.
                                </h2>
                                <p>Atuo com foco em boas práticas de usabilidade, acessibilidade e desempenho, aliando design e código para entregar produtos de alta qualidade. Tenho facilidade em ambientes colaborativos e já trabalhei com equipes multidisciplinares em projetos diversos.</p>
                                <p>Estou em constante evolução, sempre em busca de novos desafios que me permitam crescer, contribuir tecnicamente e gerar impacto real em projetos digitais.</p>
                                <div className="hero-btns">
                                    <a href="https://api.whatsapp.com/send/?phone=11934916872&text&type=phone_number&app_absent=0" target="_blank" className="theme-btn">Entre em contato<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery