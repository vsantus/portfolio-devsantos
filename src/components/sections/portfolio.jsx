import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from '@remixicon/react'
import { projectsData } from '../../utlits/fackData/projectData'
import SlideUp from '../../utlits/animations/slideUp'

const animations = ['slideIn', 'fadeIn', 'scaleUp']

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('Todos')
    const [animationClass, setAnimationClass] = useState('')
    const categories = ['Todos', ...new Set(projectsData.map((project) => project.category))]
    const filteredProjects = category === 'Todos'
        ? projectsData
        : projectsData.filter((project) => project.category === category)

    const handleCategoryClick = (item) => {
        setCategory(item)
        setAnimationClass(animations[categories.indexOf(item) % animations.length])
    }

    return (
        <section id="projects" className={`projects-area commercial-section ${className || ''}`}>
            <div className="container">
                <SlideUp>
                    <div className="commercial-heading text-center mx-auto">
                        <p>Projetos selecionados</p>
                        <h2>Ideias transformadas em soluções digitais.</h2>
                        <span>Cada trabalho parte de uma necessidade diferente e busca tornar a comunicação ou a operação mais simples.</span>
                    </div>
                </SlideUp>

                <SlideUp>
                    <div className="project-filter filter-btns-one pb-15" role="group" aria-label="Filtrar projetos por categoria">
                        {categories.map((item) => (
                            <button
                                type="button"
                                key={item}
                                onClick={() => handleCategoryClick(item)}
                                className={item === category ? 'current' : ''}
                                aria-pressed={item === category}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </SlideUp>

                <div className="row project-masonry-active overflow-hidden">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} {...project} animationClass={animationClass} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const Card = ({ category, title, src, animationClass, id, link, summary, outcome }) => (
    <div className={`col-lg-4 col-md-6 item ${animationClass}`}>
        <SlideUp delay={id}>
            <article className="project-item style-two commercial-case-card">
                <div className="project-image">
                    <img src={src} alt={`Projeto ${title}`} loading="lazy" decoding="async" />
                    <Link to={link} className="details-btn" aria-label={`Ver detalhes do projeto ${title}`}>
                        <RiArrowRightUpLine aria-hidden="true" />
                    </Link>
                </div>
                <div className="project-content">
                    <span className="sub-title">{category}</span>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <div className="case-outcome"><strong>Impacto</strong><span>{outcome}</span></div>
                    <Link to={link} className="case-link">Ver como foi desenvolvido <RiArrowRightUpLine aria-hidden="true" /></Link>
                </div>
            </article>
        </SlideUp>
    </div>
)

export default Portfolio
