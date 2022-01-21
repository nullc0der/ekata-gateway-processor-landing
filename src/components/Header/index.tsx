import { Disclosure } from '@headlessui/react'
import { XIcon, MenuIcon, CubeIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

import { menuItems } from './menu-items'

const Header = () => {
    return (
        <Disclosure
            as={'nav'}
            className={classNames('bg-gray-50', 'shadow-md')}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="absolute flex items-center left-2 sm:left-0 text-green-400">
                                <CubeIcon className="block h-6 w-6" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {menuItems.map((x, i) => (
                                        <div className="px-2 relative group">
                                            <a
                                                key={i}
                                                className="text-gray-700 group-hover:text-gray-900"
                                                href={x.link}>
                                                {x.name}
                                            </a>
                                            <div className="absolute left-0 -bottom-5 group-hover:w-full w-0 h-1 bg-green-500 rounded-t" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((x, i) => (
                                <Disclosure.Button
                                    key={i}
                                    as="a"
                                    className="text-gray-700 block px-3 py-2 rounded-md"
                                    href={x.link}>
                                    {x.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header
