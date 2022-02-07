import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

import Logo from 'assets/img/logo.svg'

import { menuItems } from './menu-items'

const Header = () => {
    return (
        <Disclosure
            as={'nav'}
            className={classNames(
                'bg-gray-50',
                'shadow-md',
                'absolute',
                'inset-x-0'
            )}>
            {({ open }) => (
                <>
                    <div className="px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center py-1 px-4 rounded-md shadow-lg border-gray-400 text-green-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <MenuIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Disclosure.Button>
                            </div>
                            <img
                                src={Logo}
                                alt="logo"
                                className="h-[70px] w-[70px]"
                            />
                            <div className="hidden sm:block">
                                <div className="flex space-x-4 h-12">
                                    {menuItems.map((x, i) => (
                                        <div className="flex items-center px-2 h-full relative group cursor-pointer">
                                            {x.external ? (
                                                <a
                                                    key={i}
                                                    className="text-gray-700 group-hover:text-green-500"
                                                    href={x.link}
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    {x.name}
                                                </a>
                                            ) : (
                                                <a
                                                    key={i}
                                                    className="text-gray-700 group-hover:text-green-500"
                                                    href={x.link}>
                                                    {x.name}
                                                </a>
                                            )}
                                            <div className="absolute left-0 -bottom-4 group-hover:w-full w-0 h-1 bg-green-500 rounded-t transition-all" />
                                            <div className="absolute left-0 top-[100%] flex flex-col invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                                                {x.subMenu && (
                                                    <div className="flex flex-col bg-white min-w-[200px] mt-8 rounded-lg shadow-lg">
                                                        {x.subMenu.map(
                                                            (x, i) => (
                                                                <a
                                                                    key={i}
                                                                    className="text-sm text-gray-700 hover:text-green-500 pt-2 first:pt-4 last:pb-4 px-4 flex items-center"
                                                                    href={
                                                                        x.link
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer">
                                                                    {x.logo}
                                                                    {x.name}
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1" />
                            <button className="bg-green-500 px-6 py-2 rounded text-white hidden sm:block">
                                <a
                                    href="https://gpconsole.ekata.io"
                                    target="_blank"
                                    rel="noreferrer">
                                    Login
                                </a>
                            </button>
                        </div>
                    </div>
                    <Transition
                        as={React.Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-50 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-50 opacity-0">
                        <div className="px-2 pt-2 pb-3 absolute top-4 right-4 left-4 shadow-2xl rounded-md bg-white sm:hidden">
                            <Disclosure.Button className="absolute right-4 top-4 text-green-400">
                                <XIcon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Disclosure.Button>
                            {menuItems.map((x, i) => (
                                <div className="px-4 py-2">
                                    {x.external ? (
                                        <Disclosure.Button
                                            key={i}
                                            as="a"
                                            className="text-green-500 font-medium block rounded-md"
                                            href={x.link}
                                            target="_blank"
                                            rel="noreferrer">
                                            {x.name}
                                        </Disclosure.Button>
                                    ) : (
                                        <Disclosure.Button
                                            key={i}
                                            as="a"
                                            className="text-green-500 font-medium block rounded-md"
                                            href={x.link}>
                                            {x.name}
                                        </Disclosure.Button>
                                    )}
                                    {x.subMenu && (
                                        <div className="ml-4 mt-2">
                                            {x.subMenu.map((x, i) => (
                                                <Disclosure.Button
                                                    key={i}
                                                    as="a"
                                                    className="text-sm font-light text-gray-600 mb-2 last:mb-0 flex items-center"
                                                    href={x.link}
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    {x.logo}
                                                    {x.name}
                                                </Disclosure.Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="mx-2">
                                <button className="bg-green-500 py-2 w-full rounded text-white sm:hidden">
                                    <a
                                        href="https://gpconsole.ekata.io"
                                        target="_blank"
                                        rel="noreferrer">
                                        Login
                                    </a>
                                </button>
                            </div>
                        </div>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}

export default Header
