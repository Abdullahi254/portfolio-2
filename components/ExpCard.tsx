import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../typing'
import { urlFor } from '../sanity'
type Props = {
    experience:Experience
}

const ExpCard = ({experience}: Props) => {
    return (
        <article
            className='flex flex-col rounded-lg items-center spaxe-y-7 flex-shrink-0
            w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
            opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200
            overflow-hidden overflow-y-auto'
        >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
                object-center"
                src={urlFor(experience?.companyImage).url()}
                alt="Exp img"
            />
            <div className='px-0 md:px-10  w-full flex flex-col items-center'>
                <h4 className=' text-4xl font-light uppercase'>{experience?.companyName}</h4>
                <p className=' uppercase font-bold text-2xl mt-1'>{experience?.jobTitle}</p>
                <div className=' flex space-x-2 my-2'>
                    {
                        experience?.technologies.map(tech=><Image
                            key={tech._id}
                            src={urlFor(tech?.image).url()}
                            alt="Exp img"
                            className=' w-10 h-10 rounded-full'
                            height="174"
                            width="290"
                        />)
                    }
                    
                </div>
                <p className=' uppercase py-5 text-gray-300'>
                    started: {experience?.dateStarted}___ended: {experience?.dateEnded ?? '---'}
                </p>
                <ul className=' list-disc space-y-4 ml-5 text-lg'>
                    {
                        experience?.points?.map((point,index)=><li key={index}>{point}</li>)
                    }
                </ul>   
            </div>

        </article>
    )
}

export default ExpCard