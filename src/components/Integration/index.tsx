import { motion } from 'framer-motion'

import CreateProjectIMG from 'assets/img/create-project.png'
import IncludeJSIMG from 'assets/img/include-js.png'
import InitializeFormIMG from 'assets/img/initialize-form.png'
import BackendEndpointIMG from 'assets/img/backend-endpoint.png'
import OnclickCheckoutIMG from 'assets/img/onclick-checkout.png'
import SignatureVerifyIMG from 'assets/img/signature-verify.png'

const integrationSteps = [
    {
        title: 'Create a Project in Gateway Console',
        img: CreateProjectIMG,
        id: 0,
    },
    {
        title: 'Add our loader JS to your index.html',
        img: IncludeJSIMG,
        id: 1,
    },
    {
        title: 'Initialize the Form',
        img: InitializeFormIMG,
        id: 2,
    },
    {
        title: 'Add a endpoint to create form ID in your backend',
        img: BackendEndpointIMG,
        id: 3,
    },
    {
        title: 'Show the form on checkout button click',
        img: OnclickCheckoutIMG,
        id: 4,
    },
    {
        title: 'Verify the payment payload',
        img: SignatureVerifyIMG,
        id: 5,
    },
]

interface IntegrationProps {
    id: string
}

const Integration = ({ id }: IntegrationProps) => {
    return (
        <div className="bg-gray-100 p-8 pt-20" id={id}>
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-4xl lg:text-5xl font-semibold text-gray-600">
                    Integration
                </p>
                <p className="text-base text-gray-400 mt-4">
                    Follow this simple steps to integrate to your website easily
                </p>
                <div className="mt-14 flex flex-col">
                    {integrationSteps.map((x, i) => (
                        <div className="flex flex-row" key={i}>
                            <div
                                className={`flex-1 ${
                                    x.id % 2 === 0 ? 'order-1' : 'order-3'
                                }`}>
                                <motion.div
                                    initial="offScreen"
                                    whileInView="onScreen"
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        type: 'spring',
                                        bounce: 0.4,
                                    }}
                                    variants={{
                                        offScreen: {
                                            x: x.id % 2 === 0 ? 50 : -50,
                                            opacity: 0,
                                        },
                                        onScreen: {
                                            x: 0,
                                            opacity: 1,
                                        },
                                    }}
                                    className="py-6 px-8 bg-white rounded-md relative mt-8">
                                    <div className="absolute -top-5 right-2 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md sm:hidden">
                                        <p className="text-2xl font-medium text-white">
                                            {x.id + 1}
                                        </p>
                                    </div>
                                    <p className="text-2xl text-gray-600 font-light text-center mb-4">
                                        {x.title}
                                    </p>
                                    {x.id === 0 ? (
                                        <div className="text-center">
                                            <button className="bg-green-500 px-6 py-2 rounded-sm text-white">
                                                <a
                                                    href="https://gpconsole.ekata.io/projects"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Go to console
                                                </a>
                                            </button>
                                        </div>
                                    ) : (
                                        <img
                                            src={x.img}
                                            alt="integration"
                                            className="rounded-sm"
                                        />
                                    )}
                                </motion.div>
                            </div>
                            <div className="relative order-2 mx-12 hidden sm:block">
                                <div className="absolute inset-y-0 my-auto -left-[14px] w-8 h-8 z-[1] rounded-full bg-green-500 flex justify-center items-center shadow-lg">
                                    <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                                </div>
                                <div className="absolute block w-[2px] -inset-y-6 bg-gray-400" />
                            </div>
                            <div
                                className={`flex-1 hidden sm:block  ${
                                    x.id % 2 === 0 ? 'order-3' : 'order-1'
                                }`}>
                                <div
                                    className={`flex h-full items-center ${
                                        x.id % 2 !== 0 && 'justify-end'
                                    }`}>
                                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center relative shadow-md">
                                        <div
                                            className={`absolute h-1 w-12 bg-green-500 ${
                                                x.id % 2 === 0
                                                    ? '-left-[48px]'
                                                    : '-right-[48px]'
                                            }`}
                                        />
                                        <p className="text-2xl font-medium text-white">
                                            {x.id + 1}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Integration
