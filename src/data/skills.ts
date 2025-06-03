
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
    skills: ["C", "C++", "JAVASCRIPT", "HTML/CSS", "Bootstrap 5"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Styled Components", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL" ],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Github"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe PhotoShop", "UI/UX Design",],
  },
];
