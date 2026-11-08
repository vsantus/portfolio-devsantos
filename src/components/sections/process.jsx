import SlideUp from '../../utlits/animations/slideUp'

const steps = [
    { number: '01', title: 'Diagnóstico', text: 'Entendo o negócio, o público, o problema e o resultado esperado.' },
    { number: '02', title: 'Proposta', text: 'Organizo escopo, entregas, prazo e investimento de forma transparente.' },
    { number: '03', title: 'Desenvolvimento', text: 'Construo e apresento as etapas para validação durante o projeto.' },
    { number: '04', title: 'Publicação e suporte', text: 'Coloco a solução em uso e acompanho os ajustes após a entrega.' },
]

const Process = () => (
    <section id="process" className="commercial-section process-section" aria-labelledby="process-title">
        <div className="container">
            <SlideUp>
                <div className="commercial-heading">
                    <p>Como funciona</p>
                    <h2 id="process-title">Um processo claro, do primeiro contato à publicação.</h2>
                </div>
            </SlideUp>
            <ol className="process-grid">
                {steps.map(({ number, title, text }, index) => (
                    <li key={number}>
                        <SlideUp delay={index + 1}>
                            <article className="process-card">
                                <span>{number}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        </SlideUp>
                    </li>
                ))}
            </ol>
        </div>
    </section>
)

export default Process
