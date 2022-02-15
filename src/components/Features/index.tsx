import { motion } from 'framer-motion'

import FEATURES from './features'

interface FeaturesProps {
    id: string
}

const Features = ({ id }: FeaturesProps) => {
    return (
        <div className="bg-gray-100 flex flex-col p-8" id={id}>
            <div className="container mx-auto">
                <div className="w-full mt-4 lg:mt-0">
                    <div className="flex w-full h-full justify-center items-center">
                        <p className="text-4xl lg:text-5xl font-semibold text-gray-600">
                            Features
                        </p>
                    </div>
                </div>
                <div className="w-full mt-4 lg:mt-8">
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex flex-row flex-wrap justify-center">
                            {FEATURES.map((x, i) => (
                                <motion.div
                                    className="sm:w-[300px] lg:w-[400px] h-[200px] shadow-lg bg-white rounded-md flex flex-col items-center justify-between p-4 mx-2 my-4 cursor-pointer relative"
                                    whileHover={{ scale: 1.1, zIndex: 1 }}
                                    whileTap={{ scale: 1.1, zIndex: 1 }}
                                    initial="offScreen"
                                    whileInView="onScreen"
                                    viewport={{ once: true }}
                                    variants={{
                                        offScreen: {
                                            scale: 0.8,
                                        },
                                        onScreen: {
                                            scale: 1,
                                            transition: {
                                                duration: 0.8,
                                                type: 'spring',
                                                bounce: 0.4,
                                            },
                                        },
                                    }}
                                    key={i}>
                                    {!!x.comingSoon && (
                                        <div className="bg-green-500 text-white text-[0.75rem] rounded-3xl p-2 absolute right-1 -top-5">
                                            In development
                                        </div>
                                    )}
                                    <p className="text-2xl lg:text-3xl text-gray-600">
                                        {x.title}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {x.subtitle}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
