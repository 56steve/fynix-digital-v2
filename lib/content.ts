export type Act = {
  slug: "ui-ux" | "development" | "seo" | "lead-generation";
  num: string;
  title: string;
  subtitle: string;
  headline: string;
  content: string;
  bullets: string;
  deliverables: string[];
};

export const acts: Act[] = [
  {
    slug: "ui-ux",
    num: "01",
    title: "UI/UX",
    subtitle: "Act 1: Perception Shapes Trust",
    headline:
      "Your website and mobile app are shaping your cybersecurity brand before your team ever gets the chance.",
    content:
      "A potential customer exploring cybersecurity solutions lands on your website knowing almost nothing about your business. So they look for signals. Signals that tell them they're in the right place. Signals that suggest you understand their challenges. Signals that make them want to learn more.",
    bullets:
      "When they get those signals, they stay, explore, and move forward. Those decisions aren't driven by what you say. They're driven by how the experience feels. We build thoughtful UX and purposeful design to help you earn your customers' trust before a conversation ever begins.",
    deliverables: [
      "User Research",
      "Wireframes",
      "User Flows",
      "Website Design",
      "Landing Pages",
      "Conversion Optimization",
    ],
  },
  {
    slug: "development",
    num: "02",
    title: "Development",
    subtitle: "Act 2: Performance Keeps the Promise",
    headline:
      "Your website and mobile app made the right first impression. Now they have to keep their promise.",
    content:
      "A visitor decides to stay. They start exploring. They click deeper into your website, expecting the same confidence they felt moments earlier. But trust is fragile. Slow load times. Broken experiences. Clunky interactions. Technology that gets in the way instead of helping people move forward.",
    bullets:
      "The confidence they felt moments ago can quickly turn into hesitation. And hesitation is often all it takes for someone to leave. We build cybersecurity websites that keep the promise made by the design, creating experiences that feel effortless from the first click to the first conversation.",
    deliverables: [
      "Custom Websites",
      "Mobile APPs",
      "CMS Development",
      "Integrations",
      "Performance Optimization",
      "Maintenance",
      "Scalability",
    ],
  },
  {
    slug: "seo",
    num: "03",
    title: "SEO / AEO",
    subtitle: "Act 3: Visibility Creates Opportunity",
    headline: "The best website in your industry is useless if nobody can find it.",
    content:
      "Trust has been earned. The experience delivers on its promise. But conversations can't begin if nobody knows you exist. In cybersecurity, visibility is highly competitive and trust-driven. Every day, people search for answers to the exact problems you solve.",
    bullets:
      "When you're visible, those searches become opportunities. When you're not, they become someone else's. We help businesses increase visibility through technical SEO, content strategy, and content creation, making it easier for the right people to discover them at the right time.",
    deliverables: [
      "Technical SEO",
      "Keyword Research",
      "Content Strategy",
      "Content Writing",
      "On-Page SEO",
      "Authority Building",
      "LLM SEO",
      "LLM Visibility",
    ],
  },
  {
    slug: "lead-generation",
    num: "04",
    title: "Lead Generation",
    subtitle: "Act 4: Converting Interest into Conversation",
    headline: "Traffic is not the finish line.",
    content:
      "The right people find you. They explore your website. They consume your content. Then nothing happens. For cybersecurity companies, we help turn that attention into conversations worth having.",
    bullets:
      "Generating predictable pipeline requires aligning user intent with clear conversion pathways. We implement systematic outreach, high-intent lead magnets, and bespoke pipeline tracking built specifically for high-ticket cybersecurity buying groups.",
    deliverables: [
      "ICP Research",
      "Outreach Campaigns",
      "Landing Pages",
      "Demand Generation",
      "Lead Qualification",
      "Pipeline Growth",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Why isn't my website generating leads or conversations?",
    a: "A website often struggles when it is built to “present” rather than “guide.” Visitors land with intent, but if the experience doesn't shape that intent into clarity, they exit. Weak messaging hierarchy, unclear next steps, and low trust signals usually break the flow between interest and action.",
  },
  {
    q: "Why should UI/UX, development, and SEO/AEO be handled by one team?",
    a: "These functions work as one connected growth system. UX shapes perception, development controls performance, SEO drives visibility, and lead generation defines conversion pathways. When separated, each improves a part. When unified, the entire journey moves toward measurable outcomes.",
  },
  {
    q: "How do website design and development affect SEO?",
    a: "Design and development directly shape how easily users and search engines understand a website. Structure, speed, and clarity influence rankings, engagement, and navigation flow. When these elements are aligned, visibility improves, and users are more likely to move into enquiry actions.",
  },
  {
    q: "Why does Fynix focus on cybersecurity companies for lead generation?",
    a: "Since its inception, Fynix has worked extensively with cybersecurity companies. This specialisation has given us a deep understanding of cybersecurity buyers, sales cycles, trust dynamics, and market challenges. As a result, we are able to develop more precise lead generation strategies and deliver stronger outcomes for cybersecurity-focused teams.",
  },
  {
    q: "How long does it take to see results from a new website and SEO?",
    a: "Initial improvements often appear through better UX clarity and performance. Search visibility builds gradually as pages get indexed and authority develops. Over time, this compounds into steady traffic growth and more consistent lead opportunities.",
  },
];

export const caseStudyCategories = [
  "All",
  "Branding",
  "UI/UX Design",
  "SEO",
  "Social Media",
  "Video Editing",
] as const;

export type CaseStudyCategory = (typeof caseStudyCategories)[number];

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  description: string;
  tags: Exclude<CaseStudyCategory, "All">[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "eventus",
    name: "Eventus Platform",
    url: "https://eventussecurity.com/",
    domain: "eventussecurity.com",
    description: "AI-powered threat detection and security platform",
    tags: ["SEO", "UI/UX Design", "Video Editing", "Social Media"],
    image: "/case-studies/eventus.webp",
  },
  {
    slug: "cleanstart",
    name: "CleanStart",
    url: "https://cleanstart.com/",
    domain: "cleanstart.com",
    description: "Easy to start platform with seamless integration",
    tags: ["Branding", "UI/UX Design", "Video Editing", "Social Media"],
    image: "/case-studies/cleanstart.webp",
  },
  {
    slug: "photonmatters",
    name: "PhotonMatters",
    url: "https://photonmatters.com/",
    domain: "photonmatters.com",
    description: "Modern photography portfolio platform",
    tags: ["UI/UX Design"],
    image: "/case-studies/photonmatters.webp",
  },
  {
    slug: "alsonotify",
    name: "Alsonotify",
    url: "https://alsonotify.com/",
    domain: "alsonotify.com",
    description: "Customer support and ticketing system",
    tags: ["UI/UX Design", "Branding"],
    image: "/case-studies/alsonotify.webp",
  },
  {
    slug: "payweek",
    name: "Payweek",
    url: "https://payweek.com/",
    domain: "payweek.com",
    description: "Customer support and ticketing system",
    tags: ["UI/UX Design"],
    image: "/case-studies/payweek.webp",
  },
  {
    slug: "support305",
    name: "Support305",
    url: "https://support305.com/",
    domain: "support305.com",
    description: "Customer support and ticketing system",
    tags: ["UI/UX Design"],
    image: "/case-studies/support305.webp",
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "Philosophy" },
];

export const footerNav = [
  ...nav,
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export type Client = { name: string; logo: string };

export const clients: Client[] = [
  { name: "CleanStart", logo: "/clients/cleanstart.webp" },
  { name: "Counterpoint Risk", logo: "/clients/counterpoint-risk.webp" },
  { name: "Creative Mind Technologies", logo: "/clients/creative-mind-technologies.webp" },
  { name: "Currycook", logo: "/clients/currycook.webp" },
  { name: "Eventus", logo: "/clients/eventus.webp" },
  { name: "EZIGOLD", logo: "/clients/ezi-gold.webp" },
  { name: "North Star", logo: "/clients/north-star.webp" },
  { name: "Payweek", logo: "/clients/payweek.webp" },
  { name: "PhotonMatters", logo: "/clients/photonmatters.webp" },
  { name: "Pioneer Metals", logo: "/clients/pioneer-metals.webp" },
  { name: "Support305", logo: "/clients/support305.webp" },
  { name: "The Alfeco Foundation", logo: "/clients/the-alfeco-foundation.webp" },
  { name: "Truenutri", logo: "/clients/truenutri.webp" },
  { name: "Uplyift", logo: "/clients/uplyift.webp" },
  { name: "Veer Aluminium", logo: "/clients/veer-alimunium.webp" },
  { name: "Veer Energy", logo: "/clients/veer-energy.webp" },
  { name: "Veer Steel Mile", logo: "/clients/veer-steel-mile.webp" },
];

export type Stat = { value: string; label: string; sub?: string };

export const stats: Stat[] = [
  { value: "40+", label: "Cybersecurity engagements", sub: "Since 2016" },
  { value: "2.4×", label: "Average pipeline lift", sub: "Within 6 months of launch" },
  { value: "9 yrs", label: "Focused on cybersecurity", sub: "One sector, deep patterns" },
  { value: "<24h", label: "Response to inbound briefs", sub: "Business days" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    company: "CleanStart",
    logo: "/clients/cleanstart-icon.webp",
    quote:
      "The Fynix Digital team feels more like part of CleanStart than an outside agency. They've helped us shape our website, design social media creatives, and create impactful presentations and datasheets. Always creative, always committed!",
    name: "Pallavi Puri",
    role: "Marketing Specialist",
  },
  {
    company: "PhotonMatters",
    logo: "/clients/photonmatters-icon.webp",
    quote:
      "Excellent work by the Fynix Digital team in putting together a great website in a very short time.",
    name: "Tahseen Jamal",
    role: "Founder & CEO, PhotonMatters",
  },
  {
    company: "Eventus",
    logo: "/clients/eventus-icon.webp",
    quote:
      "Fynix Digital has been our go-to digital marketing agency for over two years now. Brilliant execution, stunning design, and reliable delivery!",
    name: "Sanjay Khera",
    role: "Head of Marketing, Eventus",
  },
  {
    company: "Currycook",
    logo: "/clients/currycook.webp",
    quote:
      "They understood our needs and delivered a fully customized website with great creatives. Highly recommended!",
    name: "Mitesh Patel",
    role: "Founder, Currycook",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  duration: string;
  summary: string;
  activities: string[];
  deliverable: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    duration: "Week 1",
    summary:
      "We start by understanding your buyer, your pipeline, and the shape of the conversation you want the website to have with them.",
    activities: [
      "Stakeholder interviews across product, sales, and marketing",
      "Buyer and analyst research within your category",
      "Analytics, CRM, and search performance audit",
    ],
    deliverable: "Discovery brief with prioritised opportunities",
  },
  {
    num: "02",
    title: "Diagnose",
    duration: "Week 2",
    summary:
      "We separate what is real from what is assumed: where trust breaks, where speed leaks, where visibility disappears, where intent goes cold.",
    activities: [
      "UX and messaging audit against buyer intent",
      "Technical and Core Web Vitals audit",
      "SEO/AEO and keyword landscape analysis",
    ],
    deliverable: "Diagnosis report with a ranked action list",
  },
  {
    num: "03",
    title: "Design",
    duration: "Weeks 3–5",
    summary:
      "We design the experience around your buyer's questions, not around a design opinion. Each screen defends itself against a business outcome.",
    activities: [
      "Information architecture and journey mapping",
      "High-fidelity interface design and prototypes",
      "Copy direction aligned to search and buying intent",
    ],
    deliverable: "Design system and interactive prototype",
  },
  {
    num: "04",
    title: "Build",
    duration: "Weeks 5–9",
    summary:
      "We ship the site on a modern component-driven stack, with Core Web Vitals treated as a hard gate before anything leaves staging.",
    activities: [
      "Custom front-end build on a headless stack",
      "CMS, CRM, and analytics integrations",
      "Accessibility and performance QA against WCAG AA",
    ],
    deliverable: "Production-ready website and content system",
  },
  {
    num: "05",
    title: "Launch",
    duration: "Week 10",
    summary:
      "Launch is a handover, not a farewell. We migrate carefully, monitor closely, and stay reachable during the first days that matter most.",
    activities: [
      "Redirect map, migration, and SEO safety net",
      "Analytics, conversion tracking, and dashboards",
      "Post-launch monitoring and rapid-fix window",
    ],
    deliverable: "Live website with launch report",
  },
  {
    num: "06",
    title: "Grow",
    duration: "Ongoing",
    summary:
      "The website becomes a system that keeps learning. We run a monthly cycle of experiments, content, and outbound aligned to pipeline outcomes.",
    activities: [
      "Monthly experiment and content roadmap",
      "SEO/AEO authority building and outreach",
      "Pipeline reporting tied to revenue outcomes",
    ],
    deliverable: "Ongoing growth partnership with monthly review",
  },
];

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    initials: "SA",
    name: "Strategy Lead",
    role: "Discovery & buyer research",
    focus:
      "Runs the first three weeks: understands your ICP, audits the funnel, and defines what the website needs to prove.",
  },
  {
    initials: "DL",
    name: "Design Lead",
    role: "UX, interface, systems",
    focus:
      "Owns how the experience feels. Turns buyer intent into interfaces buyers actually complete conversations with.",
  },
  {
    initials: "EL",
    name: "Engineering Lead",
    role: "Front-end, performance, integrations",
    focus:
      "Builds the site to enterprise standards: accessible, fast, secure, and easy for your team to keep growing.",
  },
  {
    initials: "GL",
    name: "Growth Lead",
    role: "SEO/AEO, content, demand",
    focus:
      "Turns visibility into pipeline. Runs the ongoing cycle of search, content, and outbound after launch.",
  },
];

export type EngagementModel = {
  name: string;
  price: string;
  duration: string;
  bestFor: string;
  scope: string[];
  featured?: boolean;
};

export const engagementModels: EngagementModel[] = [
  {
    name: "Discovery Sprint",
    price: "Fixed fee",
    duration: "2–3 weeks",
    bestFor: "Teams who suspect a problem but need it named precisely.",
    scope: [
      "Buyer, funnel, and analytics review",
      "UX, technical, and SEO/AEO audit",
      "Prioritised action list with sizing",
    ],
  },
  {
    name: "Full Engagement",
    price: "Project fee",
    duration: "10–14 weeks",
    bestFor: "Teams ready to rebuild the website as a growth system.",
    scope: [
      "Discovery, design, build, launch",
      "SEO/AEO strategy and content system",
      "Post-launch monitoring and handover",
    ],
    featured: true,
  },
  {
    name: "Growth Retainer",
    price: "Monthly",
    duration: "6-month minimum",
    bestFor: "Teams with a website in place who need pipeline outcomes.",
    scope: [
      "Monthly experiment and content roadmap",
      "SEO/AEO authority building",
      "Pipeline reporting and QBRs",
    ],
  },
];

export const siteConfig = {
  name: "Fynix",
  url: "https://fynix.digital",
  email: "hello@fynix.digital",
  locations: "London & Bengaluru",
  description:
    "We help cybersecurity companies transform their websites into growth engines through UI/UX, technical excellence, AI-ready SEO, and predictable lead generation.",
};
