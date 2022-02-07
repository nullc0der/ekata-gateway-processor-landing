import PythonLogo from 'assets/img/python.svg'
import ReactLogo from 'assets/img/react.svg'
import NodeJSLogo from 'assets/img/nodejs.svg'

export const menuItems = [
    {
        name: 'Home',
        link: '/',
        external: false,
    },
    {
        name: 'Plugins',
        link: '#plugins',
        external: false,
        subMenu: [
            {
                link: 'https://www.npmjs.com/package/@ekataio/gateway-processor-form-react',
                name: 'React',
                logo: (
                    <img
                        src={ReactLogo}
                        className="w-[18px] h-[18px] mr-2"
                        alt="React logo"
                    />
                ),
            },
            {
                link: 'https://pypi.org/project/ekata-gateway-processor-helper/',
                name: 'Python',
                logo: (
                    <img
                        src={PythonLogo}
                        className="w-[18px] h-[18px] mr-2"
                        alt="Python logo"
                    />
                ),
            },
            {
                link: 'https://www.npmjs.com/package/@ekataio/ekata-gateway-processor-helper',
                name: 'Node.JS',
                logo: (
                    <img
                        src={NodeJSLogo}
                        className="w-[18px] h-[18px] mr-2"
                        alt="NodeJS logo"
                    />
                ),
            },
        ],
    },
    {
        name: 'Docs',
        link: 'https://gpdocs.ekata.io',
        external: true,
        subMenu: [
            {
                name: 'Getting Started',
                link: 'https://gpdocs.ekata.io/',
                logo: '',
            },
            {
                name: 'Console How-Tos',
                link: 'https://gpdocs.ekata.io/console/',
                logo: '',
            },
            {
                name: 'Integration guides',
                link: 'https://gpdocs.ekata.io/integration/',
                logo: '',
            },
        ],
    },
    {
        name: 'Features',
        link: '#features',
        external: false,
    },
    {
        name: 'Pricing',
        link: '#pricing',
        external: false,
    },
    {
        name: 'Getting Started',
        link: '#integration',
        external: false,
    },
]
