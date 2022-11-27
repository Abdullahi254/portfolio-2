import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typing'

type Props = {
    skills:SkillType[]
}

const Skills = ({skills}: Props) => {
    return (
        <motion.div
            className=' flex flex-col text-center md:text-left
            max-w-[2000px] px-8 min-h-screen justify-evenly mx-auto items-center mb-36'
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
            <div className='px-10'>
                <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl mb-7 text-center'>
                    Skills
                </h3>
                <h3 className=' uppercase tracking-[3px] text-gray-400 text-sm'>
                    Hover over a skill to view current proficiency
                </h3>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                {
                    skills.map((skill,index)=><Skill key={skill._id} directionLeft={index%2 ? true :false} skill={skill}/>)
                }
            </div>

        </motion.div>
    )
}

export default Skills