import { ReactComponent as TwitterIcon } from 'assets/img/twitter.svg'
import { ReactComponent as TelegramIcon } from 'assets/img/telegram.svg'

const socialLinks = [
    {
        icon: (
            <TwitterIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
        ),
        href: 'https://twitter.com/ekata_io',
        title: 'Twitter',
    },
    {
        icon: (
            <TelegramIcon className="w-[24px] h-[24px] fill-white inline mr-2" />
        ),
        href: 'https://t.me/ekata_io',
        title: ' Telegram',
    },
]

const SocialLinks = () => {
    return (
        <>
            {socialLinks.map((x, i) => (
                <a
                    key={i}
                    href={x.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center mt-2">
                    {x.icon}
                    <p className="text-sm text-white hover:underline">
                        {x.title}
                    </p>
                </a>
            ))}
        </>
    )
}

export default SocialLinks
