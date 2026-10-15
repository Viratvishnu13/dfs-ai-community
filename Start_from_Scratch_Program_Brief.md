# Start from Scratch

## Program brief and working source of truth

**Start from Scratch** is an eight-week Hyper-Paced Learning program for absolute beginners who want to learn how to build useful AI systems. It begins with the mindset and vocabulary needed to work well with AI, then moves through chatbots, Retrieval-Augmented Generation (RAG), agents, multi-agent systems, use-case design, team building, and a final showcase.

The program is deliberately practical. Its purpose is not to teach participants to use the most advanced architecture available. It is to help them understand a real problem, select the simplest appropriate AI approach, collaborate well, and explain what they built with clarity and responsibility.

> **Core idea:** Learn independently. Think together. Build together. Show the work. Improve through feedback.

---

## 1. Program identity

### Hyper-Paced Learning

Hyper-Paced Learning does **not** mean rushed learning. It means that every hour has a clear purpose.

- Individual time is used for preparation and foundational understanding.
- Team time is used for discussion, decisions, building, and feedback.
- Presentation time is used to demonstrate working output, explain choices, and learn from others.

The model avoids spending live sessions on passive teaching. Participants arrive prepared so that the cohort can use synchronous time for the work that benefits most from collaboration.

### The intended transformation

By the end of the program, participants should be able to:

- Collaborate with AI effectively, ethically, and safely.
- Distinguish between a simple chatbot, a RAG application, a single AI agent, and a multi-agent system.
- Decide when a more complex architecture is justified and when it is not.
- Build a focused AI solution as part of a team.
- Use GitHub to collaborate and make work visible.
- Demonstrate, explain, test, and improve a solution using feedback.

---

## 2. Entry requirement

Participation begins with self-paced preparation.

Every participant must complete **four required recordings** before joining the live Start from Scratch program. The titles and detailed content of the four recordings are to be supplied by the program team.

This is a prerequisite, not optional homework. It creates a shared starting line so that live sessions can be used for contribution rather than catch-up.

### Why the prerequisite matters

- Participants enter with a common baseline.
- Team discussions can move faster and be more useful.
- Designated leads do not need to reteach foundational material during build time.
- The cohort can spend more time building, reviewing, and learning from real outcomes.

---

## 3. The learning model

### Flipped classroom

The program operates on a flipped-classroom model. Participants learn the core concepts before meeting, then use group time to apply those concepts.

The weekly rhythm is:

1. **Independent preparation** - Participants complete assigned articles, videos, recordings, and pre-reads.
2. **Team brainstorming and alignment** - Teams discuss the learning, identify a plan, divide work, and resolve questions.
3. **Synchronous building and presentation** - Teams build, demonstrate their progress, receive feedback, and learn from other teams.

### Team structure

- Participants are organized into **four teams**: Group A, Group B, Group C, and Group D.
- Each team is supported by a designated lead.
- Team leads are responsible for helping practitioners complete required preparation and for gathering timely updates.
- GitHub is the expected collaboration space for shared work, change tracking, and integration.

### Working model for build days

For intensive build sessions, one meeting room operates as the **headroom** for coordination, check-ins, support, and regrouping. Teams may use separate breakout areas for focused work, then return with a complete solution by end of day and enough time to prepare their presentation.

---

## 4. Presentation and participation standards

### Final presentation format

The final presentation expectation is **15 minutes per team**:

- **5 minutes** for a live demo.
- **10 minutes** for discussion, questions, and feedback.

Earlier references to a 10-minute team slot and a 45-minute total session are superseded by this 15-minute-per-team format.

### Four presentation lenses

Participants should be able to communicate their work from four perspectives:

- **Leadership** - Why the work matters, what value it creates, and what decision is needed.
- **Technical** - How the system works, what data and tools it uses, and what choices were made.
- **Sales** - Who benefits, what problem it solves, and why the solution is compelling.
- **Teaching** - How the idea works in clear, accessible language.

### What good looks like

Participants and teams are expected to:

- Follow enterprise standards and adopt relevant best practices.
- Compare their solution with other teams' work and existing products.
- Keep the problem statement short, clear, and user-centered.
- Keep slides minimal.
- Talk less and show more through a live demo.
- Test with real end users where possible.
- Present, receive feedback, and learn from every other team.
- Use clear technical language instead of relying on excessive storytelling.
- Take the initiative seriously, invest time in it, and use the eight weeks as a genuine growth opportunity.

---

## 5. Curriculum

## Week 1 - AI Fluency and Mental Models

Week 1 establishes the mindset for collaborating with AI effectively, ethically, and safely.

The program uses Anthropic's AI Fluency Framework, with particular emphasis on the **4Ds**:

- **Delegation** - Decide what work AI should do and what work should remain with people.
- **Description** - Give AI clear context, goals, constraints, and desired outcomes.
- **Discernment** - Judge the quality, reliability, and appropriateness of AI output.
- **Diligence** - Use AI responsibly, verify results, and stay accountable for decisions.

The goal is to establish the mental models participants need before they begin using technical tools.

## Week 2 - From Chat to IDE: Introduction to Vibe Coding

Week 2 moves participants from web-based chat interfaces to practical development environments.

All four groups receive the same problem statement: **The Automated Triage Agent**. The bot acts as a Level 1 Site Reliability Engineer (SRE), classifies technical errors, and suggests resolutions.

The groups approach this common problem through different environments:

| Group | Environment | Learning focus |
|---|---|---|
| A | Python plus local/open LLM through Google Colab | Self-hosted and open-source AI exploration |
| B | Python SDK plus cloud API | Core developer workflow with commercial models |
| C | n8n | Visual workflow orchestration |
| D | Next.js plus frontend vibe coding using Antigravity | Frontend-oriented AI application building |

The purpose is not to crown one environment as best. It is to show that the same product problem can be approached through different technical paths.

### Week 2 takeaways

- Test extensively with end users.
- Follow enterprise standards.
- Compare with other teams' products, existing products, and relevant prior work.
- Adopt applicable best practices.
- Keep slides minimal and the problem statement short.
- Use clear IT and technical terminology.
- Talk less; show more.
- Prepare for the next week with at least one coding environment ready.
- Complete pre-reads, create a plan, align with the team, and involve the designated lead when needed.
- Use GitHub to collaborate with team members.

## Week 3 - RAG: Understand First, Build Together

Week 3 introduces RAG and changes the weekly format. Rather than treating the week as a single build cycle, participants spend the week understanding the concept and then build together in a one-day, hackathon-style session.

### Learning objective

Participants should understand that RAG helps an AI system retrieve relevant information from external knowledge sources and use it to generate more grounded responses.

The Week 3 learning includes:

- RAG fundamentals.
- RAG architectures and the trade-offs between them.
- Retrieval methods, including keyword search, vector search, and hybrid search.
- Reranking and its role in improving the information passed to a model.

### Week 3 learning resources

#### Articles

1. [14 Types of RAG](https://www.meilisearch.com/blog/rag-types) - an overview of RAG patterns and architecture trade-offs.
2. [RAG: Part 5: Retrieval](https://medium.com/@j13mehul/rag-part-5-retrieval-93ef1be7ac07) - retrieval, search methods, and reranking.

#### Videos

1. [RAG Crash Course for Beginners](https://www.youtube.com/watch?v=swvzKSOEluc)
2. [What is Retrieval-Augmented Generation (RAG)?](https://www.youtube.com/watch?v=T-D1OfcDW1M)
3. [Additional RAG video resource](https://www.youtube.com/watch?v=CdOsH01m55Y) - title to be confirmed.

### Week 3 build format

1. Study the assigned material during the week.
2. Come to the team with a simple build plan, a coding environment, and questions.
3. Use the headroom and breakout model during the hackathon day.
4. Build a complete team solution by end of day.
5. Reserve enough time to prepare the 5-minute demo and 10-minute discussion.

## Week 4 - Build the First AI Agent

Week 4 is intended to introduce the first single AI agent. This is the transition from a RAG application to a system that can work toward a goal and choose to use tools.

The recommended scope is deliberately constrained:

- One clear user goal.
- One AI agent.
- One or two tools, such as search, document retrieval, an API, a calculator, or a safe code runner.
- A simple loop: understand the goal, choose a tool, observe the result, then respond or take the next step.
- Clear stop conditions and human escalation where appropriate.

The aim is to teach the difference between a chatbot, RAG application, and agent without forcing advanced features before they are needed.

### Week 4 quality bar

Teams should be able to:

- Demonstrate the agent with realistic prompts.
- Show at least one successful case and one failure or edge case.
- Explain what tools the agent used and why.
- Explain why an agent is more appropriate than a normal chatbot or RAG-only application for that use case.
- Keep the scope narrow and credible rather than claiming the agent can do everything.

## Week 5 - Multi-Agent Systems

Week 5 is the current proposed stronger follow-on to the first-agent week. It introduces delegation and collaboration among specialized agents.

The central question is:

> When is one agent not enough?

Teams may build a small, intentional multi-agent system with roles such as:

- **Orchestrator** - receives the task and delegates work.
- **Researcher** - retrieves information from web or RAG sources.
- **Analyst or solver** - turns findings into an answer or plan.
- **Reviewer** - checks whether the output is complete, grounded, and useful.
- **Human** - remains the final decision-maker for uncertain or consequential actions.

An extension of the Automated Triage Agent can be used as the challenge:

1. Receive an incident or error report.
2. Delegate research into known errors and relevant documentation.
3. Propose likely causes and resolutions.
4. Review the response for evidence and uncertainty.
5. Return a structured response with evidence, confidence, and escalation guidance.

The lesson is not that more agents are always better. Teams should compare a single-agent and multi-agent approach, then explain what work is actually delegated, why separate roles help, and what added complexity costs in speed, debugging, and maintenance.

## Week 6 - Choose the Next Use Case

Week 6 is for selecting and scoping the next use case. Teams should not rush straight into building.

Each team should leave the week with:

- A concise problem statement.
- A target user and a clearly described pain point.
- A proposed solution and a measurable success condition.
- A justified architecture choice: chatbot, RAG, single agent, multi-agent system, or a combination.
- Identified data sources, tools, risks, and human-control points.
- A team plan, GitHub setup, assigned responsibilities, and presentation plan.
- Feedback from at least one potential user or another team.

## Week 7 - Build the Solution

Week 7 is the focused capstone build week. Teams turn the scoped Week 6 idea into a complete, demoable solution.

The intended build standard is:

- Build from the agreed scope instead of expanding indefinitely.
- Use GitHub as the visible collaboration trail.
- Test with realistic scenarios.
- Prepare a working live demo.
- Reserve time for the 5-minute demo and 10-minute discussion.
- Explain why the selected architecture is the simplest appropriate one.

## Week 8 - Connect the Dots

Week 8 connects the full learning journey: AI fluency, chatbot foundations, RAG, agents, multi-agent systems, architecture choice, team delivery, and reflection.

The final showcase should answer:

- What problem did the team solve?
- Who is the intended user?
- Why was this architecture chosen?
- What does the live demo prove?
- What failed or changed during building?
- What user or peer feedback was received?
- What would be the next responsible step if the solution became a real product?

---

## 6. Architecture philosophy

The program uses an architecture progression as a learning map, not as a mandate to build the most complex system.

1. **Simple chatbot** - use when users need straightforward answers.
2. **RAG application** - use when answers must be grounded in external or company knowledge.
3. **Single AI agent** - use when a system needs to plan or choose tools to achieve a goal.
4. **Multi-agent system** - use when a task genuinely benefits from multiple specialized roles working together.
5. **Autonomous workflow** - use when actions must run across systems with triggers, schedules, retries, and approvals.
6. **Enterprise AI agent** - use when security, governance, monitoring, access control, scale, and organizational integration are essential.

### Program principle

> The best AI architecture is not the most advanced one. It is the simplest one that solves the business problem safely and credibly.

For a beginner cohort, the immediate focus should remain on chatbots, RAG, focused single agents, and carefully constrained multi-agent examples. Enterprise governance and autonomous workflow topics can be introduced as future directions without becoming premature build requirements.

---

## 7. Roles and accountability

### Participants

Participants are expected to:

- Complete self-paced prerequisites and weekly preparation.
- Arrive with a plan, questions, and a working environment.
- Contribute visibly through GitHub and team collaboration.
- Test ideas, seek feedback, and improve the work.
- Respect time limits and prepare for demonstrations.

### Designated team leads

Team leads are expected to:

- Ensure practitioners complete required videos and pre-reads.
- Gather status updates in time.
- Help the team align on scope and decisions.
- Escalate blockers or support needs when appropriate.
- Keep collaboration constructive and focused.

### Program and leadership stakeholders

Leadership can use the program to see a visible progression from readiness to working output.

The model makes the following observable:

- Preparation and prerequisite completion.
- Team collaboration and participation.
- Architecture choices and technical reasoning.
- Build progress and working artifacts.
- User feedback, peer feedback, and iteration.
- Final demonstrations and lessons learned.

---

## 8. Decisions that still need confirmation

The following details are not yet fixed in the available program information:

- Titles, hosts, duration, and completion mechanism for the four prerequisite recordings.
- Exact calendar dates, venues, and arrival times for each week and build day.
- The final agenda that accommodates four teams at 15 minutes each.
- The exact technical stack or tool limits for Week 4 and Week 5.
- Whether Week 5 will remain a multi-agent build week or be adjusted before rollout.
- Assessment, recognition, certificate, or completion criteria.
- Named team leads and escalation contacts.

---

## 9. Short version

Start from Scratch is a practical, eight-week AI-building program for beginners. Participants complete four recordings before joining, then learn through a flipped-classroom model: prepare independently, think and build in teams, demonstrate working output, receive feedback, and improve.

The program progresses from AI fluency to chatbots, RAG, agents, multi-agent systems, use-case selection, capstone building, and a final showcase. Its standard is simple: choose the simplest responsible architecture, build something useful, show the work, and learn together.
