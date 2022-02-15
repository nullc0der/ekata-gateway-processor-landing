import { motion } from 'framer-motion'

import { ReactComponent as BitcoinLogo } from 'assets/img/bitcoin.svg'
import { ReactComponent as DogecoinLogo } from 'assets/img/dogecoin.svg'
import { ReactComponent as MoneroLogo } from 'assets/img/monero.svg'
import { ReactComponent as BazaLogo } from 'assets/img/baza_logo.svg'

const CURRENCIES_SUPPORTED = [
    {
        name: 'Bitcoin',
        logo: <BitcoinLogo className="w-[80px] h-[80px]" />,
        link: 'https://bitcoin.org/',
    },
    {
        name: 'Dogecoin',
        logo: <DogecoinLogo className="w-[80px] h-[80px]" />,
        link: 'https://dogecoin.com/',
    },
    {
        name: 'Monero',
        logo: <MoneroLogo className="w-[80px] h-[80px]" />,
        link: 'https://www.getmonero.org/',
    },
    {
        name: 'Baza',
        logo: <BazaLogo className="w-[80px] h-[80px]" />,
        link: 'https://baza.foundation/',
    },
]

interface CurrenciesProps {
    id: string
}

const Currencies = ({ id }: CurrenciesProps) => {
    return (
        <div className="bg-gray-100 flex flex-col p-8" id={id}>
            <div className="text-center">
                <p className="text-4xl lg:text-5xl font-semibold text-gray-600">
                    Supported Currencies
                </p>
                <p className="text-base text-gray-600 mt-2">
                    Once enabled in a project you will be able to accept
                    payments in all of these currencies instantly.
                </p>
            </div>
            <div className="flex flex-row flex-wrap mt-10 justify-center">
                {CURRENCIES_SUPPORTED.map((x, i) => (
                    <motion.div
                        className="flex flex-col items-center justify-center mx-2 my-4 p-4 relative cursor-pointer"
                        whileHover={{ scale: 1.1, zIndex: 1 }}
                        whileTap={{ scale: 1.1, zIndex: 1 }}
                        initial="offScreen"
                        whileInView="onScreen"
                        viewport={{ once: true }}
                        variants={{
                            offScreen: {
                                y: 20,
                            },
                            onScreen: {
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    type: 'spring',
                                    bounce: 0.4,
                                },
                            },
                        }}
                        key={i}>
                        <a href={x.link} target="_blank" rel="noreferrer">
                            {x.logo}
                            <p className="text-sm font-medium text-center text-gray-500">
                                {x.name}
                            </p>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Currencies
