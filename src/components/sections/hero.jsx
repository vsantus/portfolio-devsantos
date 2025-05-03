import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiInstagramLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/vsantos.jpg"
import partner1 from "../../assets/images/toolsimg/1.png"
import partner2 from "../../assets/images/toolsimg/2.png"
import partner3 from "../../assets/images/toolsimg/3.png"
import partner4 from "../../assets/images/toolsimg/4.png"
import partner5 from "../../assets/images/toolsimg/5.png"
import partner6 from "../../assets/images/toolsimg/6.png"
import partner7 from "../../assets/images/toolsimg/7.png"
import partner8 from "../../assets/images/toolsimg/8.png"
import partner9 from "../../assets/images/toolsimg/9.png"
import partner10 from "../../assets/images/toolsimg/10.png"
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>Vinicius Santos</h2>
                                <p>Sou desenvolvedor Front-End e atuo em São Paulo</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/vsantus/" target="_blank" rel="noopener noreferrer">
                                                <RiLinkedinFill size={20} />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://github.com/vsantus" target="_blank" rel="noopener noreferrer">
                                                <RiGithubLine size={20} />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/devsantos_/" target="_blank" rel="noopener noreferrer">
                                                <RiInstagramLine size={20} />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Fala aí!</p>
                                <h2>
                                    Sou o Vinicius, desenvolvedor FrontEnd especializado em criar interfaces modernas, responsivas e cheias de interatividade.
                                </h2>

                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Dísponivel para Freelance</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a href="/cv.pdf" download className="theme-btn">
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>
                                </div>

                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Ferramentas que utilizo:</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee speed={130} autoFill={true} pauseOnHover={true}>
                                                <img src={partner1} alt="" />
                                                <img src={partner2} alt="" />
                                                <img src={partner3} alt="" />
                                                <img src={partner4} alt="" />
                                                <img src={partner5} alt="" />
                                                <img src={partner6} alt="" />
                                                <img src={partner7} alt="" />
                                                <img src={partner8} alt="" />
                                                <img src={partner9} alt="" />
                                                <img src={partner10} alt="" />
                                            </Marquee>
                                        </div>
                                    </div>
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

export default Hero