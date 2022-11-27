interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}


export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    title: string;
    linkToBuild?: string;
    summary: string;
    technologies: Skill[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    companyName: string;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points?: string[];
    technologies: Skill[];
}


export interface Social extends SanityBody {
    _type: string;
    title: string;
    url: string;
}

