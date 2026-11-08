import SlideUp from '../../utlits/animations/slideUp'

const questions = [
    { question: 'Quanto custa desenvolver um projeto?', answer: 'O investimento depende do objetivo, das funcionalidades e do prazo. Após uma conversa inicial, você recebe uma proposta com escopo e valor definidos.' },
    { question: 'Quanto tempo leva para ficar pronto?', answer: 'Landing pages costumam ter um ciclo menor; sistemas e integrações exigem mais etapas. O cronograma é apresentado antes do início e acompanhado durante o projeto.' },
    { question: 'Preciso ter todo o conteúdo pronto?', answer: 'Não. Posso orientar a organização das informações e indicar o que será necessário. Textos, imagens e identidade visual são alinhados no diagnóstico.' },
    { question: 'O projeto terá suporte depois da entrega?', answer: 'Sim. A publicação e os ajustes iniciais fazem parte do processo. Manutenção contínua também pode ser combinada conforme a necessidade.' },
    { question: 'Você trabalha com projetos que já existem?', answer: 'Sim. Posso avaliar melhorias, novas funcionalidades, integrações ou uma reformulação completa da solução atual.' },
]

const Faq = () => (
    <section className="commercial-section faq-section" aria-labelledby="faq-title">
        <div className="container faq-container">
            <SlideUp>
                <div className="commercial-heading">
                    <p>Dúvidas frequentes</p>
                    <h2 id="faq-title">Antes de começarmos.</h2>
                </div>
            </SlideUp>
            <div className="faq-list">
                {questions.map(({ question, answer }) => (
                    <details key={question}>
                        <summary>{question}</summary>
                        <p>{answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
)

export default Faq
