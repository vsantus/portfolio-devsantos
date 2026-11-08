import { RiCustomerService2Line, RiLock2Line, RiRefreshLine, RiTimerFlashLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const commitments = [
    { icon: RiTimerFlashLine, title: 'Transparência', text: 'Escopo, etapas, prazos e custos definidos antes do desenvolvimento.' },
    { icon: RiCustomerService2Line, title: 'Contato direto', text: 'Sem intermediários: você acompanha o projeto com quem desenvolve.' },
    { icon: RiRefreshLine, title: 'Evolução', text: 'Soluções organizadas para receber melhorias conforme o negócio cresce.' },
    { icon: RiLock2Line, title: 'Responsabilidade', text: 'Cuidado com dados, acessos e informações compartilhadas no projeto.' },
]

const Commitments = () => (
    <section className="commercial-section commitments-section" aria-labelledby="commitments-title">
        <div className="container">
            <SlideUp>
                <div className="commercial-heading">
                    <p>Compromissos</p>
                    <h2 id="commitments-title">A tranquilidade de saber como o projeto está sendo conduzido.</h2>
                    <span>Planejamento, desenvolvimento e suporte com comunicação direta durante toda a parceria.</span>
                </div>
            </SlideUp>
            <div className="commitments-grid">
                {commitments.map(({ icon: Icon, title, text }) => (
                    <article className="commitment-card" key={title}>
                        <Icon aria-hidden="true" />
                        <div><h3>{title}</h3><p>{text}</p></div>
                    </article>
                ))}
            </div>
        </div>
    </section>
)

export default Commitments
