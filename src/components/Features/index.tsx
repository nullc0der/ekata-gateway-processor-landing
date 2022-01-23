import { motion } from 'framer-motion'

import FEATURES from './features'

const Features = () => {
    return (
        <div className="lg:h-screen bg-gray-200 flex flex-col lg:flex-row p-4">
            <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
                <div className="flex w-full h-full justify-center items-center">
                    <p className="text-4xl lg:text-6xl text-gray-600">
                        Features
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-8/12 mt-4 lg:mt-0">
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-row flex-wrap justify-center">
                        {FEATURES.map((x, i) => (
                            <motion.div
                                className="w-[300px] lg:w-[400px] h-[200px] shadow-lg bg-white rounded-md flex flex-col items-center justify-between p-4 mx-2 my-4 cursor-pointer relative"
                                whileHover={{ scale: 1.1, zIndex: 1 }}
                                whileTap={{ scale: 1.1, zIndex: 1 }}
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
    )
}

export default Features
