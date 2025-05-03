import React from 'react'
import ErreveDigitalImg from "../../assets/images/projects/errevedigital/5.png"
import imgProject1 from "../../assets/images/projects/errevedigital/1.png"
import imgProject2 from "../../assets/images/projects/errevedigital/2.png"
import imgProject3 from "../../assets/images/projects/errevedigital/3.png"
import imgProject4 from "../../assets/images/projects/errevedigital/4.png"
import imgProject5 from "../../assets/images/projects/errevedigital/5.png"
import imgProject6 from "../../assets/images/projects/errevedigital/6.png"
import imgProject7 from "../../assets/images/projects/errevedigital/7.png"
import imgProject8 from "../../assets/images/projects/errevedigital/8.png"

const ErreveDigital = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Erreve Digital</p>
                        <h1>Desenvolvimento de Logotipo para a Agência Erreve Digital</h1>
                    </div>
                </div>
            </div>

            {/* Imagem principal do projeto */}
            <div className="single-project-image">
                {/* <img src={ErreveDigitalImg} alt="imagem do projeto" /> */}
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
                                <h3>Erreve Digital</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                <h3>Design de Logotipo</h3>
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
                            <p>Desenvolvimento de logotipo para a agência Erreve Digital, com foco em representar a identidade moderna e criativa da marca. O processo incluiu estudo de mercado, definição de paleta de cores, tipografia personalizada e construção de um símbolo que transmite inovação e comunicação digital.</p>
                            <p>Além da criação visual, o projeto também considerou aplicações do logotipo em diferentes formatos e mídias, assegurando versatilidade e coerência na presença da marca. A proposta une design estratégico, branding e posicionamento visual profissional.</p>


                        </div>
                    </div>
                </div>

                {/* Galeria de imagens */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={ErreveDigitalImg} alt="galeria 1" />
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
                    {/* <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={imgProject3} alt="galeria 3" />
                        </div>
                    </div> */}
                    {/* <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject4} alt="galeria 4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject5} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject6} alt="galeria 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={imgProject7} alt="galeria 3" />
                        </div>
                    </div> */}
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

export default ErreveDigital
