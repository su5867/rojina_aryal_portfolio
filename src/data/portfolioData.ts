import portraitImg from '../assets/images/rojina_aryal.png';
import hmsImg from '../assets/images/hms_portal_mockup_1793541204372.jpg';
import ieltsImg from '../assets/images/ielts_pte_mockup_1793541217172.jpg';
import furnitureImg from '../assets/images/furniture_store_mockup_1793541233927.jpg';
import movieImg from '../assets/images/movie_app_mockup_1793541247429.jpg';
import brewImg from '../assets/images/brew_haven_mockup_1793541260639.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  clientOrContext: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string;
  keyContributions: string[];
  visualDirection: string;
  tools: string[];
  deliverables: string[];
  stats: { label: string; value: string }[];
  interactiveType?: 'calculator' | 'queue' | 'seatmap' | 'customizer' | 'tasting';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeline: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  number: number;
  phase: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  toolsUsed: string[];
  methodologies: string[];
}

export const PERSONAL_INFO = {
  name: 'Rojina Aryal',
  taglineRole: 'UI/UX Designer | Product Designer',
  heroIntro: "Hello, I'm",
  heroQuote: "I transform complex ideas into intuitive, meaningful, and beautiful digital experiences.",
  location: 'Butwal, Rupandehi, Nepal',
  email: 'rojinaaryal8@gmail.com',
  phone: '+977 9847046132',
  linkedin: 'Rojina Aryal',
  linkedinUrl: 'https://www.linkedin.com/in/rojina-aryal',
  portraitImage: portraitImg,
  availability: 'Available for Freelance & Full-time Roles',
  aboutText: [
    "I am a passionate and detail-oriented UI/UX Designer with a strong background in computer science and digital product design. I specialize in translating complex workflows into clean, intuitive, and scalable software solutions across healthcare management systems, e-learning platforms, and e-commerce applications.",
    "My expertise includes user research, information architecture, user journey mapping, wireframing, high-fidelity prototyping, and design system creation using Figma. I enjoy collaborating with developers and product teams to create cohesive, user-centered digital experiences."
  ],
  interests: [
    'User-Centered Design',
    'Digital Product Design',
    'UX Research',
    'Creative Problem Solving',
    'Design Systems',
    'Responsive Design'
  ],
  domains: ['SaaS', 'EdTech', 'Healthcare Software Solutions']
};

export const SKILL_CATEGORIES = [
  {
    category: 'UX & Research',
    badge: 'Discovery & Structure',
    description: 'Empathetic discovery, cognitive task analysis, and clear information hierarchies.',
    skills: [
      { name: 'User Research', level: 'Core Competency', desc: 'User interviews, surveys, and behavioral observation' },
      { name: 'Information Architecture', level: 'Advanced', desc: 'Card sorting, taxanomies, and structural wireframes' },
      { name: 'Sitemap Design', level: 'Core Competency', desc: 'Multi-tiered structural maps for deep web platforms' },
      { name: 'User Flows', level: 'Advanced', desc: 'End-to-end task mapping and decision trees' },
      { name: 'Journey Mapping', level: 'Core Competency', desc: 'Emotional touchpoints and friction reduction' },
      { name: 'Usability Testing', level: 'Advanced', desc: 'Heuristic evaluation, moderated tests, and feedback synthesis' }
    ]
  },
  {
    category: 'UI & Visual Design',
    badge: 'Craft & Systems',
    description: 'Pixel-perfect typography, balanced grids, scalable component systems, and responsive layouts.',
    skills: [
      { name: 'Wireframing', level: 'Core Competency', desc: 'Low and mid-fidelity interactive wireframe scaffolding' },
      { name: 'High-Fidelity Prototyping', level: 'Advanced', desc: 'Interactive micro-interactions and realistic transitions' },
      { name: 'Design Systems', level: 'Advanced', desc: 'Variables, auto-layout, tokens, and multi-brand scaling' },
      { name: 'Reusable Component Libraries', level: 'Core Competency', desc: 'Atomic design architecture with accessible states' },
      { name: 'Responsive Web Design', level: 'Advanced', desc: 'Desktop-to-mobile adaptive layouts and fluid typography' },
      { name: 'Mobile App Design', level: 'Advanced', desc: 'iOS Human Interface Guidelines & Material 3 ergonomics' }
    ]
  },
  {
    category: 'Tools & Technologies',
    badge: 'Workflow & Tools',
    description: 'Industry-standard design suites and cross-functional technical alignment.',
    skills: [
      { name: 'Figma', level: 'Daily Driver', desc: 'Components, Auto-layout, Variants, Dev Mode, Variables' },
      { name: 'FigJam', level: 'Daily Driver', desc: 'Brainstorming, mind-mapping, and workshop facilitation' },
      { name: 'Adobe XD', level: 'Proficient', desc: 'Interactive vector wireframing and spec handover' },
      { name: 'Adobe Photoshop', level: 'Proficient', desc: 'Image manipulation, asset compositing, and visual grading' },
      { name: 'Adobe Illustrator', level: 'Proficient', desc: 'Vector iconography, logos, and custom graphic assets' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'hms-portal',
    title: 'Hospital Management System (HMS) Portal',
    category: 'UI/UX Design',
    subtitle: 'Enterprise Healthcare Web Platform for Doctors, Staff & Patients',
    description: 'Designed a role-based healthcare web application tailored for medical staff, administrative teams, and patients with high-density data and quick clinical triage.',
    image: hmsImg,
    tags: ['Healthcare', 'Enterprise SaaS', 'EHR', 'Dashboard Design', 'Design System'],
    clientOrContext: 'Synthbit Technologies Client Solution',
    duration: '3 Months',
    role: 'Lead UI/UX Designer',
    challenge: 'Hospital administrative teams and clinicians faced overwhelming cognitive load from legacy EHR systems. Disjointed appointment scheduling, delayed doctor rosters, and cluttered prescription billing resulted in administrative errors and long patient wait times.',
    solution: 'Engineered an intuitive, high-density yet legible role-based portal with unified medical records, one-click outpatient queueing, smart doctor scheduling rosters, and an error-resistant billing pipeline with instant alerts.',
    keyContributions: [
      'Electronic Health Records (EHR) with instant search, vitals trend graphs, and lab history.',
      'Outpatient appointment scheduling with real-time room and doctor availability.',
      'Doctor rosters featuring shift handover notifications and emergency on-call tags.',
      'Pharmacy billing system with drug interaction safeguards and automated invoice generation.',
      'High-density data presentation optimized for medical monitors and quick scanning.',
      'Fast navigation and error-resistant form design with contextual auto-complete.'
    ],
    visualDirection: 'Show professional hospital dashboard mockups, patient records, appointment interfaces, and medical analytics screens.',
    tools: ['Figma', 'FigJam', 'Healthcare Design System Tokens', 'Heuristic Evaluation'],
    deliverables: ['Information Architecture', 'Doctor & Nurse User Flows', 'Component Library (50+ widgets)', 'High-fidelity Prototype'],
    stats: [
      { label: 'Triage Time Saved', value: '38%' },
      { label: 'Role Contexts', value: '3 (MD, Admin, Patient)' },
      { label: 'Design System Tokens', value: '120+' }
    ],
    interactiveType: 'queue'
  },
  {
    id: 'ielts-pte-platform',
    title: 'IELTS & PTE Online Learning Platform',
    category: 'Web & Mobile UI/UX',
    subtitle: 'EdTech Test Preparation & Timed Examination Software',
    description: 'Created a comprehensive test preparation platform featuring timed mock test interfaces, band score calculators, and dedicated learning modules.',
    image: ieltsImg,
    tags: ['EdTech', 'Interactive Modules', 'Audio Waveform', 'Radar Analytics', 'Responsive Design'],
    clientOrContext: 'EdTech Client Solution',
    duration: '2.5 Months',
    role: 'UI/UX & Interaction Designer',
    challenge: 'Students preparing for IELTS and PTE struggled with anxiety in computerized test environments due to confusing question layouts, clunky audio playback in listening sections, and unclear feedback on how to improve band scores.',
    solution: 'Designed an authentic, distraction-free test simulation engine with exact countdown clocks, crystal-clear audio controls, interactive radar score breakdowns, and personalized tutor feedback dashboards.',
    keyContributions: [
      'Listening, Reading, Writing, and Speaking modules with distinct ergonomic interaction states.',
      'Timed examination interfaces mimicking real IELTS/PTE computer-delivered testing environments.',
      'Student dashboards with historic progress graphs and skill deficit diagnostics.',
      'Tutor dashboards for rubric-based essay grading and audio pronunciation review.',
      'Score-review interfaces with automated band score estimation algorithms.'
    ],
    visualDirection: 'Display modern educational dashboards, examination screens, progress charts, and student learning interfaces.',
    tools: ['Figma', 'User Persona Research', 'Figma Interactive Components', 'Accessibility Audit'],
    deliverables: ['Exam Simulator Layouts', 'Audio Player UI Set', 'Tutor Grading Matrix', 'Mobile Responsive Views'],
    stats: [
      { label: 'Mock Test Completion', value: '+44%' },
      { label: 'Skill Modules Covered', value: '4 Key Domains' },
      { label: 'Target Band Scale', value: 'IELTS 1-9 & PTE 10-90' }
    ],
    interactiveType: 'calculator'
  },
  {
    id: 'furniture-ecommerce',
    title: 'Bhattarai Furniture E-Commerce Platform',
    category: 'Web UI/UX',
    subtitle: 'Modern Scandinavian-Inspired Furniture Showcase & Cart Flow',
    description: 'Conducted user research, mapped information architecture, and designed responsive layouts with intuitive product filtering and a streamlined checkout journey.',
    image: furnitureImg,
    tags: ['E-Commerce', 'Product Filtering', 'Checkout UX', 'Visual Hierarchy', 'Brand Identity'],
    clientOrContext: 'Bhattarai Furniture Brand Initiative',
    duration: '2 Months',
    role: 'UI/UX Designer',
    challenge: 'Customers found it challenging to visualize furniture dimensions and finishes online, leading to high drop-off rates on category pages and cart abandonment during multi-step checkout.',
    solution: 'Created an airy, editorial e-commerce experience with faceted filtering (materials, dimensions, room type), finish swatches with instant rendering, and an accordion checkout drawer with zero distraction.',
    keyContributions: [
      'Conducted user research to determine key purchase decision factors (durability, wood finish, room size).',
      'Mapped intuitive information architecture with hierarchical product taxonomy.',
      'Designed responsive layouts with dynamic faceted search and filter sidebars.',
      'Engineered an interactive product detail page with material swatches and dimension guides.',
      'Streamlined checkout journey cutting friction from cart to order confirmation.'
    ],
    visualDirection: 'Show modern furniture shopping pages, product cards, filtering interfaces, and checkout screens.',
    tools: ['Figma', 'Competitive Benchmarking', 'Component Auto-Layout', 'Responsive Grids'],
    deliverables: ['Desktop & Tablet Design System', 'E-Commerce Wireframes', 'Interactive Cart Flyout', 'Checkout Usability Specs'],
    stats: [
      { label: 'Cart Drop-off Reduction', value: '27%' },
      { label: 'Responsive Breakpoints', value: 'Mobile, Tablet, Desktop' },
      { label: 'Filter Usability Index', value: '94/100' }
    ],
    interactiveType: 'customizer'
  },
  {
    id: 'movie-ticket-app',
    title: 'Online Movie Ticket Booking App',
    category: 'Mobile UI/UX',
    subtitle: 'Cinema Discovery, Interactive Seating & Digital Pass App',
    description: 'Designed mobile app user flows for cinema discovery, interactive seat selection, digital payment, and QR ticket management.',
    image: movieImg,
    tags: ['Mobile App', 'Seat Selection', 'Micro-interactions', 'Dark UI', 'iOS & Android'],
    clientOrContext: 'Mobile Entertainment Application',
    duration: '1.5 Months',
    role: 'Mobile UI/UX Designer',
    challenge: 'Existing movie ticketing apps featured cramped seat maps on mobile devices, unclear price tiers for VIP versus standard seats, and confusing digital ticket retrieval at theater turnstiles.',
    solution: 'Designed a tactile, dark-mode mobile experience with pinch-to-zoom curved theater amphitheater seating, distinct color-coded seat statuses, instant mobile wallet checkout, and offline-ready QR ticket passes.',
    keyContributions: [
      'Interactive seat selection with curved theater geometry and real-time seat lock state.',
      'Curated movie discovery feed with high-impact backdrop visuals and trailer snippets.',
      'Fast digital payment step supporting local mobile wallets and card options.',
      'Digital Apple Wallet & Google Wallet compatible QR pass with live countdown to showtime.',
      'Accessibility accommodations including high contrast seat status indicators.'
    ],
    visualDirection: 'Display smartphone mockups with cinema listings, interactive seating selection, payment screens, and digital tickets.',
    tools: ['Figma', 'Mobile Gestural Prototyping', 'Design System Variables', 'User Testing'],
    deliverables: ['iOS Screen Architecture', 'Interactive Seat Selection Prototype', 'Digital Ticket Pass Specs'],
    stats: [
      { label: 'Avg Booking Speed', value: 'Under 45s' },
      { label: 'Seat Confusion Rate', value: '< 2%' },
      { label: 'App Rating Potential', value: '4.9 ★' }
    ],
    interactiveType: 'seatmap'
  },
  {
    id: 'brew-haven-coffee',
    title: 'Brew Haven Coffee Shop Website',
    category: 'Responsive Web Design',
    subtitle: 'Boutique Artisanal Coffee Experience & Menu Showcase',
    description: 'Crafted a modern visual identity, responsive navigation, and interactive menu display to boost customer engagement.',
    image: brewImg,
    tags: ['Brand Identity', 'Responsive Web', 'Interactive Menu', 'Coffee Shop', 'Typography'],
    clientOrContext: 'Boutique Roastery & Café',
    duration: '1 Month',
    role: 'Brand & Web Designer',
    challenge: 'A specialty coffee roastery needed a digital presence that matched the sensory warmth of their brick-and-mortar cafe, while showcasing their pour-over brew methods and seasonal beans.',
    solution: 'Delivered an artisanal editorial website blending warm espresso tones, rich photography, interactive brewing guide cards (V60, Chemex, AeroPress), and online table/tasting reservations.',
    keyContributions: [
      'Crafted a distinctive visual identity, warm color harmony, and serif-modern typography pairing.',
      'Designed responsive navigation with quick access to hours, location, and drink menus.',
      'Built interactive pour-over brew guide cards with grind size and water ratio tips.',
      'Organized seasonal signature beverage showcase with tasting notes and allergen badges.',
      'Created an intuitive reservation widget for barista tasting workshops.'
    ],
    visualDirection: 'Show a premium coffee shop website with beautiful typography, menu layouts, and elegant imagery.',
    tools: ['Figma', 'Visual Identity Styling', 'Responsive Breakpoint Guides', 'Adobe Photoshop'],
    deliverables: ['Responsive Web Pages', 'Menu Component Kit', 'Interactive Brew Guide Wireframes'],
    stats: [
      { label: 'Customer Engagement', value: '+52%' },
      { label: 'Brew Guide Interactions', value: '3x Increase' },
      { label: 'Mobile Conversion', value: '91%' }
    ],
    interactiveType: 'tasting'
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'synthbit-tech',
    role: 'Product Designer',
    company: 'Synthbit Technologies Pvt. Ltd.',
    period: 'November 2025 – Present',
    type: 'Full-Time',
    location: 'Nepal',
    isCurrent: true,
    responsibilities: [
      'Design intuitive web and mobile application interfaces for software client solutions using Figma.',
      'Create comprehensive wireframes, user journeys, interactive prototypes, and production-ready UI components.',
      'Conduct user research, feedback sessions, and usability tests to identify friction points and enhance user satisfaction.',
      'Collaborate closely with front-end developers to ensure pixel-perfect implementation of layouts and design systems.'
    ],
    technologies: ['Figma', 'Design Systems', 'User Research', 'Usability Testing', 'Developer Handoff', 'Component Architecture']
  },
  {
    id: 'synthbit-intern',
    role: 'UI/UX Design Intern',
    company: 'Synthbit Group Pvt. Ltd.',
    period: 'October 2025 – December 2025',
    type: 'Internship',
    location: 'Nepal',
    isCurrent: false,
    responsibilities: [
      'Assisted senior designers in crafting wireframes and interactive prototypes for live web and mobile products.',
      'Synthesized user research findings, benchmarked competitor interfaces, and supported heuristic evaluations.',
      'Maintained UI consistency across desktop and mobile screens by updating component sets in Figma.'
    ],
    technologies: ['Figma', 'Wireframing', 'Prototyping', 'Competitor Benchmarking', 'Heuristic Evaluation']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    phase: '01. Discover',
    title: 'Understand User Needs & Business Goals',
    shortDesc: 'Deep dive into stakeholder vision, business objectives, and end-user pain points.',
    longDesc: 'I start every engagement by listening intently. Through stakeholder interviews, project scoping workshops, and competitive landscape analysis, I unpack the core business imperatives and identify what genuine user problems need solving.',
    deliverables: ['Stakeholder Brief', 'Project Scope Matrix', 'Problem Statement Canvas'],
    toolsUsed: ['FigJam', 'Notion', 'Discovery Questionnaires'],
    methodologies: ['Stakeholder Interviews', 'Competitive Audits', 'Requirement Triaging']
  },
  {
    number: 2,
    phase: '02. Research',
    title: 'Gather Insights & Analyze Behavior',
    shortDesc: 'Direct qualitative and quantitative investigations to build evidence-backed empathy.',
    longDesc: 'Assumptions are dangerous in product design. I conduct user interviews, contextual inquiries, survey analyses, and heuristic audits to reveal genuine mental models, workflow bottlenecks, and emotional friction points.',
    deliverables: ['User Personas', 'Empathy Maps', 'Research Synthesis Deck'],
    toolsUsed: ['Figma', 'Surveys', 'Heuristic Scorecards'],
    methodologies: ['Contextual Inquiry', 'Persona Modeling', 'Behavioral Clustering']
  },
  {
    number: 3,
    phase: '03. Define',
    title: 'Identify Problems & Structure Requirements',
    shortDesc: 'Synthesize messy observations into crisp information architecture and user journeys.',
    longDesc: 'Turning qualitative insights into actionable structures. I map user journey flows, draft comprehensive sitemaps, and formulate "How Might We" statements to guide every subsequent UI screen.',
    deliverables: ['Information Architecture (IA)', 'User Journey Maps', 'Core User Flow Diagrams'],
    toolsUsed: ['FigJam', 'Whimsical', 'Figma'],
    methodologies: ['Card Sorting', 'Task Analysis', 'Journey Mapping']
  },
  {
    number: 4,
    phase: '04. Ideate',
    title: 'Explore Creative Solutions & Flows',
    shortDesc: 'Rapid exploratory sketching and divergent thinking to uncover high-impact solutions.',
    longDesc: 'Before committing to pixels, I sketch multiple low-fidelity options. I test alternate navigation patterns, layout ergonomics, and mental models to arrive at the most seamless, frictionless path for the user.',
    deliverables: ['Low-Fidelity Wireframes', 'Paper Sketches', 'Layout Options Comparison'],
    toolsUsed: ['Pen & Paper', 'FigJam', 'Figma Low-Fi Kits'],
    methodologies: ['Crazy Eights', 'Design Sprints', 'Divergent Prototyping']
  },
  {
    number: 5,
    phase: '05. Design',
    title: 'Create Wireframes & High-Fidelity Interfaces',
    shortDesc: 'Crafting pixel-perfect, accessible, and scalable design system components.',
    longDesc: 'Where aesthetics meet logic. I construct comprehensive Figma design systems: typographic scales, color variables, auto-layout components, states (hover, active, disabled, error), and responsive grids for desktop and mobile.',
    deliverables: ['Figma Design System', 'High-Fidelity Screen Layouts', 'Production UI Assets'],
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    methodologies: ['Atomic Design', 'WCAG 2.1 AA Contrast', 'Component Auto-Layout']
  },
  {
    number: 6,
    phase: '06. Prototype',
    title: 'Build Interactive Prototypes',
    shortDesc: 'Transforming static screens into realistic, interactive software experiences.',
    longDesc: 'Static screens do not convey flow. I build high-fidelity interactive prototypes in Figma with micro-interactions, smart animations, modal overlays, and conditional states to replicate the actual software feel.',
    deliverables: ['Interactive Clickable Prototype', 'Micro-interaction Specs', 'Animation Curves'],
    toolsUsed: ['Figma Smart Animate', 'Framer / Prototyping'],
    methodologies: ['Interactive User Flow Testing', 'Transition Design']
  },
  {
    number: 7,
    phase: '07. Test & Refine',
    title: 'Improve Experience Through Usability Feedback',
    shortDesc: 'Validate assumptions with real users and collaborate with devs for pixel perfection.',
    longDesc: 'Design is iterative. I run moderated usability testing sessions, collect qualitative friction data, refine UI components, and maintain close partnership with frontend developers during sprint implementation.',
    deliverables: ['Usability Test Report', 'Figma Dev Mode Handoff', 'QA Design Review'],
    toolsUsed: ['Figma Dev Mode', 'Usability Testing Platforms', 'GitHub / Jira'],
    methodologies: ['Heuristic Evaluation', 'A/B Testing', 'Developer Pair Review']
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'tu-bsc-csit',
    degree: 'Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)',
    institution: 'Tribhuvan University — Bhairahawa Multiple Campus',
    timeline: 'Expected 2083 B.S.',
    location: 'Bhairahawa, Nepal',
    description: 'Pursuing an in-depth computer science curriculum bridging computing fundamentals, data structures, software engineering, human-computer interaction (HCI), and modern web architectures.',
    highlights: [
      'Strong technical grounding in software engineering principles and web fundamentals.',
      'Bridge between design aesthetics and developer execution (DOM, responsive logic, data structures).',
      'Leadership in academic tech communities and creative design workshops.'
    ]
  },
  {
    id: 'neb-plus-two',
    degree: 'Intermediate in Science (+2 Science)',
    institution: 'New Horizon College, Butwal',
    timeline: '2076 – 2077 B.S.',
    location: 'Butwal, Nepal',
    description: 'Completed rigorous science curriculum certified by National Examinations Board (NEB) with focus on Physics, Mathematics, and Computer Science.',
    highlights: [
      'National Examinations Board (NEB) certified science qualification.',
      'Analytical problem solving, mathematics, and algorithmic logic foundation.',
      'Active participation in regional science & tech exhibitions.'
    ]
  }
];
