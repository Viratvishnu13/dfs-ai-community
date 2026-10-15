import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Terminal, Code2, Layers, Cpu, Users, 
  Activity, ShieldAlert, Network, Target, BookOpen 
} from 'lucide-react';
import PdfViewer from './PdfViewer';

export default function ScratchStructure() {
  const [activeWeek, setActiveWeek] = useState(1);

  const weeks = [
    {
      weekNumber: 1,
      conceptTitle: "Understanding 4D Framework",
      phase: "Foundations",
      icon: Terminal,
      pdfUrl: "/materials/Start_from_Scratch_Week_1_AI_Fluency.pdf",
      highlight: "Anthropic 4Ds Framework: Delegation, Description, Discernment, Diligence.",
      summary: "Establishes the foundational mindset to collaborate with AI effectively, ethically, and safely before touching technical tools.",
      deliverable: "Individual preparation, prerequisite recordings, and mental model baseline verification.",
      slides: [
        {
          badge: "Mindset & Principles",
          heading: "The Anthropic 4Ds Framework",
          summary: "Learn how to delegate intent rather than micro-tasks, craft precise functional descriptions, exercise sharp discernment on probabilistic output, and apply relentless diligence in verification.",
          keyPoints: [
            "Delegation: Specifying high-level objectives, constraints, and success criteria",
            "Description: Providing rich, unambiguous context and expected schemas",
            "Discernment: Evaluating hallucination risk and verifying stochastic logic",
            "Diligence: Establishing unit tests, lint checks, and human escalation gates"
          ]
        },
        {
          badge: "Mental Models",
          heading: "Probabilistic Engines vs Deterministic Systems",
          summary: "Understanding token limits, attention windows, temperature, and why traditional software engineering rules still apply to LLM wrappers.",
          keyPoints: [
            "Context window economics and KV-cache realities",
            "Controlling entropy through structured system prompts",
            "Deterministic validation around probabilistic completions"
          ]
        },
        {
          badge: "Action Plan",
          heading: "Week 1 Deliverable & Next Steps",
          summary: "Setup your environment, verify your API keys, and complete the baseline 4D assessment to prepare for programmatic execution in Week 2.",
          keyPoints: [
            "Verify Python 3.11+ / Node.js development environments",
            "Complete individual mental model check-in assessment",
            "Review Week 2 triage agent challenge specification"
          ]
        }
      ]
    },
    {
      weekNumber: 2,
      conceptTitle: "Making Your First LLM Call",
      phase: "Environment Setup",
      icon: Code2,
      pdfUrl: "/materials/Start_from_Scratch_Week_2_First_Model_Call.pdf",
      highlight: "The Automated Triage Agent (L1 SRE Bot) built across 4 diverse group stacks.",
      summary: "Moving from web chat tabs to real code editors. Groups A, B, C, and D tackle the same incident triage problem using Python SDK, Colab, n8n, and Next.js.",
      deliverable: "Working triage agent script with user testing and GitHub repository setup.",
      slides: [
        {
          badge: "API Architecture",
          heading: "Transitioning from Chat UI to Code SDKs",
          summary: "Learn how to formulate API requests, configure function calls, stream chunked responses, and parse structured JSON completions.",
          keyPoints: [
            "Calling OpenAI / Azure OpenAI / Ollama SDKs programmatically",
            "Pydantic and Zod schema enforcement for deterministic parsing",
            "Handling API rate limits, backoff retries, and timeout failures"
          ]
        },
        {
          badge: "Hands-on Build",
          heading: "Automated L1 Incident Triage Bot",
          summary: "Parse server error logs, classify incident severity, extract stack traces, and format actionable remediation summaries.",
          keyPoints: [
            "Ingesting raw unstructured server exception logs",
            "Few-shot prompt formatting with clear escalation rubrics",
            "Generating verified GitHub issues and Slack notifications"
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      conceptTitle: "Building Your First RAG Pipeline",
      phase: "Retrieval Systems",
      icon: Layers,
      pdfUrl: "/materials/Start_from_Scratch_Week_3_Readiness_Brief.pdf",
      highlight: "Vector embeddings, chunking strategies, hybrid search, and hackathon build day.",
      summary: "Understanding how external knowledge bases ground model generation and reduce hallucinations by retrieving relevant context dynamically.",
      deliverable: "Functional RAG pipeline connected to documents, demonstrated live in under 5 minutes.",
      slides: [
        {
          badge: "Retrieval Architecture",
          heading: "Core Retrieval-Augmented Generation",
          summary: "Decoupling static model training from dynamic enterprise knowledge using embeddings and vector search.",
          keyPoints: [
            "Document ingestion: PDF parsing, recursive text chunking, and metadata tagging",
            "Dense vector embeddings vs sparse BM25 keyword retrieval (Hybrid Search)",
            "Cross-encoder reranking to boost top-K relevance precision"
          ]
        },
        {
          badge: "Evaluation",
          heading: "Evaluating RAG Precision & Hallucination",
          summary: "Measuring retrieval faithfulness, answer relevancy, and context recall using synthetic evaluation benchmarks.",
          keyPoints: [
            "Implementing Ragas / TruLens evaluation metrics",
            "Mitigating context window stuffing and lost-in-the-middle phenomena",
            "Live 5-minute capstone RAG demonstration"
          ]
        }
      ]
    },
    {
      weekNumber: 4,
      conceptTitle: "Building Autonomous AI Agents",
      phase: "Autonomous Action",
      icon: Cpu,
      pdfUrl: "/materials/Start_from_Scratch_Week_4_First_Agent.pdf",
      highlight: "Goal execution loop, tool calling, and human escalation guardrails.",
      summary: "Transitioning from retrieval to autonomy: constructing an agent that selects external tools, evaluates intermediate responses, and loops to completion.",
      deliverable: "Working agent prototype demonstrating successful execution and edge-case handling.",
      slides: [
        {
          badge: "Agent Mechanics",
          heading: "The ReAct Loop: Reason, Act, Observe",
          summary: "Architecting autonomous execution loops where models formulate plans, call external tools, inspect results, and dynamically iterate.",
          keyPoints: [
            "Tool calling schemas and function definitions",
            "Managing agent memory: scratchpads, short-term history, and state machines",
            "Loop termination conditions to prevent runaway token spend"
          ]
        },
        {
          badge: "Safety & Guardrails",
          heading: "Human-in-the-Loop & Approval Gates",
          summary: "Enforcing deterministic approval gates for destructive or high-risk tool invocations.",
          keyPoints: [
            "Designing interruptible workflows with resume checkpoints",
            "Role-based authorization for tool execution",
            "Live demo of an autonomous task agent handling unexpected failures"
          ]
        }
      ]
    },
    {
      weekNumber: 5,
      conceptTitle: "Multi-Agent System Orchestration",
      phase: "Orchestration",
      icon: Users,
      pdfUrl: "/materials/Start_from_Scratch_Week_5_Multi_Agent.pdf",
      highlight: "Specialized roles: Orchestrator, Researcher, Solver, Reviewer, and Human.",
      summary: "Exploring collaborative agent swarms. Understanding when multiple agents are justified versus when a simpler single-prompt design is superior.",
      deliverable: "Multi-agent triage system with clear role delegation and uncertainty handling.",
      slides: [
        {
          badge: "Swarm Patterns",
          heading: "Multi-Agent Topologies & Handoffs",
          summary: "Structuring multi-agent systems using supervisor patterns, peer-to-peer delegation, and hierarchical state graphs (LangGraph / Autogen).",
          keyPoints: [
            "Supervisor orchestrator delegating to specialized sub-agents",
            "Message passing protocols and shared blackboard state",
            "Avoiding infinite delegation ping-pong between agents"
          ]
        },
        {
          badge: "Production Deployment",
          heading: "Enterprise Multi-Agent Incident Resolver",
          summary: "Deploying a team of agents: one gathers telemetry, one queries internal documentation, and one prepares the pull request fix.",
          keyPoints: [
            "Separation of concerns across agent domains",
            "Consensus checking and final reviewer verification",
            "Capstone delivery of a multi-agent incident resolution system"
          ]
        }
      ]
    },
    {
      weekNumber: 6,
      conceptTitle: "AI Observability & Trace Profiling",
      phase: "Observability",
      icon: Activity,
      pdfUrl: "/materials/Start_from_Scratch_Week_6_Observability.pdf",
      highlight: "LLM execution traces, token consumption, latency profiling, and evaluation telemetry.",
      summary: "Implementing comprehensive observability across AI workflows. Logging prompt inputs, completions, function-call arguments, and latency bottlenecks.",
      deliverable: "Integrated tracing harness with trace dashboards, cost tracking, and automated evaluation metrics.",
      slides: [
        {
          badge: "Telemetry & Tracing",
          heading: "Instrumenting Distributed LLM Traces",
          summary: "Capturing spans, token counts, model parameters, and tool call payloads across complex agent graphs.",
          keyPoints: [
            "OpenTelemetry standards for GenAI and LLM spans",
            "Visualizing execution DAGs with Langfuse, Arize Phoenix, or Datadog",
            "Token cost attribution per business unit and workflow"
          ]
        },
        {
          badge: "Reliability",
          heading: "Latency Profiling & Evaluation Harness",
          summary: "Pinpointing bottlenecks across vector search, model TTFT (time-to-first-token), and sequential agent hops.",
          keyPoints: [
            "Setting up automated synthetic regression evals on code PRs",
            "Detecting prompt drift and degraded retrieval precision",
            "Building custom operational dashboards for DFS stakeholders"
          ]
        }
      ]
    },
    {
      weekNumber: 7,
      conceptTitle: "Red Teaming & AI Pen Testing",
      phase: "AI Security",
      icon: ShieldAlert,
      pdfUrl: "/materials/Start_from_Scratch_Week_7_Security_Red_Teaming.pdf",
      highlight: "Adversarial prompt injection, jailbreak defense, data leakage testing, and penetration testing.",
      summary: "Stress-testing AI systems through systematic red teaming. Simulating indirect prompt injections, jailbreaks, data exfiltration, and validating deterministic guardrails.",
      deliverable: "Red-teaming security audit report, automated vulnerability regression test suite, and hardened system guardrails.",
      slides: [
        {
          badge: "Threat Modeling",
          heading: "OWASP Top 10 for LLM Applications",
          summary: "Systematically dissecting prompt injection, insecure output handling, training data poisoning, and excessive agency.",
          keyPoints: [
            "Direct and indirect prompt injection attack vectors",
            "System prompt leakage and extraction techniques",
            "Data exfiltration via markdown rendering and unauthorized tool calls"
          ]
        },
        {
          badge: "Hardening",
          heading: "Deterministic Guardrails & Automated Audits",
          summary: "Implementing defense-in-depth with input sanitation, output screening, and NVIDIA Garak automated testing.",
          keyPoints: [
            "Input boundary separation using semantic delimiters",
            "Secondary LLM and regex guardrail verification layers",
            "Compiling the final security audit report and regression tests"
          ]
        }
      ]
    },
    {
      weekNumber: 8,
      conceptTitle: "Connect the Stack & Final Showcase",
      phase: "Enterprise Architecture",
      icon: Network,
      pdfUrl: "/materials/Start_from_Scratch_Week_8_Connect_the_Stack.pdf",
      highlight: "Multi-provider Model Gateways, Control Plane governance, and Data Plane vector/retrieval isolation.",
      summary: "Architecting production AI infrastructure at enterprise scale. Decoupling the Control Plane from the Model Gateway and the Data Plane.",
      deliverable: "Production-ready architectural blueprint and functional gateway deployment with routing and rate limiting.",
      slides: [
        {
          badge: "System Architecture",
          heading: "The Three Planes of Enterprise AI",
          summary: "Decoupling governance policies from model execution and data access for high scalability and enterprise compliance.",
          keyPoints: [
            "Control Plane: Access policies, budget quotas, auth, and audit trails",
            "Model Gateway: Intelligent routing, provider fallback, and caching",
            "Data Plane: Secure vector stores, context partitions, and data compliance"
          ]
        },
        {
          badge: "Graduation",
          heading: "Final Capstone Demo & Marketplace Publication",
          summary: "Publishing verified, production-ready AI solutions to the internal DFS AI Solution Marketplace.",
          keyPoints: [
            "Packaging solutions into reusable micro-services",
            "Live demo day to DFS enterprise leaders and delivery units",
            "Awarding certified DFS AI Builder credentials"
          ]
        }
      ]
    }
  ];

  const current = weeks.find((w) => w.weekNumber === activeWeek) || weeks[0];
  const WeekIcon = current.icon;

  return (
    <section 
      id="program-structure" 
      className="scroll-mt-16 py-16 sm:py-20 text-slate-900 border-t border-slate-200/60 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold mb-3">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Curriculum Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2">
            Structure of the Program
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Select a module to view the week's core concepts and interactive learning materials.
          </p>
        </div>

        {/* 8-Week Horizontal Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {weeks.map((w) => {
            const isActive = activeWeek === w.weekNumber;
            return (
              <button
                key={w.weekNumber}
                onClick={() => setActiveWeek(w.weekNumber)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                <span className={`font-mono text-[10px] px-1 py-0.5 rounded ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  W{w.weekNumber}
                </span>
                <span>{w.conceptTitle}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Module Layout: Left Concept Card (35%) + Right PDF Viewer (65%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Concept Highlight Card */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left h-full min-h-[500px] lg:h-[720px]">
            <div>
              {/* Module Header Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                    Phase: {current.phase}
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-400">
                    Week 0{current.weekNumber}
                  </span>
                </div>

                <div 
                  style={{
                    background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 48%, #095fc5 100%)'
                  }}
                  className="w-9 h-9 rounded-xl text-white flex items-center justify-center shadow-xs shrink-0"
                >
                  <WeekIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Concept Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug mb-3">
                {current.conceptTitle}
              </h3>

              {/* Challenge Highlight */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 mb-4 flex items-start gap-2.5">
                <Target className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-blue-900 block mb-0.5">
                    Challenge Focus
                  </span>
                  <p className="text-xs text-blue-950/80 leading-relaxed font-medium">
                    {current.highlight}
                  </p>
                </div>
              </div>

              {/* Summary Description */}
              <div className="space-y-1 mb-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Module Summary
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {current.summary}
                </p>
              </div>
            </div>

            {/* Key Deliverable Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 mt-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-0.5">
                  Key Practical Deliverable
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {current.deliverable}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Page-by-Page PDF Viewer */}
          <div className="lg:col-span-8 flex flex-col h-full min-h-[640px] lg:h-[720px]">
            <PdfViewer
              pdfUrl={current.pdfUrl || `/materials/week-${activeWeek}.pdf`}
              title={current.conceptTitle}
              weekNumber={activeWeek}
              fallbackSlides={current.slides}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
