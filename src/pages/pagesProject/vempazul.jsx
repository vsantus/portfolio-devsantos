import React from 'react'
import VempAzulImg from "../../assets/images/projects/vempazul/vempazul.png"
import imgProject1 from "../../assets/images/projects/vempazul/1.png"
import imgProject2 from "../../assets/images/projects/vempazul/2.png"
import imgProject3 from "../../assets/images/projects/vempazul/3.png"
import imgProject4 from "../../assets/images/projects/vempazul/4.png"

const VempAzul = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Vem pro Azul</p>
                        <h1>Front-end de uma plataforma de dívidas</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={VempAzulImg} alt="imagem" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- INÍCIO ÁREA LATERAL ESQUERDA DO PROJETO --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Ano</p>
                                <h3>2025</h3>
                            </div>
                            <div className="single-info">
                                <p>Cliente</p>
                                <h3>Vem Pro Azul</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviço</p>
                                <h3>Estrutura Front-End</h3>
                            </div>
                            <div className="single-info">
                                <p>Projeto</p>
                                <h3>Website</h3>
                            </div>
                        </div>
                        {/* <!-- / FIM ÁREA LATERAL ESQUERDA DO PROJETO --> */}
                    </div>
                    {/* <!-- INÍCIO ÁREA LATERAL DIREITA DO PROJETO --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Descrição</h2>
                            <p>
                                O Vem pro Azul é uma plataforma digital desenvolvida para auxiliar pessoas a retomarem o controle da sua vida financeira.
                                A proposta é oferecer soluções de regularização de dívidas de forma simples, acessível e sem burocracia.
                            </p>
                            <p>
                                Em 2025, fui responsável pela implementação do front-end do projeto.
                                O foco foi entregar uma experiência intuitiva, responsiva e clara, facilitando a navegação dos usuários pelas funcionalidades da plataforma.
                            </p>
                        </div>
                    </div>
                    {/* <!-- / FIM ÁREA LATERAL DIREITA DO PROJETO --> */}
                </div>
                {/* <!-- INÍCIO GALERIA DO PROJETO --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={imgProject1} alt="galeria" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={imgProject2} alt="galeria" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={imgProject3} alt="galeria" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={imgProject4} alt="galeria" />
                        </div>
                    </div>
                </div>
                {/* <!-- / FIM GALERIA DO PROJETO --> */}
            </div>
        </div>
    )
}

export default VempAzul;
