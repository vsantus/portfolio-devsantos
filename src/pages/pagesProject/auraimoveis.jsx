import React from 'react'
import AuraImoveisImg from "../../assets/images/projects/auraimoveis/1.png"
import imgProject1 from "../../assets/images/projects/auraimoveis/webdesign.png"
import imgProject2 from "../../assets/images/projects/auraimoveis/2.png"
import imgProject3 from "../../assets/images/projects/auraimoveis/3.png"
import imgProject4 from "../../assets/images/projects/auraimoveis/4.png"

const AuraImoveis = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p> Aura Imóveis </p>
                        <h1>Landing page para divulgação de imobiliária </h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={AuraImoveisImg} alt="imagem do projeto" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Ano</p>
                                <h3>2025</h3>
                            </div>
                            <div className="single-info">
                                <p>Cliente</p>
                                <h3>Aura Imóveis</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                <h3>Web Design</h3>
                            </div>
                            <div className="single-info">
                                <p>Projeto</p>
                                <h3>Landing Page</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Descrição</h2>
                            <p>Criação de uma landing page para uma consultoria imobiliária com foco em captação de leads qualificados. O projeto foi desenvolvido com atenção à experiência do usuário, utilizando princípios de UX/UI, layout responsivo e identidade visual alinhada ao segmento imobiliário.</p> <p>Além do design estratégico, a landing conta com seções otimizadas para conversão, mensagens humanizadas, simulação de atendimento e destaque para diferenciais da empresa. O resultado é uma interface clara, moderna e orientada para gerar confiança e engajamento.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={imgProject2} alt="galeria 1" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject3} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={imgProject4} alt="galeria 3" />
                        </div>
                    </div>
                    <div className="col-lg-12 text-center pb-30">

                        <h1>Visão geral </h1>

                    </div>

                    <div className="col-lg-20">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject1} alt="galeria 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuraImoveis;