import { motion } from 'framer-motion'

import PaymentFormGIF from 'assets/img/payment-screen-600.gif'
import ConsoleIMG from 'assets/img/console.png'

const Hero = () => {
    return (
        <div className="h-screen bg-gray-100 pt-20">
            <div className="container mx-auto flex flex-row items-center h-full">
                <div className="flex flex-col justify-center">
                    <motion.div
                        className="p-4 sm:px-14 sm:py-6"
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
                        }}>
                        <p className="text-7xl 2xl:text-8xl text-green-500">
                            Ekata
                        </p>
                        <p className="text-7xl 2xl:text-8xl text-green-500">
                            Gateway
                        </p>
                        <p className="text-7xl 2xl:text-8xl text-green-500">
                            Processor
                        </p>
                        <p className="text-xl 2xl:text-2xl text-gray-600 mt-2 ml-1">
                            Fast, Secure, Easy Integrable{' '}
                            <br className="hidden sm:inline" /> Cryptocurrency
                            payment processor for
                            <br className="hidden sm:inline" /> websites and
                            mobile applications.
                        </p>
                        <p className="text-sm 2xl:text-md mt-2 ml-1 text-gray-600">
                            Accept crypto in your shop without the worry of
                            maintaining large backend
                            <br className="hidden lg:inline" /> code or
                            servers!! Leave that heavy lifting for us.
                        </p>
                        <button className="bg-green-500 px-6 h-12 w-40 rounded text-white mt-2 ml-1">
                            <a
                                href="https://gatewayprocessordemo.ekata.io/"
                                target="_blank"
                                rel="noreferrer">
                                Demo
                            </a>
                        </button>
                    </motion.div>
                </div>
                <div className="hidden lg:flex h-full relative">
                    <motion.div
                        className="2xl:p-20"
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
                        }}>
                        <img
                            src={PaymentFormGIF}
                            alt="payment form"
                            className="object-contain absolute max-w-[250px] 2xl:max-w-[300px] my-auto top-0 bottom-0 z-[3]"
                        />
                        <img
                            src={ConsoleIMG}
                            alt="Console"
                            className="absolute max-w-[600px] 2xl:max-w-[800px] my-auto top-0 bottom-0 left-[200px] 2xl:left-[300px] z-[2] rounded shadow-md"
                        />
                        <div className="h-[800px] w-[800px] bg-gradient-to-br from-green-400 via-green-200 to-green-100 rounded-full absolute top-0 bottom-0 my-auto left-[400px] 2xl:left-[700px]" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
