import { motion } from 'framer-motion'

import { ReactComponent as PythonLogo } from 'assets/img/python.svg'
import { ReactComponent as ReactLogo } from 'assets/img/react.svg'
import { ReactComponent as AndroidLogo } from 'assets/img/android.svg'
import { ReactComponent as IosLogo } from 'assets/img/apple-ios.svg'
import { ReactComponent as WooCommerceLogo } from 'assets/img/woocommerce.svg'
import { ReactComponent as ShopifyLogo } from 'assets/img/shopify.svg'
import { ReactComponent as OdooLogo } from 'assets/img/odoo.svg'

const SUPPORTED_PLUGINS = [
    {
        name: 'Python',
        logo: <PythonLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
    {
        name: 'React',
        logo: <ReactLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
    {
        name: 'Android',
        logo: <AndroidLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
    {
        name: 'iOS',
        logo: <IosLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
    {
        name: 'WooCommerce',
        logo: <WooCommerceLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
    {
        name: 'Shopify',
        logo: <ShopifyLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
    {
        name: 'Odoo',
        logo: <OdooLogo className="w-[100px] h-[100px]" />,
        comingSoon: true,
    },
]

const Plugins = () => {
    return (
        <div className="bg-gray-200 flex flex-col p-8">
            <div className="text-center">
                <p className="text-4xl lg:text-5xl text-gray-600">
                    Your Favorite Plugins Supported
                </p>
            </div>
            <div className="flex flex-row flex-wrap mt-10 justify-center">
                {SUPPORTED_PLUGINS.map((x, i) => (
                    <motion.div
                        className="bg-white rounded-md shadow-lg flex flex-col items-center justify-around mx-2 my-4 w-[250px] h-[250px] relative"
                        whileHover={{ scale: 1.1, zIndex: 1 }}
                        whileTap={{ scale: 1.1, zIndex: 1 }}
                        key={i}>
                        {!!x.comingSoon && (
                            <div className="bg-green-500 text-white text-[0.75rem] rounded-3xl p-2 absolute right-1 -top-5">
                                In development
                            </div>
                        )}
                        {x.logo}
                        <p className="text-base text-gray-500">{x.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Plugins
