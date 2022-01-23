import { motion } from 'framer-motion'

import { ReactComponent as BitcoinLogo } from 'assets/img/bitcoin.svg'
import { ReactComponent as DogecoinLogo } from 'assets/img/dogecoin.svg'
import { ReactComponent as MoneroLogo } from 'assets/img/monero.svg'
import { ReactComponent as BazaLogo } from 'assets/img/baza_logo.svg'

const CURRENCIES_SUPPORTED = [
    {
        name: 'Bitcoin',
        logo: <BitcoinLogo className="w-[80px] h-[80px]" />,
    },
    {
        name: 'Dogecoin',
        logo: <DogecoinLogo className="w-[80px] h-[80px]" />,
    },
    {
        name: 'Monero',
        logo: <MoneroLogo className="w-[80px] h-[80px]" />,
    },
    {
        name: 'Baza',
        logo: <BazaLogo className="w-[80px] h-[80px]" />,
    },
]

const Currencies = () => {
    return (
        <div className="bg-gray-100 flex flex-col p-8">
            <div className="text-center">
                <p className="text-4xl lg:text-5xl text-gray-600">
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
                        className="bg-white rounded-md shadow-lg flex flex-col items-center justify-around mx-2 my-4 w-[150px] h-[150px] relative"
                        whileHover={{ scale: 1.1, zIndex: 1 }}
                        whileTap={{ scale: 1.1, zIndex: 1 }}
                        key={i}>
                        {x.logo}
                        <p className="text-base text-gray-500">{x.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Currencies
