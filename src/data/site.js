// =========================================================
// All site content lives here, so copy changes never require
// touching a component. Mirrors the content of the original
// GitHub Pages site (index / about / work / projects / ...).
// =========================================================

/** Resolve a file in /public in a way that works on any GitHub Pages path. */
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Johndel L. Sialongo",
  logo: "Johndel.dev",
  tagline: "BSCS-3 Student | Programmer | Trader",
  eyebrow: ["BSCS-3", "Programmer", "Trader"],
  photo: asset("assets/profile.png"),
};

export const docs = {
  boardingHouse: asset("Docs/BoardingHouse-Manager-Overview.pdf"),
  trading: asset("Docs/Personal-Trading-Project.pdf"),
};

export const navItems = [
  { type: "link", label: "Home", to: "/", end: true },
  { type: "link", label: "About", to: "/about" },
  {
    type: "dropdown",
    id: "services",
    label: "Services",
    items: [
      { label: "Web Development", to: "/services/web" },
      { label: "Mobile App Development", to: "/services/mobile" },
      { label: "Trading Analysis & Research", to: "/services/trading" },
    ],
  },
  {
    type: "dropdown",
    id: "projects",
    label: "Projects",
    items: [
      { label: "All Projects", to: "/projects" },
      { label: "Boarding House Management System", to: "/services/mobile" },
      { label: "Personal Trading Project", to: "/services/trading" },
    ],
  },
  { type: "link", label: "Contact", to: "/contact" },
];

export const stats = [
  { num: "3rd", label: "Year, BSCS" },
  { num: "2", label: "Projects Built" },
  { num: "2", label: "Focus Areas" },
];

export const tickerPoints =
  "0,44 30,40 60,50 90,30 120,34 150,18 180,26 210,14 240,20 270,8 300,16 330,6 360,12 400,4";

export const aboutInfo = [
  { k: "Name", v: "Johndel L. Sialongo" },
  { k: "Age", v: "20 years old" },
  { k: "Course", v: "BS Computer Science" },
  { k: "Year Level", v: "BSCS–3" },
  { k: "Focus", v: "Programming & Trading" },
];

export const careerGoal =
  "To continuously improve my technical and analytical skills while developing practical projects that can solve real-world problems.";

export const interests = [
  "Software Development",
  "Web Development",
  "Price Action",
  "Market Structure",
  "Technical Analysis",
  "Problem Solving",
];

export const skills = [
  { name: "Programming", level: 78 },
  { name: "Web Development", level: 70 },
  { name: "Problem Solving", level: 82 },
  { name: "Trading", level: 65 },
  { name: "Technical Analysis", level: 62 },
  { name: "Critical Thinking", level: 80 },
  { name: "CS Fundamentals", level: 74 },
];

// ---------- Services (overview page: /services) ----------
export const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Designing and building responsive websites with clean structure, strong user experience, and practical functionality for personal brands and digital projects.",
    tech: ["HTML", "CSS", "Responsive Design", "UX/UI"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Creating mobile applications for real-world workflows, such as management systems, records tracking, and daily operations that need efficiency and reliability.",
    tech: ["Flutter", "Dart", "MySQL", "Mobile UI"],
    links: [{ label: "View Project →", href: docs.boardingHouse, external: true }],
  },
  {
    id: "trading-analysis",
    title: "Trading Analysis & Research",
    description:
      "Studying market behavior through price action, structure, and strategy research to understand trend, momentum, and decision-making under uncertainty.",
    tech: ["Market Structure", "Price Action", "Technical Analysis", "Research"],
    links: [{ label: "Learn More →", href: docs.trading, external: true }],
  },
];

// ---------- Service detail pages (/services/web, /mobile, /trading) ----------
const backToServices = { label: "Back to Services →", to: "/services" };

export const serviceDetails = {
  web: {
    pageTitle: "Web Development",
    description: "Web development services by Johndel L. Sialongo.",
    eyebrow: "Web Development",
    heading: "Clean, responsive, and practical websites.",
    intro:
      "I build websites focused on clarity, responsiveness, and a strong user experience. Each build is designed to represent a brand well and communicate value clearly.",
    card: {
      number: "01",
      title: "Service Focus",
      description:
        "Designing and building responsive websites with clean structure, strong user experience, and practical functionality for personal brands and digital projects.",
      tech: ["HTML", "CSS", "Responsive Design", "UX/UI"],
      links: [backToServices],
    },
  },
  mobile: {
    pageTitle: "Mobile App Development",
    description: "Mobile app development services by Johndel L. Sialongo.",
    eyebrow: "Mobile App Development",
    heading: "Practical mobile solutions for everyday operations.",
    intro:
      "I develop mobile applications for real-world workflows, especially systems that need to organize records, manage tasks, and improve reliability in daily use.",
    card: {
      number: "02",
      title: "Boarding House Management System",
      description:
        "An offline management system designed to manage rooms, tenants, payments, and boarding house records with a practical mobile interface.",
      tech: ["Flutter", "Dart", "MySQL", "Mobile UI"],
      links: [
        { label: "View Project →", href: docs.boardingHouse, external: true },
        backToServices,
      ],
    },
  },
  trading: {
    pageTitle: "Trading Analysis & Research",
    description: "Trading analysis and research services by Johndel L. Sialongo.",
    eyebrow: "Trading Analysis & Research",
    heading: "Market research guided by structure and discipline.",
    intro:
      "I analyze financial markets through price action, structure, and strategy research to understand trend, momentum, and decision-making in uncertain conditions.",
    card: {
      number: "03",
      title: "Trading Research Focus",
      description:
        "Studying market behavior through price action, structure, and strategy research to understand trend, momentum, and decision-making under uncertainty.",
      tech: ["Market Structure", "Price Action", "Technical Analysis", "Research"],
      links: [
        { label: "Learn More →", href: docs.trading, external: true },
        backToServices,
      ],
    },
  },
};

// ---------- Projects page (/projects) ----------
export const projects = [
  {
    title: "Boarding House Management System",
    description:
      "A mobile management system for managing rooms, tenants, payment records, and boarding operations.",
    tech: ["Flutter", "Dart", "MySQL"],
    links: [{ label: "View Project →", href: docs.boardingHouse, external: true }],
  },
  {
    title: "Personal Trading Project",
    description:
      "A research-driven trading project focused on price action, structure, and market analysis.",
    tech: ["Market Research", "Technical Analysis", "Excel"],
    links: [{ label: "Learn More →", href: docs.trading, external: true }],
  },
];

// ---------- Contact ----------
export const contactMethods = [
  {
    icon: "mail",
    label: "Email",
    value: "johndel1sialongo@gmail.com",
    href: "mailto:johndel1sialongo@gmail.com",
  },
  {
    icon: "facebook",
    label: "Facebook",
    value: "facebook.com/johndel.lamanilaosialongo",
    href: "https://www.facebook.com/johndel.lamanilaosialongo",
    external: true,
  },
  {
    icon: "phone",
    label: "Cellphone",
    value: "0953 910 5662",
    href: "tel:09539105662",
  },
];
