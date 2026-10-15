export const PROGRAM_INFO = {
  name: "Start from Scratch",
  tagline: "Hyper-Paced Learning Program for Absolute AI Builders",
  subheading: "An intensive 8-week journey by AI Madurai Community. Move beyond chat interfaces into practical AI engineering: build chatbots, RAG systems, single agents, and multi-agent workflows.",
  duration: "8 Weeks",
  format: "Flipped Classroom + Intensive Weekend Build Days",
  cohort: "Cohort 2026 (Madurai)",
  corePhilosophy: "Learn independently. Think together. Build together. Show the work. Improve through feedback.",
  principle: "The best AI architecture is not the most advanced one. It is the simplest one that solves the business problem safely and credibly.",
  keyStats: [
    { label: "Weeks Duration", value: "8", detail: "Progressive technical depth" },
    { label: "Cohort Teams", value: "4", detail: "Group A, B, C, D tracks" },
    { label: "Demo Standard", value: "15 min", detail: "5 min live demo + 10 min Q&A" },
    { label: "Prerequisites", value: "4 Videos", detail: "Equal baseline readiness" },
  ]
};

export const FOUR_DS = [
  {
    key: "delegation",
    title: "Delegation",
    summary: "Decide what work AI should do and what work should remain with people.",
    details: "Master the boundary between human judgment and automated compute. Understand tasks where AI accelerates productivity versus where human oversight is non-negotiable.",
    color: "from-blue-600 to-blue-500",
    badge: "Strategic Judgement"
  },
  {
    key: "description",
    title: "Description",
    summary: "Give AI clear context, goals, constraints, and desired outcomes.",
    details: "Move past ambiguous prompting. Provide precise schemas, boundary conditions, system instructions, and structured input/output definitions.",
    color: "from-blue-700 to-blue-600",
    badge: "Prompt & Context Engineering"
  },
  {
    key: "discernment",
    title: "Discernment",
    summary: "Judge the quality, reliability, and appropriateness of AI output.",
    details: "Learn to spot hallucinations, subtle biases, logic drift, and incomplete outputs. Build automated tests and human review checkpoints.",
    color: "from-blue-600 to-sky-500",
    badge: "Quality & Grounding"
  },
  {
    key: "diligence",
    title: "Diligence",
    summary: "Use AI responsibly, verify results, and stay accountable for decisions.",
    details: "Uphold safety standards, data privacy, source citations, enterprise compliance, and ethical stewardship over autonomous systems.",
    color: "from-blue-700 to-sky-600",
    badge: "Safety & Accountability"
  }
];

export const TEAMS_DATA = [
  {
    group: "Group A",
    environment: "Python + Local/Open LLM (Google Colab)",
    focus: "Self-Hosted & Open-Source AI Exploration",
    description: "Hands-on with open weights (Llama, Mistral, Gemma) running in Colab environments. Understand model parameters, inference latency, and open-source ecosystems.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    accent: "blue"
  },
  {
    group: "Group B",
    environment: "Python SDK + Commercial Cloud API",
    focus: "Core Developer Workflow with Cloud Frontier Models",
    description: "Industry-standard developer pattern using Python SDKs, API keys, structured JSON output, tool definition protocols, and rate-limit handling.",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    accent: "blue"
  },
  {
    group: "Group C",
    environment: "n8n Visual Automation",
    focus: "Low-Code Workflow & Tool Orchestration",
    description: "Visual canvas connecting triggers, webhooks, databases, and AI nodes. Ideal for rapid pipeline prototyping and systems integration without heavy boilerplate.",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
    accent: "blue"
  },
  {
    group: "Group D",
    environment: "Next.js + Frontend Vibe Coding (Antigravity)",
    focus: "Frontend-Oriented Interactive AI Applications",
    description: "Building responsive, modern user experiences around AI systems. Fast iteration using agentic IDE tools and reactive interfaces.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-300",
    accent: "blue"
  }
];

export const CURRICULUM = [
  {
    week: 1,
    title: "AI Fluency and Mental Models",
    phase: "Phase 1: Mindset & Baseline",
    highlight: "Anthropic 4Ds Framework & The Builder Mindset",
    summary: "Establishes the foundational mindset for collaborating with AI effectively, ethically, and safely before touching specialized code.",
    coreQuestion: "How do we transition from passive AI users into disciplined AI collaborators?",
    deliverable: "Individual reflection & 4Ds evaluation matrix on everyday work problems",
    topics: [
      "Anthropic's AI Fluency Framework",
      "The 4Ds: Delegation, Description, Discernment, Diligence",
      "Model architectures & tokenization mechanics at a high level",
      "Eliminating the magical thinking: AI as statistical prediction engine",
      "Establishing ethical, security, and enterprise safety guardrails"
    ],
    qualityBar: "Clear articulation of what tasks should and should not be delegated to AI, with verified testing methodologies."
  },
  {
    week: 2,
    title: "From Chat to IDE: Introduction to Vibe Coding",
    phase: "Phase 1: Mindset & Baseline",
    highlight: "Common Challenge: The Automated Triage Agent (L1 SRE Bot)",
    summary: "Shifts practitioners from web browser chat interfaces into real developer environments across 4 diverse technical tracks.",
    coreQuestion: "How does the same product requirement manifest across different development environments?",
    deliverable: "Automated Triage Agent running in 4 different tech stacks (Colab, Python SDK, n8n, Next.js)",
    topics: [
      "Automated Triage Agent: classifies technical error logs & suggests resolution runbooks",
      "Setting up coding environments (Google Colab, IDEs, API keys, GitHub repos)",
      "Vibe coding practices: iterating with AI code assistants with discipline",
      "GitHub version control for collaborative team progress tracking",
      "Comparing open vs commercial vs visual vs full-stack approaches"
    ],
    qualityBar: "Working repository on GitHub, clean README, minimal slides, and a working live demo classifying real error logs."
  },
  {
    week: 3,
    title: "RAG: Understand First, Build Together",
    phase: "Phase 2: Grounded Architectures",
    highlight: "Full-Day Hackathon Build + RAG Architecture Patterns",
    summary: "Deep dive into Retrieval-Augmented Generation. Weekly study of retrieval paradigms followed by an intensive hackathon build day.",
    coreQuestion: "How do we ground LLMs in external, verified company documentation without fine-tuning?",
    deliverable: "Working RAG pipeline with document indexing, retrieval, reranking, and grounded answer synthesis",
    topics: [
      "RAG Fundamentals: Embeddings, Chunking strategies, and Vector Databases",
      "14 Types of RAG architectures & structural trade-offs",
      "Retrieval methods: Keyword (BM25), Vector search, and Hybrid search",
      "Reranking models (Cross-encoders) to optimize context window relevance",
      "Headroom & breakout team hackathon execution"
    ],
    resources: [
      { name: "14 Types of RAG Architecture", type: "Article", link: "https://www.meilisearch.com/blog/rag-types" },
      { name: "RAG: Part 5 - Retrieval & Reranking", type: "Article", link: "https://medium.com/@j13mehul/rag-part-5-retrieval-93ef1be7ac07" },
      { name: "RAG Crash Course for Beginners", type: "Video", link: "https://www.youtube.com/watch?v=swvzKSOEluc" }
    ],
    qualityBar: "Demonstrable prevention of hallucinations with citation links to the retrieved source chunks."
  },
  {
    week: 4,
    title: "Build the First AI Agent",
    phase: "Phase 2: Grounded Architectures",
    highlight: "The Agent Loop: Goal -> Tool Execution -> Observation -> Decision",
    summary: "Transition from static question-answering RAG to an active agent that plans steps and calls tools to accomplish a user goal.",
    coreQuestion: "What separates a static chatbot or RAG query from an autonomous agent?",
    deliverable: "Single AI agent equipped with 1-2 practical tools (search, API, calculator, code runner) with human escalation",
    topics: [
      "Agent fundamentals: Reason + Act (ReAct) loops and tool definitions",
      "Constrained scope: One clear goal, one agent, 1-2 curated tools",
      "Tool schema design & structured JSON calling",
      "Loop safety: Max iteration limits, error handling, stop conditions",
      "Human-in-the-loop escalation paths for uncertain actions"
    ],
    qualityBar: "Demo showing at least one successful path AND one edge case/failure scenario handled gracefully."
  },
  {
    week: 5,
    title: "Multi-Agent Systems",
    phase: "Phase 2: Grounded Architectures",
    highlight: "Role Specialization & Delegation: When is one agent not enough?",
    summary: "Explore multi-agent collaboration with specialized roles: Orchestrator, Researcher, Analyst, Reviewer, and Human Supervisor.",
    coreQuestion: "When does decomposing a challenge into multiple agents justify the overhead and latency?",
    deliverable: "Multi-agent Incident Triage system with specialized research, synthesis, and review roles",
    topics: [
      "Decomposing complex workflows into specialized agent roles",
      "Orchestrator pattern vs mesh collaboration",
      "Reviewer agent: Grounding checks and evidence verification",
      "Communication protocols between agents (message passing, shared context)",
      "Analyzing trade-offs: latency, token cost, failure compounding vs quality gains"
    ],
    qualityBar: "Transparent justification of why multi-agent was necessary vs a single prompt or single agent."
  },
  {
    week: 6,
    title: "Choose the Next Use Case",
    phase: "Phase 3: Capstone & Productization",
    highlight: "Product Scoping, User Discovery & Architecture Justification",
    summary: "Teams select and rigorously scope their final capstone project. No hasty coding — disciplined problem formulation and user validation first.",
    coreQuestion: "What is the simplest responsible architecture that solves this real human problem?",
    deliverable: "Comprehensive Product & Architecture Specification Document with initial user validation interviews",
    topics: [
      "Identifying acute user pain points vs artificial AI demos",
      "Defining clear measurable success criteria (precision, latency, cost)",
      "Architecture selection matrix: Chatbot vs RAG vs Single Agent vs Multi-Agent",
      "Data source auditing, API dependencies, and risk mitigation",
      "Team role allocation, GitHub milestones, and delivery sprint plan"
    ],
    qualityBar: "Clear problem statement in under 3 sentences, with feedback from at least 1 real prospective end-user."
  },
  {
    week: 7,
    title: "Build the Solution",
    phase: "Phase 3: Capstone & Productization",
    highlight: "Focused Capstone Build Sprint & Enterprise Best Practices",
    summary: "Teams execute their scoped project into a robust, end-to-end working software product with complete GitHub visibility.",
    coreQuestion: "Can your team deliver a stable, end-to-end demo under real enterprise standards?",
    deliverable: "Functional application deployed or runnable locally, accompanied by complete test logs and GitHub repo",
    topics: [
      "Disciplined scope adherence: avoiding feature creep",
      "End-to-end integration: frontend, backend, models, and data",
      "Stress testing and realistic edge case validation",
      "Enterprise best practices: secrets management, error boundaries, telemetry",
      "Rehearsing the 5-minute live demo and 10-minute Q&A"
    ],
    qualityBar: "100% reproducible build from GitHub README with clean commit history across team members."
  },
  {
    week: 8,
    title: "Connect the Dots: The Grand Showcase",
    phase: "Phase 3: Capstone & Productization",
    highlight: "15-Minute Team Presentations Across 4 Lenses + Retrospective",
    summary: "Connecting the complete learning arc. Live demonstrations before community mentors, peers, and industry leaders.",
    coreQuestion: "What did we prove, what failed along the way, and what is the responsible path to production?",
    deliverable: "15-minute showcase (5 min live demo + 10 min technical Q&A) and post-mortem retrospective report",
    topics: [
      "Delivering the 4 Presentation Lenses: Leadership, Technical, Sales, Teaching",
      "Demonstrating live without slide crutches ('talk less, show more')",
      "Answering deep architecture questions and trade-off scrutiny",
      "Reflecting on failures, pivots, and unexpected lessons learned",
      "Next steps: Open-source release, startup incubation, or community handoff"
    ],
    qualityBar: "Flawless live demo with honest review of failure boundaries and future productization roadmap."
  }
];

export const ARCHITECTURE_LADDER = [
  {
    level: 1,
    name: "Simple Chatbot",
    idealFor: "Straightforward answers, content drafting, language translation, general guidance.",
    complexity: "Low Complexity",
    bestWhen: "All necessary knowledge already lives inside the foundational model weights.",
    avoids: "Over-engineering when external dynamic data is unnecessary."
  },
  {
    level: 2,
    name: "RAG Application",
    idealFor: "Domain-specific queries, customer support over docs, internal company wikis, legal search.",
    complexity: "Moderate Complexity",
    bestWhen: "Answers must be strictly grounded in verified proprietary knowledge bases.",
    avoids: "Model hallucinations and out-of-date information."
  },
  {
    level: 3,
    name: "Single AI Agent",
    idealFor: "Goal-driven tasks needing tools: calculators, live web searches, SQL queries, CRM updates.",
    complexity: "Medium Complexity",
    bestWhen: "The system needs to decide which action or tool to invoke dynamically.",
    avoids: "Manual human friction for repetitive multi-step digital workflows."
  },
  {
    level: 4,
    name: "Multi-Agent System",
    idealFor: "Complex domain problems benefiting from distinct specialized roles (e.g. Developer + Tester, Researcher + Critic).",
    complexity: "High Complexity",
    bestWhen: "Tasks require debate, cross-verification, or asynchronous parallel specialization.",
    avoids: "Single-agent cognitive overload on complex multi-stage tasks."
  },
  {
    level: 5,
    name: "Autonomous Workflow",
    idealFor: "Cross-system background automation with triggers, cron schedules, retries, and audit trails.",
    complexity: "Advanced Automation",
    bestWhen: "Pipelines operate unattended across multiple third-party SaaS APIs and stateful databases.",
    avoids: "Siloed, non-reactive legacy automation."
  },
  {
    level: 6,
    name: "Enterprise AI Agent",
    idealFor: "Mission-critical production workloads with enterprise IAM, SOC2 compliance, role-based access, and SLA monitoring.",
    complexity: "Enterprise Grade",
    bestWhen: "Governance, data sovereignty, strict access control, and observability are paramount.",
    avoids: "Security breaches and regulatory non-compliance."
  }
];

export const PRESENTATION_LENSES = [
  {
    lens: "Leadership Lens",
    icon: "Target",
    color: "text-blue-700 bg-blue-50 border-blue-200",
    question: "Why does the work matter, what value does it create, and what decision is needed?",
    focus: "Business ROI, operational efficiency, cost-benefit ratio, and organizational impact."
  },
  {
    lens: "Technical Lens",
    icon: "Cpu",
    color: "text-blue-800 bg-blue-100/60 border-blue-300",
    question: "How does the system work, what data and tools does it use, and what choices were made?",
    focus: "Architectural diagram, vector indexing, latency, prompt design, and fail-safe logic."
  },
  {
    lens: "Sales Lens",
    icon: "Sparkles",
    color: "text-sky-800 bg-sky-50 border-sky-200",
    question: "Who benefits, what problem does it solve, and why is the solution compelling?",
    focus: "User journey, frictionless UX, emotional relief of the end user, and market differentiation."
  },
  {
    lens: "Teaching Lens",
    icon: "BookOpen",
    color: "text-blue-900 bg-blue-50 border-blue-200",
    question: "How does the idea work in crystal-clear, accessible language?",
    focus: "Explaining non-trivial AI concepts simply without buzzwords or obfuscation."
  }
];

export const FAQ_LIST = [
  {
    q: "Who is the 'Start from Scratch' program designed for?",
    a: "It is designed for absolute beginners and curious engineers who want to build real, working AI applications instead of just reading theory or chatting with ChatGPT. Whether you are a student, frontend engineer, backend dev, or domain specialist in Madurai, you will gain hands-on AI building capability."
  },
  {
    q: "What is Hyper-Paced Learning?",
    a: "Hyper-Paced Learning does NOT mean rushed learning. It means every hour has a distinct purpose: individual time is dedicated to pre-study and foundational reading; cohort time is reserved for brainstorming, hard decisions, and live building; presentation time is for proving real working software and receiving candid feedback."
  },
  {
    q: "What is the prerequisite to join?",
    a: "Every participant must complete four mandatory pre-recordings before joining the live sessions. This ensures everyone steps in with a shared vocabulary and baseline, so live sessions can be devoted to building rather than re-teaching basics."
  },
  {
    q: "How are the teams organized?",
    a: "Participants are divided into four teams (Group A, Group B, Group C, Group D), each supported by a designated team lead. The teams explore different technical environments (Python/Colab, Python SDK, n8n, Next.js vibe coding) to prove that AI solutions can be approached from multiple viable angles."
  },
  {
    q: "Is there a fee to participate in AI Madurai?",
    a: "AI Madurai is a community-driven initiative organized by local practitioners to elevate South Tamil Nadu's AI ecosystem. Start from Scratch is community-first, accessible, and dedicated to serious learners who commit their time and effort."
  },
  {
    q: "What do I need to bring on build days?",
    a: "Your laptop with your preferred code editor or browser environment setup, a GitHub account, pre-reads completed, and an eagerness to collaborate openly in the headroom and breakout sessions."
  }
];
