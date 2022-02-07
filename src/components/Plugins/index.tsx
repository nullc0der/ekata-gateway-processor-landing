import { motion } from 'framer-motion'

import { ReactComponent as PythonLogo } from 'assets/img/python.svg'
import { ReactComponent as ReactLogo } from 'assets/img/react.svg'
import { ReactComponent as AndroidLogo } from 'assets/img/android.svg'
import { ReactComponent as IosLogo } from 'assets/img/apple-ios.svg'
import { ReactComponent as WooCommerceLogo } from 'assets/img/woocommerce.svg'
import { ReactComponent as ShopifyLogo } from 'assets/img/shopify.svg'
import { ReactComponent as OdooLogo } from 'assets/img/odoo.svg'
import { ReactComponent as NodeJSLogo } from 'assets/img/nodejs.svg'

const SUPPORTED_PLUGINS = [
    {
        name: 'Python',
        subtitle:
            'Python is an interpreted high-level general-purpose programming language',
        logo: <PythonLogo className="w-[60px] h-[60px]" />,
        comingSoon: false,
        type: 'Helper',
        homePage: 'https://pypi.org/project/ekata-gateway-processor-helper/',
        doc: 'https://gpdocs.ekata.io/backend_helpers/python/',
        sourceCode:
            'https://gitlab.ekata.io/ekata-io-projects/ekata-gateway-processor-helper-python',
    },
    {
        name: 'React',
        subtitle:
            'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components',
        logo: <ReactLogo className="w-[60px] h-[60px]" />,
        comingSoon: false,
        type: 'Plugin',
        homePage:
            'https://www.npmjs.com/package/@ekataio/gateway-processor-form-react',
        doc: 'https://gpdocs.ekata.io/integration/integration-in-react-site/',
        sourceCode:
            'https://gitlab.ekata.io/ekata-io-projects/ekata-gateway-processor-react-component',
    },
    {
        name: 'Node.js',
        subtitle:
            'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine.',
        logo: <NodeJSLogo className="w-[60px] h-[60px]" />,
        comingSoon: false,
        type: 'Helper',
        homePage:
            'https://www.npmjs.com/package/@ekataio/ekata-gateway-processor-helper',
        doc: 'https://gpdocs.ekata.io/backend_helpers/node/',
        sourceCode:
            'https://gitlab.ekata.io/ekata-io-projects/ekata-gateway-processor-helper-node',
    },
    {
        name: 'Android',
        subtitle:
            'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software',
        logo: <AndroidLogo className="w-[60px] h-[60px]" />,
        comingSoon: true,
        type: '',
        homePage: '',
        doc: '',
        sourceCode: '',
    },
    {
        name: 'iOS',
        subtitle:
            'iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware',
        logo: <IosLogo className="w-[60px] h-[60px]" />,
        comingSoon: true,
        type: '',
        homePage: '',
        doc: '',
        sourceCode: '',
    },
    {
        name: 'WooCommerce',
        subtitle:
            'WooCommerce is an open-source e-commerce plugin for WordPress',
        logo: <WooCommerceLogo className="w-[60px] h-[60px]" />,
        comingSoon: true,
        type: '',
        homePage: '',
        doc: '',
        sourceCode: '',
    },
    {
        name: 'Shopify',
        subtitle:
            'Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems',
        logo: <ShopifyLogo className="w-[60px] h-[60px]" />,
        comingSoon: true,
        type: '',
        homePage: '',
        doc: '',
        sourceCode: '',
    },
    {
        name: 'Odoo',
        subtitle: 'Odoo is a suite of business management software tools',
        logo: <OdooLogo className="w-[60px] h-[60px]" />,
        comingSoon: true,
        type: '',
        homePage: '',
        doc: '',
        sourceCode: '',
    },
]

interface PluginsProps {
    id: string
}

const Plugins = ({ id }: PluginsProps) => {
    return (
        <div className="bg-gray-100 flex flex-col p-20" id={id}>
            <div className="text-center">
                <p className="text-3xl font-medium text-gray-600">
                    Plugin and helper functions
                </p>
            </div>
            <div className="flex flex-row flex-wrap mt-10 justify-center">
                {SUPPORTED_PLUGINS.map((x, i) => (
                    <motion.div
                        className="bg-white rounded-md shadow-lg flex flex-col items-center justify-center mx-2 my-4 relative py-4 px-8 group"
                        whileHover={{ scale: 1.1, zIndex: 1 }}
                        whileTap={{ scale: 1.1, zIndex: 1 }}
                        key={i}>
                        {!!x.comingSoon && (
                            <div className="bg-green-500 text-white text-[0.75rem] rounded-3xl p-2 absolute right-1 -top-5 z-[2]">
                                In development
                            </div>
                        )}
                        {x.logo}
                        <p className="text-base font-medium mt-4 text-gray-500">
                            {x.name}
                        </p>
                        <p className="text-sm text-center mt-4 w-[250px] text-gray-700">
                            {x.subtitle}
                        </p>
                        {!x.comingSoon && (
                            <div className="bg-white opacity-95 absolute inset-x-0 inset-y-0 z-[1] hidden group-hover:flex flex-col items-center justify-center">
                                {x.doc && (
                                    <p className="text-base text-gray-500 mb-2 cursor-pointer border-b border-transparent hover:text-green-500 hover:border-green-400">
                                        <a
                                            href={x.doc}
                                            target="_blank"
                                            rel="noreferrer">
                                            Doc
                                        </a>
                                    </p>
                                )}
                                {x.homePage && (
                                    <p className="text-base text-gray-500 mb-2 cursor-pointer border-b border-transparent hover:text-green-500 hover:border-green-400">
                                        <a
                                            href={x.homePage}
                                            target="_blank"
                                            rel="noreferrer">
                                            {x.type} Homepage
                                        </a>
                                    </p>
                                )}
                                {x.sourceCode && (
                                    <p className="text-base text-gray-500 mb-2 cursor-pointer border-b border-transparent hover:text-green-500 hover:border-green-400">
                                        <a
                                            href={x.sourceCode}
                                            target="_blank"
                                            rel="noreferrer">
                                            Source Code
                                        </a>
                                    </p>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Plugins
