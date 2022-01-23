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

const Pricing = () => {
    return (
        <div className="bg-gray-200 flex flex-col p-8">
            <div className="text-center">
                <p className="text-4xl lg:text-5xl text-gray-600">Pricing</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-10">
                {PRICINGS.map((x, i) => (
                    <div
                        className={`flex flex-col px-8 py-2 mx-2 my-4 justify-center h-[400px] w-[300px] bg-white rounded-md shadow-lg relative before:absolute before:top-0 before:rounded-t before:left-0 before:block before:content-[''] before:w-full before:h-1 ${x.beforeColor}`}
                        key={i}>
                        <p className="text-2xl text-gray-700">{x.title}</p>
                        <p
                            className={`text-sm text-gray-400 ${
                                i === 0 ? 'my-4' : 'my-2'
                            }`}>
                            {x.subtitle}
                        </p>
                        {x.features.map((y, i) => (
                            <div className="flex justify-between mt-2" key={i}>
                                <p className="text-sm">{y.name}</p>
                                <p className={`text-sm ${x.textColor}`}>
                                    {y.description}
                                </p>
                            </div>
                        ))}
                        <p className="mt-4 text-base">Starting At:</p>
                        <div className="flex justify-between mt-2">
                            <p className={`text-lg ${x.textColor}`}>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
