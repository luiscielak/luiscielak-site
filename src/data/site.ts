
export const siteUrl = "https://luiscielak.com";
export const siteTitle = "Luis Cielak – Lead Product Designer";
export const siteDescription = "Turning complexity into clarity. UX, UXR, UI, DataViz.";
export const resumeUrl = "https://www.dropbox.com/scl/fi/fc4jvqe5lenqesndaphqs/lcielak_resume.pdf?rlkey=zkamom1bjd4t4vjq0i0ibjuvd&e=1&st=710eqeqc&dl=1";

export const services = [
  {
    title: "User Experience",
    copy: "I design with empathy and clarity—creating seamless, human-centered experiences that make technology feel intuitive, accessible, and genuinely helpful for the people who use it daily.",
  },
  {
    title: "Interface Design",
    copy: "I build clean, practical interfaces that balance structure, rhythm, and personality—bringing clarity to complex systems and delight to everyday interactions through intentional, beautiful design.",
  },
  {
    title: "User Research",
    copy: "I uncover user needs through interviews, testing, and journey mapping—translating insights into decisions that reduce risk, improve usability, and ensure products solve the right problems.",
  },
  {
    title: "Data Visualization",
    copy: "I turn complex data into clear, actionable stories—designing dashboards, visual systems, and reports that reveal patterns, highlight insights, and support faster, more confident decisions.",
  },
];

export const skillTags = [
  "Wireframing & Prototyping",
  "Responsive UI Design",
  "Interaction Design",
  "Information Architecture",
  "Visual Hierarchy",
  "Journey Mapping",
  "User Interviews",
  "Design Systems",
  "Usability Testing",
  "Dashboard Design",
  "Data Storytelling",
  "Accessibility",
  "Design Thinking",
];

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  cover: string;
  accent: string;
  stats: { value: string; label: string }[];
  overview: string[];
  challengeIntro: string;
  challenge: string[];
  solution: string[];
  solutionIntro: string;
  research: string;
  methods: string[];
  findings: string[];
  quotes: { name: string; role: string; quote: string }[];
  workflow: string;
  decisionIntro: string;
  decisions: string[];
  decisionNote: string;
  outcome: string;
  impact: string[];
  outcomeQuote: { name: string; role: string; quote: string };
  reflection: string;
  images: string[];
  audio: string;
  audioDuration: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-pmi-da",
    title: "Streamlining Certification: A Mobile-First Learning Journey",
    eyebrow: "🔖 Redesigned a global certification platform to simplify learning and boost completion rates.",
    summary: "Led the redesign of a certification experience platform, transforming a fragmented process into a streamlined, mobile-first journey. Reduced learner drop-offs by 18% and accelerated certification timelines by 23%.",
    cover: "/assets/project-pmi-da.jpg",
    accent: "#F5A623",
    stats: [
      { value: "$2.8M", label: "Revenue Growth" },
      { value: "18%", label: "Reduction in Drop-offs" },
    ],
    overview: ["A global certification body served over 250,000 learners but its digital experience was fragmented, leaving users frustrated and support teams overwhelmed. I led the UX overhaul to deliver a cohesive, guided certification journey."],
    challengeIntro: "The process was disjointed and confusing:",
    challenge: ["No Clear Guidance: Learners didn’t know where to start.", "High Drop-Offs: 40% of users abandoned midway.", "Disconnected Systems: Frustrating system switching.", "Low Trust: International learners were unsure of the right path."],
    solutionIntro: "We redesigned the experience with:",
    solution: ["Unified certification pathways.", "Guided dashboards and visual progress tracking.", "Embedded contextual support.", "Fully mobile-responsive design."],
    research: "Our research focused on understanding how working professionals engage with professional development platforms and identifying key barriers to certification completion. Through a mixed-methods approach combining quantitative analytics and qualitative user research, we uncovered critical insights that shaped our design strategy.",
    methods: ["In-depth interviews and usability testing with 37 platform users", "Analysis of learning analytics from 500+ sessions and heatmap tracking", "Survey responses from 100+ global learners and support ticket review"],
    findings: ["72% of learning attempts occurred outside work hours, with 64% on mobile devices", "Navigation confusion caused 45% of support tickets and increased completion time by 2.5 months", "Multi-certification learners had 2.3x higher drop-off rates due to unclear pathways"],
    quotes: [
      { name: "Avery C.", role: "First-Time Learner", quote: "I had no idea where to start. It felt like I had to figure it out on my own." },
      { name: "Skyler R.", role: "Returning Member", quote: "I just wanted a roadmap: where I am now, what’s next, and how far I’ve come." },
    ],
    workflow: "Discovery → Sign Up → Enrollment → Exam → Credentialing",
    decisionIntro: "A look at the key design moves that clarified complex flows and improved learner confidence.",
    decisions: ["📊 Unified dashboard", "🗺️ Visual journey map", "🛠️ Contextual tooltips + guidance", "📱 Mobile-first layouts"],
    decisionNote: "Iterated to simplify language, highlight milestones, and optimize the dashboard.",
    outcome: "The final solution included a guided certification experience, progress visibility, contextual help, and a responsive interface built to support global learners across devices.",
    impact: ["⏱️ 23% Faster Certification Timelines", "📉 18% Reduction in Support Tickets", "📈 +12-Point Satisfaction Score Boost"],
    outcomeQuote: { name: "Casey B.", role: "Learner Feedback", quote: "This new platform is exactly what I needed—everything is clear now, and it feels so much easier to keep going." },
    reflection: "Clear guidance and embedded help boosted user confidence and outcomes. Earlier international user testing would have strengthened localization.",
    images: ["/assets/pmi-da-research.png", "/assets/pmi-da-design.png", "/assets/pmi-da-outcome.png"],
    audio: "/audio/pmi-da-highlights.mp3",
    audioDuration: "1:57",
  },
  {
    slug: "case-study-pmi-pp",
    title: "Transforming Enterprise Security: From Fraud to Revenue Growth",
    eyebrow: "🔐 An enterprise authentication redesign that eliminated fraud while unlocking millions in new revenue opportunities.",
    summary: "Led the strategic transformation of an enterprise learning platform's security architecture, converting a $650K fraud problem into a $3.75M business opportunity. Achieved zero fraud incidents while generating $3.1M in first-year revenue through cross-functional stakeholder alignment.",
    cover: "/assets/project-pmi-pp.png",
    accent: "#57B8FF",
    stats: [
      { value: "$3.75M", label: "Total Business Impact" },
      { value: "575%", label: "ROI Achievement" },
    ],
    overview: ["An enterprise learning platform was losing $650K annually to promo code fraud while missing millions in Fortune 500 revenue. The consumer-focused system lacked the security, compliance, and administrative controls enterprise clients demanded. Research revealed our B2C discount model was incompatible with enterprise procurement processes. The challenge: align Legal (security), Sales (growth), and IT (simplicity) while transforming a cost center into a profit driver."],
    challengeIntro: "The existing system was fundamentally broken:",
    challenge: ["Massive Fraud: 92% of promotional code usage was unauthorized, $650,000 lost annually to code abuse.", "Security Vulnerabilities: Codes leaked weekly on Reddit and social platforms.", "Poor Visibility: Organizations had no insight into employee purchasing patterns.", "Support Overload: Teams overwhelmed with fraud-related tickets."],
    solutionIntro: "We created an enterprise-ready access model with:",
    solution: ["Secure single sign-on through corporate email domains", "Custom approval workflows and usage monitoring", "Personalized product catalogs with automatic pricing", "Automated provisioning for enterprise teams", "Streamlined checkout with reimbursement documentation"],
    research: "Conducted 15 strategic stakeholder interviews across Legal, Sales, IT, and Fortune 500 procurement teams to understand the intersection of security requirements, business growth needs, and technical constraints. The research approach focused on identifying systemic issues beyond the surface-level fraud problem.",
    methods: ["15 in-depth stakeholder interviews across Sales Leadership, Operations Teams, Compliance Officers, and Fortune 500 Procurement teams.", "Research into revenue impact, fraud management processes, security requirements, and enterprise buying behaviors.", "Collaborative synthesis workshops to identify systemic patterns and strategic opportunities."],
    findings: ["The B2C promotional code system was fundamentally incompatible with enterprise procurement needs and security standards.", "Enterprise clients required domain-based authentication, administrative controls, and detailed audit trails.", "Technical limitations were costing direct fraud losses and millions in unrealized enterprise revenue opportunities."],
    quotes: [
      { name: "Michael T.", role: "Client Success Manager", quote: "The stakeholder interviews were pivotal in uncovering the systemic issues that were not immediately apparent. They provided the clarity needed to align our security and business growth strategies." },
      { name: "Sarah W.", role: "Director of Enterprise Sales", quote: "Understanding the unique needs of our enterprise clients through in-depth research allowed us to tailor our solutions effectively, turning a significant challenge into a competitive advantage." },
    ],
    workflow: "Enterprise Discovery → Domain Authentication → Role Assignment → Platform Access → Usage Monitoring",
    decisionIntro: "Instead of asking “How do we fix promo codes?” I reframed the challenge to “What’s preventing us from scaling with enterprise clients?” This shift in perspective revealed that our B2C discount model was fundamentally incompatible with enterprise procurement processes and compliance requirements.",
    decisions: ["🔐 Domain-Based Authentication Over Manual Verification", "👥 Role-Based Access Controls Over Fixed Permissions", "📊 Real-Time Usage Analytics Over Periodic Reports", "🌐 Regional Customization Over Global Standardization"],
    decisionNote: "Together, these decisions created a secure, scalable platform that addressed enterprise needs while eliminating fraud vulnerabilities and enabling new revenue opportunities.",
    outcome: "The transformation of the enterprise learning platform's security architecture resulted in significant business and operational impacts. The initiative eliminated fraud, unlocked new revenue opportunities, and set a foundation for future growth.",
    impact: ["🛡️ Fraud losses were completely eradicated, saving $650K annually.", "💰 New enterprise capabilities generated $3.1M in revenue in the first year.", "📈 The project achieved a 575% ROI."],
    outcomeQuote: { name: "Laura M.", role: "Vice President of Operations", quote: "The transformation not only eradicated fraud but also streamlined our operations, leading to a substantial reduction in support overhead and a significant boost in client satisfaction." },
    reflection: "Every design decision must be measured against revenue generation, operational efficiency, and user adoption metrics. Enterprise UX leadership requires connecting user experience improvements directly to business outcomes and stakeholder value rather than focusing solely on interface aesthetics or usability metrics.",
    images: ["/assets/pmi-pp-research.png", "/assets/pmi-pp-design.mp4", "/assets/pmi-pp-outcome.png"],
    audio: "/audio/pmi-pp-highlights.mp3",
    audioDuration: "1:44",
  },
  {
    slug: "case-study-mss",
    title: "Redefining Field Dispatch: Mobile-First & Real-Time",
    eyebrow: "🚚 A mobile-first dispatch system that slashed paperwork and sped up operations.",
    summary: "Led the redesign of a mobile-first dispatch platform that transformed paper-based workflows into a real-time digital system. Achieved 95% mobile adoption in 30 days and reduced dispatch-to-completion time by 40%.",
    cover: "/assets/project-mss.png",
    accent: "#8CE99A",
    stats: [
      { value: "$2.1M", label: "Annual Cost Savings" },
      { value: "47%", label: "Faster Dispatch Times" },
    ],
    overview: ["A nationwide logistics company was coordinating over 100,000 specialized moves annually using outdated methods—paper schedules, Excel sheets, and PDF forms. Technicians in the field lacked a cohesive digital tool, leading to inefficiencies and miscommunication across teams.", "I led the UX design of a mobile-first dispatch platform that modernized operations, offering real-time visibility and intuitive tools tailored for technicians and dispatchers alike."],
    challengeIntro: "The dispatch process was fragmented and manual, causing frequent delays and errors:",
    challenge: ["Paperwork Overload: Manual job tracking increased error rates.", "No Real-Time Updates: Dispatchers lacked visibility into field progress.", "Poor Usability: Tools weren’t optimized for mobile use in the field."],
    solutionIntro: "We delivered a mobile-first operating layer with:",
    solution: ["Centralized job information and status tracking", "Offline functionality and mobile-first design.", "Real-time job assignment, tracking, and rerouting."],
    research: "We built a digital dispatch platform optimized for field use and HQ monitoring, grounding design decisions in field research and operational constraints.",
    methods: ["Shadowed dispatchers and rode along with technicians", "10+ contextual interviews"],
    findings: ["Spotty Connectivity: Offline access was critical", "Simplicity First: Field techs wanted less clutter, clearer visibility", "Visibility Gaps: Dispatchers needed real-time insights"],
    quotes: [
      { name: "Quinn D.", role: "Dispatcher", quote: "We lose track of where each tech is at during the day. Once they’re out, we’re basically blind." },
      { name: "Taylor S.", role: "Field Technician", quote: "I don’t need a ton of features—just my list of jobs and a quick way to mark them done." },
    ],
    workflow: "Dispatch → Technician View → Progress → Completion Sync",
    decisionIntro: "A look at the pivotal design decisions that shaped the experience, balancing real-world constraints with user needs.",
    decisions: ["📅 Simplified daily scheduling", "🗂️ Job cards with detailed instructions", "👆 One-tap status updates", "📈 Dispatcher dashboard for live monitoring"],
    decisionNote: "Usability tests led to offline sync, larger tap targets, and UI refinements.",
    outcome: "The final solution included a mobile interface for technicians to track jobs, a real-time console for dispatchers, and a modular design system built for future scalability.",
    impact: ["⏱️ 95% Mobile Adoption within 30 days", "📝 Zero Paper Dispatching within 6 weeks", "⏱️ 40% Faster Job Completion"],
    outcomeQuote: { name: "Alex B.", role: "Operations Manager", quote: "It’s night and day from before. Dispatch is faster, and my techs are way more confident in the field." },
    reflection: "Designing for real-world constraints like low connectivity and gloves-on usage was key. Prioritizing early-stage field testing was crucial for the success of the project.",
    images: ["/assets/mss-research.jpg", "/assets/mss-journey.jpg", "/assets/mss-design.png", "/assets/mss-outcome.gif"],
    audio: "/audio/mss-highlights.mp3",
    audioDuration: "1:52",
  },
];

export const projects = caseStudies.map((study) => ({
  title: study.title,
  slug: study.slug,
  image: study.cover,
  summary: study.eyebrow,
}));
