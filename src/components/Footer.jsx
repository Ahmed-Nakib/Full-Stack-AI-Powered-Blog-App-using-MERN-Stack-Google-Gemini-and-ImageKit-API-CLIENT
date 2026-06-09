import React from 'react'
import { footer_data } from '../assets/assets'
import { useAppContext } from '../context/AppContest'

const Footer = () => {
    const { navigate } = useAppContext()

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5'>

            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-400/30 text-gray-600'>

                {/* Brand Section */}
                <div>
                    <button
                        onClick={() => navigate('/')}
                        className='text-primary font-bold text-2xl border-b-4 border-primary cursor-pointer'
                    >
                        SIMPLEBLOG .
                    </button>

                    <p className='max-w-[410px] mt-6 text-sm leading-relaxed text-gray-500'>
                        SIMPLEBLOG is a modern blogging platform for developers to share tutorials,
                        insights, and knowledge about web development and programming.
                    </p>
                </div>

                {/* Links Section */}
                <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-8'>

                    {footer_data.map((section, index) => (
                        <div key={index}>
                            <h3 className='font-semibold text-base text-gray-300 md:mb-5 mb-2'>
                                {section.title}
                            </h3>

                            <ul className='text-sm space-y-2'>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className='hover:text-primary transition duration-200'
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* Bottom */}
            <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
                © 2025 SIMPLEBLOG by Nakib — All Rights Reserved
            </p>

        </div>
    )
}

export default Footer