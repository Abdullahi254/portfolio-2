import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../typing'
import { urlFor } from '../sanity'

type Props = {
  pageInfo:PageInfo
}

function Hero({pageInfo }: Props) {
  const [text] = useTypewriter({
    words: pageInfo?.name.split(','),
    loop: 0,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mb-[300px]'>
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Picture of the author"
        width={100}
        height={100}
        className=" rounded-full"
        priority
      />
      <div className='z-20 px-2'>
        <h2 className=' text-sm text-gray-400 uppercase pb-10 tracking-[15px]'>{pageInfo.role}</h2>
        <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3 '>{text}</span>
          <Cursor cursorColor='#f44336' />
        </h1>
        <div className='py-5 mt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Hero