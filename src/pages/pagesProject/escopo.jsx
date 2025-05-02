import React from 'react'
import singleProjectImg from "../assets/images/projects/single-project.jpg"
import singleProject1 from "../assets/images/projects/single-project1.jpg"
import singleProject2 from "../assets/images/projects/single-project2.jpg"
import singleProject3 from "../assets/images/projects/single-project3.jpg"
import singleProject4 from "../assets/images/projects/single-project4.jpg"

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>DESENVOLVIMENTO - ERREVE DIGITAL</p>
                        <h1>Loja personalizada com Shopify e TailwindCSS</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={singleProjectImg} alt="imagem do projeto" />
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
                                <h3>Erreve Digital</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                <h3>Shopify, Web Design</h3>
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
                            <p>Além da customização do tema, foram implementadas seções exclusivas, responsividade para todos os dispositivos e integração com meios de pagamento. O projeto representa a união entre código limpo, design criativo e estratégia de conversão.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="galeria 1" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="galeria 3" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="galeria 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject