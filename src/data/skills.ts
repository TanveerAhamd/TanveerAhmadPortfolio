import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["C", "C++", "JavaScript", "HTML5/CSS3", "Bootstrap 5"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Styled Components"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MongoDB Atlas", "MySQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    name: "Design & Prototyping",
    icon: Palette,
    skills: ["Figma", "Adobe Photoshop", "UI/UX Design"],
  },
];
