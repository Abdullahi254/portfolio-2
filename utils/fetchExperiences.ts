import { Experience } from "../typing";

export async function fetchExperiences(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
    const data = await res.json()
    const experiences:Experience[] = data.experiences;
    return experiences
}