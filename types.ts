
export interface Project {
  id: string;
  title: string;
  category: string;
  images: string[]; // Changed from imageUrl to images array
  description: string;
  year: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  university: string;
  degree: string;
  email: string;
  linkedin: string;
  instagram: string;
  bio: string;
}
