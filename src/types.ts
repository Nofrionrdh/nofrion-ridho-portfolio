export interface Project {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  badge: string;
  badgeIcon: string;
  github?: string;
}

export interface SkillCategory {
  faIcon: string;
  color: string;
  items: string[];
}

export interface SkillMap {
  [category: string]: SkillCategory;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  hours?: string;
  score?: string;
  certId: string;
  icon: string;
  isScore?: boolean;
  previewLink?: string;
}

export interface Education {
  school: string;
  major: string;
  description: string;
  icon: string;
  years: string;
  skills: string[];
}

export interface Contact {
  label: string;
  faIcon: string;
  value: string;
  href: string;
}
