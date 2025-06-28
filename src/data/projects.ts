
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "IMDB Clone ( Simple )",
    description: "A Simple clone of the IMDB platform with browsing and search functionalities using React, and Rest API's.",
    image: "./imgs/IMDB_Clone.png",
    tags: ["React.js","Node.js","Express", "REST API", "IMDB", "JavaScript"],
    links: {
      github: "",
      live: "https://imdb-clone-front-end.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Outlanders Landing Page",
    description: "A modern, animated game landing page designed with HTML, CSS, JavaScript and GSAP, optimized for performance and design aesthetics.",
    image: "/imgs/outlander_snap.png",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5", "AOS", "Responsive Design"],
    links: {
      github: "",
      live: "https://outlanders-drab.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Pledges Student Profile Platform",
    description: "An engaging UI built from Figma to Code, showcasing responsiveness, form interactions, and clean design conversion using Tailwind CSS.",
    image: "/imgs/Pledges_AGS.png",
    tags: ["React", "Tailwind CSS", "Responsive UI", "User-Auth", "Dashboard", "MongoDB", "Express"],
    links: {
      github: "",
      live: "https://pledges-fe.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Academy Landing Page",
    description: "A clean and responsive landing page for an academy, converted from Figma design using Bootstrap5.",
    image: "/imgs/Academy_Figma_to_code_snap.png",
    tags: ["HTML", "Bootstrap5", "Figma to Code", "Landing Page", "UI-Design"],
    links: {
      github: "",
      live: "https://academy-figma-to-code-fe-project.vercel.app/",
    },
  },
  {
    id: 5,
    title: "TICER Complaint Management System",
    description: "A mini front-end system for filing and managing complaints in an organization, built using React and Vite.",
    image: "/imgs/Digital_Complaint_box_snap.png",
    tags: ["React", "Vite", "JavaScript", "Forms", "User-Role", "Dashboard", "NodeMailer"],
    links: {
      github: "",
      live: "https://complaint-site-ticer.vercel.app/",
    },
  },
  {
    id: 6,
    title: "Crypto QR Encryption Tool",
    description: "A JavaScript-based tool for encrypting text and generating QR codes, showcasing fundamental JS skills and practical utility.",
    image: "/imgs/QR_Enc_JS_Mini_Project_snpa.png",
    tags: ["JavaScript", "QR Code", "CryptoJS", "HTML", "CSS"],
    links: {
      github: "",
      live: "https://tanveerahamd.github.io/crypto.jsQrEncryption/",
    },
  },
  {
    id: 7,
    title: "TEF Clone UI Landing Page",
    description: "A UI clone of TEF website using HTML, CSS, and Bootstrap. Focuses on layout replication and basic responsive structure.",
    image: "/imgs/tefClone_png.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    links: {
      github: "",
      live: "https://tanveerahamd.github.io/tefClone/",
    },
  },
  {
    id: 8,
    title: "Al-Murtaza Petroleum Website",
    description: "Static company profile site built with HTML, CSS, and Bootstrap, featuring services, gallery, and contact form.",
    image: "/imgs/Almurtaza Petroleum snap.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    links: {
      github: "",
      live: "https://tanveerahamd.github.io/Al-Murtza_Petrolium/",
    },
  },
  {
    id: 9,
    title: "Edge Cutting Site Redesign",
    description: "A redesigned version of a commercial website using Bootstrap and modern UI styling.",
    image: "/imgs/EdgeCuttingSiteSnap.png",
    tags: ["HTML", "Bootstrap", "UI Redesign"],
    links: {
      github: "",
      live: "https://tanveerahamd.github.io/Edge-cutting-site-RedesignBS-/",
    },
  },
  {
    id: 10,
    title: "OfSpace - Simple Company Site Figma to code",
    description: "A basic business website template for a digital company with essential sections.",
    image: "/imgs/ofspace_Figma_to_code.png",
    tags: ["HTML", "CSS", "Layout"],
    links: {
      github: "",
      live: "https://tanveerahamd.github.io/ofSpace/",
    },
  },
  {
    id: 11,
    title: "Practice Layout Page",
    description: "A simple responsive practice layout using Bootstrap with cards and navigation.",
    image: "/imgs/gettingQualityEducation_snap.png",
    tags: ["HTML", "Bootstrap"],
    links: {
      github: "",
      live: "https://tanveerahamd.github.io/practice/",
    },
  },
  {
    id: 12,
    title: "TICER Google Sheet Form",
    description: "HTML form that submits responses directly to Google Sheets using Apps Script integration.",
    image: "/imgs/vr_snap.png",
    tags: ["HTML", "Form", "Google Sheets", "Google App Script"],
    links: {
      github: "",
      live: "http://tanveerahamd.github.io/TICER_VR_HTML-FORM_TO_GOOGLE-SHEET/",
    },
  },
];
