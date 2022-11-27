import React from 'react'
import { motion } from 'framer-motion';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';


const About: React.FunctionComponent<{pageInfo:PageInfo}> = ({pageInfo }) => {
    return (
        <div className='h-screen mb-96 flex flex-col justify-evenly items-center px-4'>
            <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl py-[10px] mt-48'>About</h3>
            <motion.div
                className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl 
            px-10 justify-center items-center mx-auto '
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >


                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}

                    src={urlFor(pageInfo?.profilePic).url()}
                    alt='My Image'
                    className='md:mb-0 flex-shrink-0 w-56 h-58 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[640px]'
                />

                <div className=' space-y-10 px-0 md:px-10'>
                    <h4 className='text-4xl font-semibold'>
                        Here is a little  <span className='underline decoration-red-500'>background: </span>
                    </h4>

                    <p className='tracking-widest'>
                        {pageInfo?.backgroundInformation}
                    </p>
                </div>

            </motion.div>
        </div>

    )
}

export default About