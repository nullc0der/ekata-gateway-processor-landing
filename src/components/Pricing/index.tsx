import { motion } from 'framer-motion'

const PRICINGS = [
    {
        title: 'Basic Free',
        subtitle: 'Basic account comes with limited 100 transactions per month',
        features: [
            {
                name: 'Transactions',
                description: '100 Tx',
            },
            {
                name: 'Cryptos',
                description: 'Complete set',
            },
            {
                name: 'Per 100',
                description: 'Free',
            },
            {
                name: 'Features',
                description: 'Basic',
            },
        ],
        price: '0.00',
        color: 'bg-orange-500',
        textColor: 'text-orange-600',
        beforeColor: 'before:bg-orange-600',
    },
    {
        title: 'Advanced',
        subtitle:
            'Advanced account is basic free at a reduced price with all features for purchase',
        features: [
            {
                name: 'Transactions',
                description: '1000 Tx',
            },
            {
                name: 'Cryptos',
                description: 'Complete set',
            },
            {
                name: 'Per 1000',
                description: '$12.99',
            },
            {
                name: 'Features',
                description: 'Complete',
            },
        ],
        price: '12.99',
        color: 'bg-red-500',
        textColor: 'text-red-600',
        beforeColor: 'before:bg-red-600',
    },
    {
        title: 'Enterprise',
        subtitle:
            'Order enterprise for custom websites and hosting solutions tailored to your needs',
        features: [
            {
                name: 'Advanced Package',
                description: 'Include',
            },
            {
                name: 'Site Hosting',
                description: 'Quoted',
            },
            {
                name: 'Custom Website',
                description: 'Quoted',
            },
            {
                name: 'Custom Features',
                description: 'Quoted',
            },
        ],
        price: '269.99',
        color: 'bg-violet-500',
        textColor: 'text-violet-600',
        beforeColor: 'before:bg-violet-600',
    },
]

interface PricingProps {
    id: string
}

const Pricing = ({ id }: PricingProps) => {
    return (
        <div className="bg-gray-100 flex flex-col p-8" id={id}>
            <div className="text-center">
                <p className="text-4xl lg:text-5xl text-gray-600 font-semibold">
                    Pricing
                </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-10">
                {PRICINGS.map((x, i) => (
                    <motion.div
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
                        className={`flex flex-col px-8 py-4 m-4 h-[500px] w-[400px] bg-white rounded-md shadow-lg relative before:absolute before:top-0 before:rounded-t before:left-0 before:block before:content-[''] before:w-full before:h-1 ${x.beforeColor}`}
                        key={i}>
                        <p className="text-3xl font-medium text-gray-700 text-center mt-5">
                            {x.title}
                        </p>
                        <p className={`text-sm text-gray-400 my-2`}>
                            {x.subtitle}
                        </p>
                        <div className="mt-8 sm:mt-16">
                            {x.features.map((y, i) => (
                                <div
                                    className="flex justify-between mt-4"
                                    key={i}>
                                    <p className="text-sm font-semibold">
                                        {y.name}
                                    </p>
                                    <p className={`text-sm ${x.textColor}`}>
                                        {y.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1" />
                        <p className="text-base font-semibold">Starting At:</p>
                        <div className="flex justify-between">
                            <p className={`text-2xl ${x.textColor}`}>
                                ${x.price}
                            </p>
                            <p className={`text-lg ${x.textColor}`}>/BTC mo</p>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className={`mt-4 rounded-full ${x.color} text-white w-[150px] h-[40px]`}>
                                Order Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
