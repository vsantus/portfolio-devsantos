import Hero from '../components/sections/hero'
import TrustBar from '../components/sections/trustBar'
import Problems from '../components/sections/problems'
import ServiceGrid from '../components/sections/serviceGrid'
import Portfolio from '../components/sections/portfolio'
import Process from '../components/sections/process'
import Commitments from '../components/sections/commitments'
import Faq from '../components/sections/faq'
import ContactSection from '../components/sections/contact/contactSection'

const Home = () => {
    return (
        <>
            <Hero />
            <TrustBar />
            <Problems />
            <ServiceGrid />
            <Portfolio />
            <Process />
            <Commitments />
            <Faq />
            <ContactSection />
        </>
    )
}

export default Home
