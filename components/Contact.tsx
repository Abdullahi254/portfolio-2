import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const Contact = (props: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:abdush504@gmail.com?subject=${data.subject}&
        body=Hi, my name is ${data.name}. ${data.message}.`
    };
    return (
        <div className='h-screen max-w-7xl mx-auto flex flex-col justify-evenly items-center mb-36 md:mb-0'>

            <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl mb-7 text-center'>
                Contact
            </h3>

            <div className=' flex flex-col justify-center items-center px-10'>
                <h4 className='text-3xl text-center font-semibold mb-4'>
                    I have got just what you need. <span className=' underline decoration-red-400'>Let&apos;s talk.</span>
                </h4>

                <div className='flex mb-4 items-center'>
                    <PhoneIcon className=' w-6 text-red-400 mr-4' />
                    <span className=' font-semibold text-xl tracking-wide'>+254711417143</span>
                </div>

                <div className='flex mb-4 items-center'>
                    <EnvelopeIcon className=' w-6 text-red-400 mr-4' />
                    <span className=' font-semibold text-xl tracking-wide'>abdush504@gmail.com</span>
                </div>

                <div className='flex mb-4 items-center'>
                    <MapPinIcon className=' w-6 text-red-400 mr-4' />
                    <span className=' font-semibold text-xl tracking-wide'>Nairobi, Kenya</span>
                </div>

                <form className='flex flex-wrap flex-col space-y-2' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-wrap justify-center space-y-1 md:space-y-0 md:space-x-1'>
                        <input {...register("name")} className='contactInput' type="text" placeholder='Name' />
                        <input {...register("email")} className='contactInput' type="email" placeholder='Email' />
                    </div>

                    <input {...register("subject")} className='contactInput' type="text" placeholder='Subject' />

                    <textarea {...register("message")} className='contactInput' placeholder='Message' />
                    <button className=' bg-red-400 py-5 px-10 rounded-md text-black font-bold' type='submit'>
                        Submit
                    </button>
                </form>

            </div>



        </div>
    )
}

export default Contact