import React from 'react'
import Image from 'next/image'
import projectImage from '../public/Ecommerce.png'
import { motion } from 'framer-motion'
import { Project } from '../typing'
import { urlFor } from '../sanity'
type Props = {
    projects:Project[]
}

const Projects = ({projects}: Props) => {
    return (
        <motion.div
            className='relative h-screen flex flex-col text-left max-w-full justify-evenly mx-auto items-center z-0 mb-36'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            viewport={{
                once: true
            }}
        >
            <div className=' absolute w-full top-[30%] bg-red-400/10 left-0 h-[500px] -skew-y-12' />

            <div className='px-10'>
                <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl mb-7 text-center'>
                    Projects
                </h3>
            </div>

            <div className='h-1/2 w-full flex overflow-x-scroll md:overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80'>
                {
                    projects.map((prj, index) => {
                        return (
                            <div
                                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                                items-center justify-center px-10 md:px-20'
                                key={index}
                            >
                                <motion.div
                                    className=' flex flex-col justify-center items-center'
                                    initial={{
                                        y: -300,
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 1.2
                                    }}
                                    viewport={{once:true}}
                                >
                                    <Image
                                        src={urlFor(prj.image).url()}
                                        alt='project image'
                                        width={300}
                                        height={300}
                                    />
                                    <h3 className='underline font-bold text-2xl md:text-3xl mt-6'>
                                        {prj.title}
                                    </h3>
                                </motion.div>

                                <p className='tracking-wider md:text-lg text-center md:text-left max-w-3xl mx-auto'>
                                    {prj.summary}
                                </p>

                            </div>
                        )

                    })
                }
            </div>

        </motion.div>
    )
}

export default Projects