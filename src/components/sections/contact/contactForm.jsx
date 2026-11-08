import { useRef, useState } from 'react'
import { RiLoader4Line, RiMailLine } from '@remixicon/react'
import emailjs from '@emailjs/browser'
import SlideUp from '../../../utlits/animations/slideUp'

const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cbhehcp',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_nw63qqp',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'rfmEoowmDsEly6iXF',
}

const ContactForm = () => {
    const form = useRef(null)
    const [status, setStatus] = useState('idle')
    const [feedback, setFeedback] = useState('')

    const sendEmail = async (event) => {
        event.preventDefault()

        const formData = new FormData(form.current)
        if (formData.get('website')) return

        setStatus('sending')
        setFeedback('Enviando sua mensagem...')

        try {
            await emailjs.sendForm(
                emailConfig.serviceId,
                emailConfig.templateId,
                form.current,
                emailConfig.publicKey,
            )
            form.current.reset()
            setStatus('success')
            setFeedback('Mensagem enviada com sucesso. Em breve entrarei em contato!')
        } catch {
            setStatus('error')
            setFeedback('Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp.')
        }
    }

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form ref={form} onSubmit={sendEmail} className="contactForm" name="contactForm">
                        <div className="honeypot" aria-hidden="true">
                            <label htmlFor="website">Site</label>
                            <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nome completo</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Seu nome" minLength="2" maxLength="80" autoComplete="name" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Endereço de e-mail</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="voce@exemplo.com" maxLength="120" autoComplete="email" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">WhatsApp</label>
                                    <input type="tel" id="phone" name="phone" className="form-control" placeholder="(00) 00000-0000" maxLength="20" autoComplete="tel" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="company">Empresa ou segmento</label>
                                    <input type="text" id="company" name="company" className="form-control" placeholder="Nome da empresa ou área de atuação" maxLength="120" autoComplete="organization" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="project_type">Tipo de projeto</label>
                                    <select id="project_type" name="project_type" className="form-control" defaultValue="" required>
                                        <option value="" disabled>Selecione uma opção</option>
                                        <option>Landing page ou site</option>
                                        <option>Sistema ou dashboard</option>
                                        <option>Automação ou integração</option>
                                        <option>Melhoria em projeto existente</option>
                                        <option>Ainda não sei</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="budget">Faixa de investimento</label>
                                    <select id="budget" name="budget" className="form-control" defaultValue="">
                                        <option value="">Prefiro conversar primeiro</option>
                                        <option>Até R$ 2 mil</option>
                                        <option>R$ 2 mil a R$ 5 mil</option>
                                        <option>R$ 5 mil a R$ 10 mil</option>
                                        <option>Acima de R$ 10 mil</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="deadline">Prazo esperado</label>
                                    <select id="deadline" name="deadline" className="form-control" defaultValue="">
                                        <option value="">Sem prazo definido</option>
                                        <option>Até 30 dias</option>
                                        <option>De 1 a 2 meses</option>
                                        <option>De 2 a 4 meses</option>
                                        <option>Mais de 4 meses</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Sua mensagem</label>
                                    <textarea name="message" id="message" className="form-control" rows="5" placeholder="Qual problema você quer resolver e qual resultado espera alcançar?" minLength="10" maxLength="2000" required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn" disabled={status === 'sending'}>
                                        {status === 'sending' ? (
                                            <>Enviando <RiLoader4Line className="spin" size={18} aria-hidden="true" /></>
                                        ) : (
                                            <>Solicitar uma conversa <RiMailLine size={17} aria-hidden="true" /></>
                                        )}
                                    </button>
                                    <p className={`form-feedback ${status}`} role="status" aria-live="polite">
                                        {feedback}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm
