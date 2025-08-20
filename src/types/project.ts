import { IFeaturedProject } from "@/types/featured-project";

export interface IProject {
  title: string;
  description: string;
  chips: string[];
  websiteLink?: string;
  githubLink: string;
  featured?: IFeaturedProject;
}
