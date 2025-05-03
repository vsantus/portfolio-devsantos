import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiMapPinLine size={20} /></i>
                            </div>
                            <h2>Localização:</h2>
                            <p>São Paulo - SP, Brasil</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i><RiPhoneLine size={20} /></i>
                            </div>
                            <h2>Telefone:</h2>
                            <p>+55 11 93491-6872</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i><RiMailLine size={20} /></i>
                            </div>
                            <h2>Email:</h2>
                            <p>viniciusantosd.abreu@gmail.com

                            </p>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    );
};


export default ContactOption