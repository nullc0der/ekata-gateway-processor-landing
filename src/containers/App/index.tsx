import { useEffect } from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import Features from 'components/Features'
import Integration from 'components/Integration'
import Plugins from 'components/Plugins'
import Currencies from 'components/Currencies'
import Pricing from 'components/Pricing'
import Footer from 'components/Footer'

import './App.css'

function App() {
    const { trackPageView } = useMatomo()

    useEffect(() => {
        trackPageView({})
    }, [trackPageView])

    return (
        <div className="App relative bg-gray-50 overflow-x-hidden">
            <Header />
            <Hero />
            <Features id="features" />
            <Integration id="integration" />
            <Plugins id="plugins" />
            <Currencies id="currencies" />
            <Pricing id="pricing" />
            <Footer />
        </div>
    )
}

export default App
