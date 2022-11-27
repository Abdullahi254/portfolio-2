import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import { Social } from '../typing';
import { useRouter } from 'next/router';

type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    const router = useRouter()
    return (
        <header className='sticky top-0 flex items-start 
            justify-between max-w-7xl mx-auto z-20
            xl:items-center p-5 md:px-10 xl:px-5'>
            <motion.div
                className='flex items-center'
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                {
                    socials.map((social) => <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                    />)
                }
            </motion.div>

            <motion.div
                className=' cursor-pointer flex justify-center items-center'
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                onClick={()=>router.push("#contact")}
            >
                <SocialIcon
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className=' uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get in touch
                </p>
            </motion.div>
        </header>
    )
}

export default Header