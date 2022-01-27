import { useState } from 'react'

import { find } from 'lodash'
import { XCircleIcon } from '@heroicons/react/solid'

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
    const [selectedID, setSelectedID] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="bg-gray-100 p-8 pt-20" id={id}>
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-4xl lg:text-5xl font-semibold text-gray-600">
                    Integration
                </p>
                <p className="text-base text-gray-400 mt-4">
                    With these simple steps you can integrate to your website
                    easily{' '}
                </p>
                <div className="rounded-md bg-white shadow-lg p-4 mt-10 flex h-[400px] lg:h-[450px] bg-gradient-to-bl from-green-100 via-white">
                    <div
                        className={`sm:flex flex-col justify-center ${
                            !showDetails ? 'flex' : 'hidden'
                        }`}>
                        {integrationSteps.map((x, i) => (
                            <p
                                className="text-base px-2 py-2 mt-2 lg:py-4 text-gray-700 cursor-pointer hover:bg-green-500 rounded-lg hover:text-white lg:w-max w-[300px] whitespace-nowrap overflow-x-auto"
                                onClick={() => {
                                    setSelectedID(x.id)
                                    setShowDetails(true)
                                }}
                                key={i}>
                                {x.title}
                            </p>
                        ))}
                    </div>
                    <div
                        className={`sm:flex relative justify-center items-center w-[300px] lg:w-[600px] h-full ml-4 ${
                            showDetails ? 'flex' : 'hidden'
                        }`}>
                        <XCircleIcon
                            className="block h-6 w-6 absolute right-1 top-1 sm:hidden text-gray-800 cursor-pointer"
                            onClick={() => setShowDetails(false)}
                        />
                        {selectedID === 0 ? (
                            <button className="bg-green-500 px-6 h-12 w-40 rounded text-white">
                                Go to console
                            </button>
                        ) : (
                            <img
                                src={
                                    find(
                                        integrationSteps,
                                        (o) => o.id === selectedID
                                    )?.img
                                }
                                alt="integration"
                                className="rounded-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integration
