export interface UserStory {
  label: string;
  content: string;
  criteria?: string[];
}

export interface ProductEpic {
  title: string;
  description: string;
  stories: UserStory[];
}

export interface TimelineStep {
  title: string;
  description: string;
  details?: string[];
}

export interface GalleryItem {
  url?: string;
  caption?: string;
  description?: string;
  type?: 'single' | 'carousel';
  items?: {
    url: string;
    caption: string;
    description: string;
  }[];
}

export interface ImageGridItem {
  title: string;
  description: string;
  image: string;
}

export interface ProjectSection {
  type: 'default' | 'timeline' | 'gallery' | 'image-grid' | 'product_thinking' | 'insight';
  title?: string;
  content?: string | string[];
  icon?: string;
  steps?: TimelineStep[];
  images?: GalleryItem[];
  items?: ImageGridItem[];
  epics?: ProductEpic[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  meta: string; // e.g. "Done" | "On-Progress"
  tags: string[];
  summary: string;
  fullDescription: string;
  image: string;
  accent: string;
  link: string;
  tech: string[];
  duration: string;
  role: string;
  projectType: string;
  method: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  bullets: string[];
  sections: ProjectSection[];
}

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  statusBadge: string;
  university: string;
  major: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  type: 'academic' | 'organization' | 'work';
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}
