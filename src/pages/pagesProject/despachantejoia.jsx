import React from 'react'
import DespachanteJoiaImg from "../../assets/images/projects/despachantejoia/6.png"
import imgProject1 from "../../assets/images/projects/despachantejoia/1.png"
import imgProject2 from "../../assets/images/projects/despachantejoia/2.png"
import imgProject3 from "../../assets/images/projects/despachantejoia/3.png"
import imgProject4 from "../../assets/images/projects/despachantejoia/4.png"

const DespachanteJoia = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Despachante Joia</p>
                        <h1>Criação de materiais gráficos e informativos para um escritório de despachante</h1>
                    </div>
                </div>
            </div>

            {/* Imagem principal do projeto */}
            <div className="single-project-image">
                {/* <img src={DespachanteJoiaImg} alt="imagem do projeto" /> */}
            </div>

            {/* Conteúdo do projeto */}
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
                                <h3>Despachante Joia</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                <h3>Post, Logotipo</h3>
                            </div>
                            <div className="single-info">
                                <p>Projeto</p>
                                <h3>Design</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Descrição</h2>
                            <p>Criação de materiais gráficos e informativos para um escritório de despachante veicular, com foco em posts sobre tabela de IPVA, transferência de veículos, licenciamento anual, multas e regularização de débitos. Os conteúdos priorizaram clareza, objetividade e adaptação da linguagem técnica para o público geral.</p>
                            <p>Além da criação de artes e redação de textos informativos, foi desenvolvido um cronograma temático para redes sociais. O projeto combina design, 
                                comunicação estratégica e informação prática.</p>

                        </div>
                    </div>
                </div>

                {/* Galeria de imagens */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={DespachanteJoiaImg} alt="galeria 1" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject1} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject2} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={imgProject3} alt="galeria 3" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject4} alt="galeria 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DespachanteJoia
