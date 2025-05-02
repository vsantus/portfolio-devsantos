import React, { useRef } from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cbhehcp', 'template_nw63qqp', form.current, 'rfmEoowmDsEly6iXF')
            .then((result) => {
                console.log(result.text);
                alert('Mensagem enviada com sucesso!');
                form.current.reset(); // limpa o formulário depois de enviar
            }, (error) => {
                console.log(error.text);
                alert('Erro ao enviar mensagem. Tente novamente.');
            });
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form ref={form} onSubmit={sendEmail} className="contactForm" name="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nome Completo</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Steve Milner" required />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Endereço de Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="exemplo@seudominio.com" required />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Sua Mensagem</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Escreva sua mensagem" required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Enviar Mensagem <i><RiMailLine size={15} /></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm;
