import { ReactComponent as FacebookIcon } from 'assets/img/facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/img/twitter.svg'
import { ReactComponent as RedditIcon } from 'assets/img/reddit.svg'

const Footer = () => {
    return (
        <div className="bg-gray-800 flex flex-col min-h-[400px]">
            <div className="flex flex-col sm:flex-row pt-8 pl-8 sm:pl-0">
                <div className="flex flex-col mt-4 sm:mt-0 sm:w-3/12 sm:pl-16 lg:pl-32">
                    <p className="text-lg text-white">Reach us at</p>
                    <p className="text-sm text-white mt-2">
                        <FacebookIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                        Facebook
                    </p>
                    <p className="text-sm text-white mt-2">
                        <TwitterIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                        Twitter
                    </p>
                    <p className="text-sm text-white mt-2">
                        <RedditIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                        Reddit
                    </p>
                </div>
                <div className="flex flex-col mt-4 sm:mt-0 sm:w-3/12">
                    <p className="text-lg text-white">Links</p>
                    <a
                        href="https://gpdocs.ekata.io/"
                        className="text-sm text-white mt-2 hover:underline"
                        target="_blank"
                        rel="noreferrer">
                        Docs
                    </a>
                    <a
                        href="https://gpconsole.ekata.io/register"
                        className="text-sm text-white mt-2 hover:underline"
                        target="_blank"
                        rel="noreferrer">
                        Register
                    </a>
                    <a
                        href="https://gpconsole.ekata.io"
                        className="text-sm text-white mt-2 hover:underline"
                        target="_blank"
                        rel="noreferrer">
                        Console
                    </a>
                </div>
                <div className="flex flex-col mt-4 sm:mt-0 sm:w-6/12">
                    <p className="text-lg text-white">Latest twitter feed</p>
                </div>
            </div>
            <div className="flex flex-col mt-4 pl-8 pb-4 sm:mt-16 lg:mt-32 sm:pl-16 lg:pl-32">
                <p className="text-lg text-white">
                    Subscribe to our newsletter
                </p>
                <div className="flex flex-col lg:flex-row mt-2">
                    <input
                        className="bg-gray-600 rounded h-8 w-max px-2"
                        placeholder="yourname@example.com"
                    />
                    <button className="bg-gray-600 rounded h-8 w-max px-4 text-white mt-2 lg:mt-0 lg:ml-4">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer
