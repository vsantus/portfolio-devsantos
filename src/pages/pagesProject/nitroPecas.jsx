import React from 'react'
import nitroPecasImg from "../../assets/images/projects/nitropecas/nitropecas.png"
import imgProject1 from "../../assets/images/projects/nitropecas/1.png"
import imgProject2 from "../../assets/images/projects/nitropecas/2.png"
import imgProject3 from "../../assets/images/projects/nitropecas/3.png"
import imgProject4 from "../../assets/images/projects/nitropecas/4.png"
import imgProject5 from "../../assets/images/projects/nitropecas/banner-desk.png"
import imgProject6 from "../../assets/images/projects/nitropecas/banner-desk2.png"
import imgProject7 from "../../assets/images/projects/nitropecas/banner-mobile.png"
import imgProject8 from "../../assets/images/projects/nitropecas/banner-mobile2.png"

const NitroPecas = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p> Nitro Peças </p>
                        <h1>Loja personalizada de auto peças para motos</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={nitroPecasImg} alt="imagem do projeto" />
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
                                <h3>Nitro Peças</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                <h3>Shopify, Web Design, Design</h3>
                            </div>
                            <div className="single-info">
                                <p>Projeto</p>
                                <h3>E-commerce</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Descrição</h2>
                            <p>Criação de uma loja virtual com Shopify e personalização completa com TailwindCSS. O projeto priorizou desempenho, usabilidade e uma interface moderna alinhada com a identidade visual da marca.</p>
                            <p>Além da customização do tema, foram implementadas seções exclusivas, roleta gameficada, responsividade para todos os dispositivos e integração com meios de pagamento. O projeto representa a união entre código limpo, design criativo e estratégia de conversão.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={imgProject1} alt="galeria 1" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject4} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={imgProject2} alt="galeria 3" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject3} alt="galeria 4" />
                        </div>
                    </div>

                    <div className="col-lg-12 text-center pb-30">
                        
                        <h1>Banner para E-commerce </h1>
                        
                    </div>

                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject5} alt="galeria 4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject6} alt="galeria 4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject7} alt="galeria 4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject8} alt="galeria 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NitroPecas