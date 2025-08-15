export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: 'hardware' | 'software' | 'web' | 'embedded';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  location: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'hardware' | 'tools' | 'frameworks';
  level: number; // 1-5
}


