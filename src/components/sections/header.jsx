import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiShakeHandsLine } from '@remixicon/react'
import logo from '../../assets/images/devsantos-logo.png'
import { menuList } from '../../utlits/fackData/menuList'

const Header = () => {
    const [isSticky, setisSticky] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const stickyHeader = () => {
        setisSticky(window.scrollY > 85)
    }

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <Link to="/" aria-label="Ir para o início" onClick={() => setIsMenuOpen(false)}><img src={logo} alt="Devsantos" /></Link>
                            </div>
                        </div>
                        <div className="nav-outer clearfix mx-auto">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <Link to="/" aria-label="Ir para o início" onClick={() => setIsMenuOpen(false)}><img src={logo} alt="Devsantos" /> </Link>
                                    </div>
                                    <button type="button" className="navbar-toggle" onClick={() => setIsMenuOpen((open) => !open)} aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'} aria-controls="main-navigation" aria-expanded={isMenuOpen}>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="main-navigation">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => (
                                                <li key={id}>
                                                    <Link
                                                        to={path}
                                                        className="nav-link-click"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className="menu-btns">
                            <Link to="/#contact" className="theme-btn">Solicitar orçamento <RiShakeHandsLine size={15} /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
