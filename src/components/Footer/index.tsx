import { ReactComponent as Logo } from 'assets/img/logo.svg'
import { profileLinks } from './projectLinks'
import { docsLinks } from './docsLinks'
import { pluginLinks } from './pluginLinks'
import { openSourceLinks } from './openSourceLinks'
import { demoLinks } from './demoLinks'
import SocialLinks from './socialLinks'

const Footer = () => {
    return (
        <div className="bg-gray-800 flex flex-col lg:flex-row min-h-[400px] p-12 lg:px-32 lg:py-16">
            <div className="flex flex-col lg:w-2/12">
                <Logo className="w-[120px] h-[120px] -ml-5" />
                <p className="text-lg font-semibold text-white">Ekata.IO</p>
                <p className="text-md font-light text-white">
                    Ekata.IO is a Fast, Secure, Easy Integrable Cryptocurrency
                    payment processor for websites and mobile applications.
                </p>
                <p className="text-sm font-extralight text-white">
                    Accept crypto in your shop without the worry of maintaining
                    large backend code or servers!! Leave that heavy lifting for
                    us.
                </p>
                <div className="flex flex-col mt-4">
                    <p className="text-sm text-white">
                        Subscribe to our newsletter
                    </p>
                    <input
                        className="bg-gray-600 rounded h-8 w-max px-2 mt-2"
                        placeholder="yourname@example.com"
                    />
                    <button className="bg-gray-600 rounded py-2 w-max px-4 text-white mt-2">
                        Subscribe <span className="material-icons">send</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-8 lg:ml-12 lg:mt-0 lg:w-6/12">
                <div className="flex flex-row flex-wrap justify-around">
                    <div className="flex flex-col mt-4 w-6/12 sm:w-4/12">
                        <p className="text-lg font-bold text-white">
                            Reach us at
                        </p>
                        <SocialLinks />
                    </div>
                    <div className="flex flex-col mt-4 w-6/12 sm:w-4/12">
                        <p className="text-lg font-bold text-white">Profile</p>
                        {profileLinks.map((x, i) => (
                            <a
                                key={i}
                                href={x.href}
                                className="text-sm text-white mt-2 hover:underline"
                                target="_blank"
                                rel="noreferrer">
                                {x.title}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col mt-4 w-6/12 sm:w-4/12">
                        <p className="text-lg font-bold text-white">Docs</p>
                        {docsLinks.map((x, i) => (
                            <a
                                key={i}
                                href={x.href}
                                className="text-sm text-white mt-2 hover:underline"
                                target="_blank"
                                rel="noreferrer">
                                {x.title}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col mt-4 w-6/12 sm:w-4/12">
                        <p className="text-lg font-bold text-white">Plugins</p>
                        {pluginLinks.map((x, i) => (
                            <a
                                key={i}
                                href={x.href}
                                className="text-sm text-white mt-2 hover:underline"
                                target="_blank"
                                rel="noreferrer">
                                {x.title}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col mt-4 w-6/12 sm:w-4/12">
                        <p className="text-lg font-bold text-white">
                            Source Codes
                        </p>
                        {openSourceLinks.map((x, i) => (
                            <a
                                key={i}
                                href={x.href}
                                className="text-sm text-white mt-2 hover:underline"
                                target="_blank"
                                rel="noreferrer">
                                {x.title}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col mt-4 w-6/12 sm:w-4/12">
                        <p className="text-lg font-bold text-white">Demo</p>
                        {demoLinks.map((x, i) => (
                            <a
                                key={i}
                                href={x.href}
                                className="text-sm text-white mt-2 hover:underline"
                                target="_blank"
                                rel="noreferrer">
                                {x.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-8 lg:ml-8 lg:mt-4 lg:w-3/12">
                <p className="text-lg font-bold text-white mb-4">
                    Latest twitter feed
                </p>
                <a
                    className="twitter-timeline"
                    data-width="500"
                    data-height="400"
                    data-dnt="true"
                    data-theme="dark"
                    href="https://twitter.com/ekata_io?ref_src=twsrc%5Etfw">
                    Tweets by ekata_io
                </a>{' '}
            </div>
        </div>
    )
}

export default Footer
