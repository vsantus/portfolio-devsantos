import { RiFileExcel2Line, RiLinkUnlinkM, RiRefreshLine, RiSmartphoneLine, RiUserUnfollowLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const problems = [
    { icon: RiFileExcel2Line, text: 'Depende de planilhas e controles manuais para organizar a operação.' },
    { icon: RiUserUnfollowLine, text: 'Perde contatos por não ter uma presença digital clara e profissional.' },
    { icon: RiRefreshLine, text: 'Repete tarefas que poderiam ser automatizadas e integradas.' },
    { icon: RiLinkUnlinkM, text: 'Usa ferramentas que não conversam entre si e geram retrabalho.' },
    { icon: RiSmartphoneLine, text: 'Tem um site lento, desatualizado ou difícil de usar no celular.' },
]

const Problems = () => (
    <section className="commercial-section problems-section" aria-labelledby="problems-title">
        <div className="container">
            <SlideUp>
                <div className="commercial-heading">
                    <p>Onde posso ajudar</p>
                    <h2 id="problems-title">Sua empresa não precisa se adaptar a ferramentas ruins.</h2>
                    <span>Uma solução digital deve reduzir atrito, organizar a rotina e aproximar o negócio dos seus clientes.</span>
                </div>
            </SlideUp>
            <div className="problems-grid">
                {problems.map(({ icon: Icon, text }, index) => (
                    <SlideUp key={text} delay={index + 1}>
                        <article className="problem-card">
                            <Icon aria-hidden="true" />
                            <p>{text}</p>
                        </article>
                    </SlideUp>
                ))}
            </div>
        </div>
    </section>
)

export default Problems
