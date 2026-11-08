import cover from '../../assets/images/projects/dnsoldas/1.png'
import benefits from '../../assets/images/projects/dnsoldas/2.png'
import courses from '../../assets/images/projects/dnsoldas/3.png'
import conversion from '../../assets/images/projects/dnsoldas/4.png'

const DnSoldas = () => (
    <div className="single-project-page-design">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center pb-30">
                    <p>DN Soldas</p>
                    <h1>Landing page para cursos de soldagem profissional</h1>
                </div>
            </div>
        </div>

        <div className="single-project-image">
            <img src={cover} alt="Página inicial da landing page da DN Soldas" />
        </div>

        <div className="container pt-30">
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-project-page-left wow fadeInUp delay-0-2s">
                        <div className="single-info">
                            <p>Ano</p>
                            <h3>2026</h3>
                        </div>
                        <div className="single-info">
                            <p>Serviços</p>
                            <h3>Desenvolvimento Web, UX/UI</h3>
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
                        <p>A landing page foi criada para apresentar a formação profissional da DN Soldas de maneira clara, destacar seus diferenciais e facilitar a matrícula de novos alunos.</p>
                        <p>A estrutura reúne benefícios, etapas de ingresso, modalidades de curso, credenciais do responsável técnico, depoimentos e perguntas frequentes. As chamadas para ação conduzem o visitante diretamente ao atendimento pelo WhatsApp.</p>
                        <a className="theme-btn project-live-link" href="https://www.ip-dnsoldas.com/" target="_blank" rel="noopener noreferrer">Visitar projeto</a>
                    </div>
                </div>
            </div>

            <div className="row pt-30">
                <div className="col-lg-6">
                    <div className="single-image wow fadeInUp delay-0-2s">
                        <img src={benefits} alt="Seção de benefícios dos cursos da DN Soldas" loading="lazy" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-image wow fadeInUp delay-0-4s">
                        <img src={courses} alt="Seção com os cursos de soldagem disponíveis" loading="lazy" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="single-image wow fadeInUp delay-0-6s">
                        <img src={conversion} alt="Chamada final para matrícula nos cursos da DN Soldas" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default DnSoldas
