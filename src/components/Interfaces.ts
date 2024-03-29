export interface ChildProps {
  feature: {
    id?: number | undefined;
    title: string;
    img: any;
    description: string;
    tag?: string[];
  };
}
export interface JobApplication {
  jobTitle: string;
  jobLocation: string;
  department: "Development" | "Design" | "Analytics";
  jobType: "Full-Time" | "Part-Time" | "Remote" | "Contract";
  responsibilities: string[];
  qualifications: string[];
  applicationDeadline: Date;
  salary?: number;
  benefits?: string[];
}
export interface PostInterface {
  id: number;
  title: string;
  img: any;
  description: string;
  date: Date;
  readingTime: number;
  category: "Design" | "Development" | "Analytics";
  author: string;
  content?: string;
}
