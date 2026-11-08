import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation, useMatches } from 'react-router-dom'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import CallToAction from '../components/sections/callToAction'

const DocumentMeta = () => {
    const matches = useMatches()
    const meta = [...matches].reverse().find(({ handle }) => handle?.title)?.handle

    useEffect(() => {
        if (!meta) return

        document.title = meta.title
        const description = document.querySelector('meta[name="description"]')
        description?.setAttribute('content', meta.description)
    }, [meta])

    return null
}

const ScrollToHash = () => {
    const { hash, pathname } = useLocation()

    useEffect(() => {
        if (!hash) return

        requestAnimationFrame(() => {
            document.getElementById(hash.slice(1))?.scrollIntoView()
        })
    }, [hash, pathname])

    return null
}

const RootLayout = () => {
    const { pathname } = useLocation()
    const showCallToAction = !['/', '/contact'].includes(pathname)

    return (
        <>
            <DocumentMeta />
            <ScrollToHash />
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            {showCallToAction && <CallToAction />}
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout
