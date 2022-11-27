import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'
import { Experience } from '../typing'
type Props = {
    experiences:Experience[]
}

const WorkExp = ({experiences}: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen flex flex-col  text-left max-w-full 
            px-10 justify-evenly items-center mx-auto mb-36'
        >
            <h3
                className='uppercase tracking-[20px] text-gray-400 text-2xl py-[10px] px-4 mt-20'
            >
                Experience
            </h3>
            <div className=' w-full flex space-x-5 overflow-x-scroll p-10 md:snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80'>
                {
                    experiences.map(exp=><ExpCard key={exp._id} experience={exp}/>)
                }

            </div>
        </motion.div>
    )
}

export default WorkExp