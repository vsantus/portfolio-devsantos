import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineChat } from "react-icons/md";
import { RiWhatsappFill } from '@remixicon/react';
import SlideUp from '../../utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2> Pronto para dar o pontapé inicial no seu projeto com um toque profissional?</h2>
                                <p>Me chama e vamos colocar seu projeto no ar! 🚀 <br></br> Também estou disponível para vagas full-time ou part-time como desenvolvedor Front-End, sempre focado em performance, design e experiência do usuário.</p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Email <i><MdOutlineChat size={16} /></i></Link>
                                    <Link to="https://wa.me/11934916872" target="_blank" className="theme-btn">
                                        WhatsApp <i><RiWhatsappFill size={16} /></i>
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default CallToAction