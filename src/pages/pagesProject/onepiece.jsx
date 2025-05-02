import React from 'react'
import OnePieceImg from "../../assets/images/projects/onepiece/image.png"
import imgProject1 from "../../assets/images/projects/onepiece/1.png"
import imgProject2 from "../../assets/images/projects/onepiece/2.png"
import imgProject3 from "../../assets/images/projects/onepiece/3.png"
import imgProject4 from "../../assets/images/projects/onepiece/4.png"

const OnePiece = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p> Anime Blog </p>
                        <h1>
                            Landing Page temática One Piece</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={OnePieceImg} alt="imagem do projeto" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Ano</p>
                                <h3>2023</h3>
                            </div>
                            <div className="single-info">
                                <p>Cliente</p>
                                <h3>Anime Blog</h3>
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
                            <p>Criação de uma landing page temática de One Piece, desenvolvida com HTML, CSS e JavaScript. O projeto destaca a interação dinâmica, permitindo aos usuários explorar diferentes personagens com exibição de imagem, nome e história de cada um.</p>
                            <p>Além do visual imersivo, a página conta com animações suaves, troca de conteúdo em tempo real, responsividade para todos os dispositivos e foco na experiência do usuário. O projeto reflete a combinação entre performance, criatividade e paixão pelo universo do anime.</p>

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

export default OnePiece