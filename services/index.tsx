import { groq } from "next-sanity"
import { sanityClient } from '../sanity'
import { Experience, PageInfo, Project, Skill, Social } from '../typing'




export const fetchExperiences = async (): Promise<Experience[]> => {
    const query = groq`
    *[_type == "experience"]{
    ...,
    technologies[]->
    }
    `
    const experiences: Experience[] = await sanityClient.fetch(query)
    return experiences
}
export const fetchProjects = async (): Promise<Project[]> => {
    const query = groq`
    *[_type == "project"]{
    ...,
    technologies[]->
    }
    `
    const projects: Project[] = await sanityClient.fetch(query)
    return projects
}
export const fetchSkills = async (): Promise<Skill[]> => {
    const query = groq`*[_type == "skill"]`
    const skills: Skill[] = await sanityClient.fetch(query)
    return skills
}
export const fetchSocials = async (): Promise<Social[]> => {
    const query = groq`*[_type == "social"]`
    const socials: Social[] = await sanityClient.fetch(query)
    return socials
}
export const fetchPageInfo = async (): Promise<PageInfo> => {
    const query = groq`*[_type=="pageInfo"][0]`
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    return pageInfo
}
