export interface Date {
  day: number;
  month: number;
  year: number;
}

export interface Location {
  country: string;
  city: string;
}

export interface EducationLocation extends Location {
  name: string;
}

interface Base {
  name: string;
  description?: string;
}

export interface Skill extends Base {
  color: string;
  percentage: number;
  group?: string;
}

export interface Language {
  name: string;
  percent: number;
}

export interface Education extends Base {
  location: EducationLocation;
  from: number;
  to?: number;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface Work extends Base {
  from: Omit<Date, "day"> & { day?: Date["day"] };
  to: Omit<Date, "day"> & { day?: Date["day"] };
  location: Location;
}

type OverkilledSkill =
  | (Omit<Skill, "description"> & { description?: never })
  | (Omit<Skill, "group"> & { group?: never });

export interface Data {
  name: string;
  surname: string;
  description: string;
  image: string;
  phoneNumber: string;
  email: string;
  birthday: Date;
  from: Location;
  skills: Record<string, OverkilledSkill[]>;
  languages: Language[];
  education: Education[];
  socialLinks: SocialLink[];
  work: Work[];
  groups: Record<string, string>;
  i18n: Record<string, Record<string, string>>;
}
