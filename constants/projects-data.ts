export type Project = {
  id?: string;
  title: string;
  year: string;
  tag: string;
  featured?: boolean;
  desc: string;
  overview?: string;
  stack: string[];
  features?: string[];
  links?: {
    github?: string;
    live?: string;
    linkedin?: string;
  };
  artwork?: string;
  image?: string;
  thumbnail?: string;
  objectPosition?: string;
};

export const ALL_PROJECTS: Project[] = [
  {
    id: "smartcare-ai",
    title: "SmartCare Commerce AI",
    year: "2025",
    tag: "AI Healthcare Commerce",
    featured: true,
    desc: "AI-native healthcare commerce platform integrating predictive recommendations, patient assistance, and real-time inventory management.",
    overview:
      "SmartCare Commerce AI is a next-generation intelligent commerce engine designed to bridge clinical intelligence with e-commerce logistics. Utilizing advanced LLMs, vector search, and automated inventory prediction, the platform offers conversational product discovery, automated patient guidance, and seamless real-time checkout telemetry.",
    stack: ["Generative AI", "LLMs", "RAG", "Node.js", "Python", "Vector DB"],
    features: [
      "LLM & RAG-driven clinical product recommendations",
      "Real-time predictive inventory management",
      "Sub-85ms model inference and analytics",
      "Automated conversational customer checkout assistant",
      "Vector search indexing across thousands of healthcare items",
      "Enterprise audit logging and telemetry dashboard",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/SmartCare-Commerce-AI",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #070c18 0%, #0b162c 50%, #38bdf8 100%)",
    image: "/smartcare-ai.svg",
    thumbnail: "/smartcare-ai.svg",
    objectPosition: "center center",
  },
  {
    id: "rideflow",
    title: "Rideflow",
    year: "2025",
    tag: "Real-Time System",
    featured: true,
    desc: "High-performance on-demand ride hailing and vehicle dispatch engine featuring live geospatial tracking, dynamic surge pricing, and driver pairing.",
    overview:
      "Rideflow is an urban transit routing and dispatch system designed for real-time scale. Built on WebSockets and geospatial algorithms, it matches riders and drivers dynamically, tracks live vehicle telemetry at 60 FPS, and computes optimal route paths with dynamic surge pricing.",
    stack: ["JavaScript", "Socket.IO", "Geospatial", "React.js", "Node.js", "Express.js"],
    features: [
      "Real-time GPS vehicle tracking via Socket.IO",
      "Dynamic driver-passenger matchmaking algorithm",
      "Live geospatial map rendering and route estimation",
      "Surge pricing engine based on local demand density",
      "Sub-second event propagation across clients",
      "Interactive driver and passenger dashboards",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/Rideflow",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0a0f1d 0%, #141829 50%, #6366f1 100%)",
    image: "/rideflow.svg",
    thumbnail: "/rideflow.svg",
    objectPosition: "center center",
  },
  {
    id: "realtime-chat-video",
    title: "Real-Time Video Call & Chat",
    year: "2025",
    tag: "WebRTC & Sockets",
    featured: true,
    desc: "Ultra-low latency peer-to-peer video conferencing and instant room messaging engine built with STUN/TURN traversal and adaptive media pipelines.",
    overview:
      "Real-Time Video Call & Chat (Apna Video Call) provides crystal-clear 1080p peer-to-peer communication directly in the browser. Powered by WebRTC mesh architecture and Socket.IO signaling, it supports instant room creation, screen sharing, low-latency audio/video pipelines, and concurrent real-time room messaging.",
    stack: ["WebRTC", "Socket.IO", "Node.js", "Express.js", "STUN/TURN", "JavaScript"],
    features: [
      "Peer-to-peer WebRTC video and audio streaming",
      "Instant room creation with shareable invite links",
      "Real-time synchronized chat messaging",
      "Screen sharing & media stream controls",
      "Low-bandwidth adaptive quality adjustments",
      "Zero third-party SDK dependencies",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/Real-time-chat-video-call",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #140a1d 0%, #1c102a 50%, #ec4899 100%)",
    image: "/realtime-chat.svg",
    thumbnail: "/realtime-chat.svg",
    objectPosition: "center center",
  },
  {
    id: "farm-market",
    title: "Farm Market Platform",
    year: "2025",
    tag: "Agri-Tech Marketplace",
    featured: true,
    desc: "Direct-to-consumer agricultural commerce platform connecting grassroots farmers directly with commercial buyers, eliminating intermediaries.",
    overview:
      "Farm Market is an agricultural commerce platform engineered to empower grassroots farmers with fair prices. By directly connecting growers with commercial wholesale buyers and households, it eliminates predatory middlemen and provides transparent supply chain pricing.",
    stack: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    features: [
      "Direct farmer-to-buyer listing and bidding",
      "Fair trade pricing without middlemen cuts",
      "Real-time crop inventory and batch tracking",
      "Order management & logistics coordination",
      "Mobile-first responsive interface for rural access",
      "Secure checkout and direct payout workflows",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/farm_market_project",
      live: "https://farm-market-project-1-j6fq.onrender.com/",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #08140e 0%, #0f2319 50%, #10b981 100%)",
    image: "/farm-market.svg",
    thumbnail: "/farm-market.svg",
    objectPosition: "center center",
  },
  {
    id: "wanderlust",
    title: "Wanderlust Booking",
    year: "2025",
    tag: "Hospitality & Travel",
    featured: false,
    desc: "Full-scale property rental & boutique hotel booking web application with Mapbox spatial discovery, secure auth & host dashboards.",
    overview:
      "Wanderlust is a comprehensive rental booking platform inspired by Airbnb. It features map-based property exploration using Mapbox, multi-image upload pipelines via Cloudinary, reviews & rating calculations, and user role authentication.",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mapbox", "Cloudinary"],
    features: [
      "Interactive Mapbox geocoding & spatial pins",
      "Secure user authentication & session management",
      "Multi-image listing uploads via Cloudinary",
      "Dynamic review aggregation and rating system",
      "Host dashboards with booking telemetry",
      "Search & filter by price range and location",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/Wanderlust-Rental-Booking-Web-Application",
      live: "https://majorproject-lg4r.onrender.com/",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #140f09 0%, #24180d 50%, #f59e0b 100%)",
    image: "/wanderlust.svg",
    thumbnail: "/wanderlust.svg",
    objectPosition: "center center",
  },
  {
    id: "8byte",
    title: "8byte Platform",
    year: "2025",
    tag: "Web Architecture",
    featured: false,
    desc: "Modern digital architecture & enterprise web platform engineered with TypeScript, modular design primitives & ultra-fast edge deployment.",
    overview:
      "8byte is a high-performance modern web platform designed with strict TypeScript architectural patterns, modular component hierarchy, and automated edge caching to achieve perfect 100/100 Lighthouse performance scores.",
    stack: ["TypeScript", "Next.js", "React.js", "Tailwind CSS", "Vercel Edge"],
    features: [
      "Sub-millisecond global cold starts on Vercel Edge",
      "100/100 Lighthouse performance & accessibility",
      "Strict TypeScript type-safety across all endpoints",
      "Modular UI design token system",
      "SSR & ISR rendering optimizations",
      "Clean responsive layout across all device viewports",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/8byte",
      live: "https://8byte-red.vercel.app",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #05101a 0%, #0a1d30 50%, #06b6d4 100%)",
    image: "/8byte.svg",
    thumbnail: "/8byte.svg",
    objectPosition: "center center",
  },
  {
    id: "sharepal",
    title: "SharePal",
    year: "2025",
    tag: "Peer Community",
    featured: false,
    desc: "Smart community item & resource sharing platform designed for peer-to-peer neighborhood exchange with authenticated escrow & reviews.",
    overview:
      "SharePal connects local communities by enabling neighbors to share tools, equipment, and household resources. It features item lending schedules, deposit security locks, and verified peer reviews to promote sustainable circular economies.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Peer-to-peer item catalog with availability dates",
      "Deposit lock & return verification workflows",
      "Verified neighbor trust rating system",
      "Real-time request notifications and messaging",
      "Location radius search and category filters",
      "Automated lending agreements",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/SharePal",
      live: "https://share-pal-bice.vercel.app",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0f0717 0%, #190e29 50%, #c084fc 100%)",
    image: "/sharepal.svg",
    thumbnail: "/sharepal.svg",
    objectPosition: "center center",
  },
  {
    id: "guardpost-ai",
    title: "GuardPost-AI",
    year: "2025",
    tag: "AI Security Agent",
    featured: false,
    desc: "Autonomous cyber defense sentinel utilizing LLMs, anomaly detection, heuristic network monitoring & automated real-time incident quarantine.",
    overview:
      "GuardPost-AI is an autonomous cyber security agent that inspects high-volume network telemetry, detects sophisticated zero-day attack patterns, and automatically triggers containment workflows without human intervention.",
    stack: ["Python", "FastAPI", "AI Agents", "Docker", "Anomaly Detection"],
    features: [
      "Automated real-time packet telemetry inspection",
      "LLM-based incident classification and triage",
      "Zero-day heuristic threat pattern recognition",
      "Automated IP quarantine and firewall rule updates",
      "Continuous security evaluation & false-positive filter",
      "FastAPI microservice containerized with Docker",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/GuardPost-AI",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0a1215 0%, #12252a 50%, #14b8a6 100%)",
    image: "/guardpost-ai.svg",
    thumbnail: "/guardpost-ai.svg",
    objectPosition: "center center",
  },
  {
    id: "wexaai",
    title: "WexaAI",
    year: "2025",
    tag: "Multi-Agent System",
    featured: false,
    desc: "Autonomous multi-agent orchestration platform facilitating intelligent task decomposition, tool execution, and structured output generation.",
    overview:
      "WexaAI coordinates teams of specialized AI agents (planners, coders, validators) to solve complex multi-step reasoning problems. Built with cyclic graph architectures and LangGraph, it features automated self-correction and RAGAS metric evaluation.",
    stack: ["Python", "AI Agents", "LangGraph", "FastAPI", "RAGAS"],
    features: [
      "Planner-Executor-Critic agent hierarchy",
      "Deterministic graph orchestration with LangGraph",
      "Dynamic tool invocation and web search hooks",
      "Iterative self-correction loop on errors",
      "RAGAS-based accuracy evaluation metrics",
      "Streaming token execution telemetry",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/WexaAI",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0d0918 0%, #18112c 50%, #8b5cf6 100%)",
    image: "/wexaai.svg",
    thumbnail: "/wexaai.svg",
    objectPosition: "center center",
  },
  {
    id: "sigmagpt",
    title: "SigmaGpt",
    year: "2025",
    tag: "Conversational AI",
    featured: false,
    desc: "Adaptive AI chat assistant and knowledge synthesis platform with streaming tokens, context memory expansion, and multi-model switching.",
    overview:
      "SigmaGpt is a conversational intelligence platform featuring Server-Sent Events (SSE) token streaming at 110+ tokens/sec, persistent context memory windows, and customizable system prompt personas for developer productivity.",
    stack: ["JavaScript", "Node.js", "OpenAI API", "SSE Streams", "Express"],
    features: [
      "Zero-lag SSE real-time token streaming",
      "Persistent conversation history and memory",
      "Markdown and syntax-highlighted code rendering",
      "Multi-model prompt configuration interface",
      "Custom knowledge prompt templates",
      "Cost and latency optimization filters",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/SigmaGpt",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #150a0a 0%, #241010 50%, #ef4444 100%)",
    image: "/sigmagpt.svg",
    thumbnail: "/sigmagpt.svg",
    objectPosition: "center center",
  },
  {
    id: "ablespace",
    title: "AbleSpace",
    year: "2025",
    tag: "Accessible Workspace",
    featured: false,
    desc: "Inclusive digital workspace & productivity suite architected for seamless accessibility, team collaboration, and assistive tools.",
    overview:
      "AbleSpace is an accessibility-first collaborative workspace built to conform to WCAG 2.1 AAA standards. It includes full screen-reader keyboard navigation, high-contrast dynamic themes, real-time shared state synchronization, and distraction-free document editing.",
    stack: ["TypeScript", "React.js", "Tailwind CSS", "WCAG 2.1", "CRDTs"],
    features: [
      "WCAG 2.1 AAA certified color contrast and keyboard nav",
      "Real-time multi-user document collaboration",
      "Assistive speech-to-text input modes",
      "Custom dyslexia-friendly typography toggles",
      "Low-latency CRDT state synchronization",
      "Export to accessible PDF and Markdown formats",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/AbleSpace",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0a131b 0%, #10212f 50%, #3b82f6 100%)",
    image: "/ablespace.svg",
    thumbnail: "/ablespace.svg",
    objectPosition: "center center",
  },
  {
    id: "support-ticket",
    title: "Support Ticket Dashboard",
    year: "2025",
    tag: "Enterprise Ops",
    featured: false,
    desc: "Real-time IT service management & ticket triage operations platform with automated SLA tracking, priority routing, and analytics.",
    overview:
      "An enterprise IT service management dashboard engineered for high-velocity support teams. Provides live queue telemetry, automated SLA countdown triggers, role-based ticket triage routing, and historical resolution analytics.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "Socket.IO"],
    features: [
      "Live ticket status broadcasts via WebSockets",
      "Automated SLA breach warning triggers",
      "Multi-agent queue assignment algorithms",
      "Performance metrics and time-to-resolution charts",
      "Granular filter by urgency, team, and tag",
      "Full audit log of ticket lifecycle events",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/Support-Ticket-Dashboard",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0c0e18 0%, #161b2e 50%, #4f46e5 100%)",
    image: "/support-ticket.svg",
    thumbnail: "/support-ticket.svg",
    objectPosition: "center center",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    year: "2024",
    tag: "Web Store",
    featured: false,
    desc: "Full-featured online shopping platform with dynamic catalog filtering, shopping cart persistence, and secure checkout.",
    overview:
      "An intuitive e-commerce web platform offering responsive product browsing, category filtering, cart management, user authentication, and secure checkout processing.",
    stack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB"],
    features: [
      "Dynamic product search and category filtering",
      "Persistent cart management with local storage",
      "User authentication and profile history",
      "Order summary and receipt generation",
      "Mobile-optimized responsive design",
      "RESTful inventory backend",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/E-commerce",
      live: "https://e-commerce-4-l3fc.onrender.com/",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #070c18 0%, #0b162c 50%, #0284c7 100%)",
    image: "/smartcare-ai.svg",
    thumbnail: "/smartcare-ai.svg",
    objectPosition: "center center",
  },
  {
    id: "padosipro",
    title: "PadosiPro",
    year: "2025",
    tag: "Hyperlocal Platform",
    featured: false,
    desc: "Hyperlocal neighborhood assistance and community skills exchange connecting trusted residents for everyday tasks.",
    overview:
      "PadosiPro empowers localized neighborhoods to request and offer assistance, trades, and tools with verified local residents, creating trusted micro-communities.",
    stack: ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js"],
    features: [
      "Hyperlocal radius service requests",
      "Verified neighbor identity profiles",
      "In-app direct messaging and coordination",
      "Community recommendations and skill directory",
      "Notification triggers for local needs",
      "Responsive mobile-first experience",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/PadosiPro",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #0f0717 0%, #190e29 50%, #9333ea 100%)",
    image: "/sharepal.svg",
    thumbnail: "/sharepal.svg",
    objectPosition: "center center",
  },
  {
    id: "devcraft",
    title: "DevCraft",
    year: "2025",
    tag: "Developer Tooling",
    featured: false,
    desc: "Interactive developer workspace and snippet workbench for testing code ideas, sharing architectures, and rapid prototyping.",
    overview:
      "DevCraft provides software engineers with an organized workbench for architectural sketches, algorithm prototyping, snippet sharing, and interactive coding experiments.",
    stack: ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "Prisma"],
    features: [
      "Interactive code playground and live preview",
      "Architectural blueprint and note organization",
      "Syntax highlighting with multi-language support",
      "One-click snippet sharing via unique URLs",
      "Tagging and fast fuzzy search",
      "Dark-mode developer aesthetic",
    ],
    links: {
      github: "https://github.com/mishrarakesh-1902/DevCraft",
      linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    artwork: "linear-gradient(180deg, #05101a 0%, #0a1d30 50%, #2563eb 100%)",
    image: "/8byte.svg",
    thumbnail: "/8byte.svg",
    objectPosition: "center center",
  },
];

export function findProject(titleOrId: string): Project | undefined {
  const query = titleOrId.toLowerCase().trim();
  return ALL_PROJECTS.find(
    (p) =>
      p.id?.toLowerCase() === query ||
      p.title.toLowerCase() === query ||
      p.title.toLowerCase().includes(query) ||
      query.includes(p.title.toLowerCase())
  );
}
