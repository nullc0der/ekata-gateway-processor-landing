import Header from 'components/Header'
import Hero from 'components/Hero'
import Features from 'components/Features'
import Integration from 'components/Integration'
import Plugins from 'components/Plugins'
import Currencies from 'components/Currencies'
import Pricing from 'components/Pricing'

import './App.css'

function App() {
    return (
        <div className="App relative bg-gray-50 overflow-x-hidden">
            <Header />
            <Hero />
            <Features />
            <Integration />
            <Plugins />
            <Currencies />
            <Pricing />
        </div>
    )
}

export default App
