import { RiChatSmile2Line, RiFileList3Line, RiShieldCheckLine } from '@remixicon/react'

const trustItems = [
    { icon: RiChatSmile2Line, title: 'Atendimento direto', text: 'Você fala com quem planeja e desenvolve.' },
    { icon: RiFileList3Line, title: 'Escopo e prazo claros', text: 'Entregas combinadas antes de começar.' },
    { icon: RiShieldCheckLine, title: 'Suporte pós-entrega', text: 'Acompanhamento para colocar tudo em uso.' },
]

const TrustBar = () => (
    <section className="trust-bar" aria-label="Diferenciais do atendimento">
        <div className="container">
            <div className="trust-grid">
                {trustItems.map(({ icon: Icon, title, text }) => (
                    <div className="trust-item" key={title}>
                        <Icon aria-hidden="true" />
                        <div><strong>{title}</strong><span>{text}</span></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default TrustBar
