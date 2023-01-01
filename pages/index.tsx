import type { NextPage, GetStaticProps } from "next"
import Head from 'next/head'
import Image from "next/image"
import About from "../components/About"
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkExp from '../components/WorkExp'
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { Experience, PageInfo, Project, Skill, Social } from "../typing"
import {fetchExperiences, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials} from "../services/index"
import { urlFor } from "../sanity"
import Link from "next/link"

const Home: NextPage<{
  pageInfo: PageInfo,
  experiences: Experience[],
  projects: Project[],
  skills: Skill[],
  socials: Social[]
}> = ({
  pageInfo,
  experiences,
  projects,
  skills,
  socials
}) => {
    return (
      <div className=" bg-[rgb(36,36,36)] text-white h-screen scroll-smooth md:snap-y md:snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80">
        <Head>
          <title>Abdullah&apos;s Portfolio</title>
          <meta name="description" content="Abdullahi's portfolio" />
        </Head>

        <Header socials={socials} />

        {/*Hero */}
        <section id="hero" className=" snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        {/*About */}
        <section id="about" className=" snap-center">
          <About pageInfo={pageInfo} />
        </section>

        {/*Experience*/}
        <section id="experience" className=" snap-center">
          <WorkExp experiences={experiences} />
        </section>

        {/*Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        {/*Projects*/}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        {/*Contact me */}
        <section id="contact" className=" snap-end">
          <Contact />
        </section>
        <footer className="sticky hidden md:flex justify-center bottom-2 z-10">
          <Link href="#hero">
            <div
              className=" rounded-full h-20 w-14 grayscale hover:grayscale-0 cursor-pointer"
            >
              <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Picture of the author"
                width={100}
                height={100}
                className=" rounded-full"
              />
            </div>
          </Link>
        </footer>

      </div>
    )
  }

export default Home

export const getStaticProps: GetStaticProps<{
  pageInfo: PageInfo,
  experiences: Experience[],
  projects: Project[],
  skills: Skill[],
  socials: Social[]
}> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  const skills: Skill[] = await fetchSkills()
  const experiences: Experience[] = await fetchExperiences()
  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials
    },
    revalidate: 120
  }
}