import ContactOption from './contactOption'
import ContactForm from './contactForm'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactSection = ({ innerPage = false }) => {
    const Heading = innerPage ? 'h1' : 'h2'

    return (
    <section id="contact" className={`contact-area commercial-contact ${innerPage ? 'innerpage-single-area' : 'commercial-section'}`}>
        <div className="container">
            <SlideUp>
                <div className="commercial-heading text-center mx-auto">
                    <p>Vamos conversar</p>
                    <Heading className={innerPage ? 'contact-page-title' : undefined}>Conte um pouco sobre o seu projeto.</Heading>
                    <span>Envie o contexto inicial. Eu analiso a ideia e retorno para alinharmos os próximos passos, sem compromisso.</span>
                </div>
            </SlideUp>
            <div className="row">
                <ContactOption />
                <ContactForm />
            </div>
        </div>
    </section>
    )
}

export default ContactSection
