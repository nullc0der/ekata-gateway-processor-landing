// import { ReactComponent as FacebookIcon } from 'assets/img/facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/img/twitter.svg'
import { ReactComponent as TelegramIcon } from 'assets/img/telegram.svg'
// import { ReactComponent as RedditIcon } from 'assets/img/reddit.svg'

const Footer = () => {
    return (
        <div className="bg-gray-800 flex flex-col sm:flex-row min-h-[400px] p-12 lg:p-16">
            <div className="flex flex-col sm:w-6/12">
                <div className="flex flex-row">
                    <div className="flex flex-col w-6/12">
                        <p className="text-lg text-white">Reach us at</p>
                        {/* <p className="text-sm text-white mt-2">
                            <FacebookIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                            Facebook
                        </p> */}
                        <a
                            href="https://twitter.com/ekata_io"
                            target="_blank"
                            rel="noreferrer">
                            <p className="text-sm text-white mt-2">
                                <TwitterIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                                Twitter
                            </p>
                        </a>
                        <a
                            href="https://t.me/ekata_io"
                            target="_blank"
                            rel="noreferrer">
                            <p className="text-sm text-white mt-2">
                                <TelegramIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                                Telegram
                            </p>
                        </a>

                        {/* <p className="text-sm text-white mt-2">
                            <RedditIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
                            Reddit
                        </p> */}
                    </div>
                    <div className="flex flex-col w-6/12">
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
                </div>
                <div className="flex flex-col mt-8">
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
            <div className="flex flex-col mt-8 sm:ml-8 sm:mt-0 sm:w-6/12">
                <p className="text-lg text-white mb-4">Latest twitter feed</p>
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
