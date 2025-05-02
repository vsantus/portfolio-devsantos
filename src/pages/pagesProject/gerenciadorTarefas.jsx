import React from 'react'
import gerenciadorTarefasImg from "../../assets/images/projects/gerenciador/gerenciadortarefa.png"

const GerenciadorTarefas = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Gerenciador de Tarefas</p>
                        <h1>Aplicativo WEB para organização pessoal e profissional</h1>
                    </div>
                </div>
            </div>
            
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* Área de informações laterais */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Ano</p>
                                <h3>2024</h3>
                            </div>
                            <div className="single-info">
                                <p>Cliente</p>
                                <h3>Projeto Próprio</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                <h3>MVP, Sistema de Organização de Tarefas</h3>
                            </div>
                            <div className="single-info">
                                <p>Categoria</p>
                                <h3>Aplicativo WEB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/* Área de descrição do projeto */}
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Descrição</h2>
                            <p>O Gerenciador de Tarefas foi desenvolvido com o objetivo de simplificar a rotina de usuários que buscam uma maneira eficiente de organizar atividades diárias, compromissos e projetos pessoais ou profissionais. Com uma interface limpa e responsiva, o sistema permite criar, editar, acompanhar e concluir tarefas de forma prática e intuitiva.</p>
                            <p>Durante o desenvolvimento, priorizei usabilidade e desempenho, criando funcionalidades como filtros por status, categorização de tarefas, lembretes visuais e organização por prioridade. O projeto é um exemplo de como a tecnologia pode facilitar a produtividade pessoal e profissional com soluções leves e eficazes.</p>
                        </div>
                    </div>
                </div>
                {/* Área para galeria de imagens (futura implementação) */}
                <div className="row pt-30">
                <div className="single-project-image">
                <img src={gerenciadorTarefasImg} alt="Gerenciador de Tarefas" />
            </div>
                </div>
            </div>
        </div>
    )
}

export default GerenciadorTarefas
