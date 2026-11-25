/**
 * User Configuration — Portfolio Data
 *
 * Single source of truth for the front page (HomePage). Edit these arrays
 * to update what's rendered on `/`. The GitHub contribution data on
 * `/profile` is still fetched live via the GitHub GraphQL API.
 */

const userConfig = {
    // --- Identity ---
    name: "Atique Ahmad",
    handle: "atique-ahmad-01",
    tagline: "AI/ML Engineer & Dataset Team Lead — Generative AI, LLMs, RAG & AI agents",
    location: "",
    availability: "open to AI/ML, GenAI & AI agent engineering roles",

    // --- Contact ---
    email: "engr.atique.ahmad@gmail.com",
    website: "https://www.atique-ahmad.site",
    meetingLink: "https://cal.com/atique-ahmad",
    linkedin: "https://www.linkedin.com/in/atiqueahmad/",
    github: "https://github.com/atique-ahmad-01",
    cvUsername: "atique-ahmad-01",

    // --- Bio (short + long) ---
    bioShort:
        "AI/ML Engineer and Dataset Team Lead who builds production generative AI from raw, unstructured data to \
        trusted AI features — fine-tuning, RAG, LangGraph agents, and the evaluation that keeps output grounded.",
    // Strings render as paragraphs; a nested array renders as a bullet list.
    bioLong: [
        "AI/ML Engineer and Dataset Team Lead with nearly 4 years across full-stack development, backend and data \
         engineering, progressing into applied AI and generative AI.",

        "I build the whole path from raw, unstructured data to governed AI systems: document-processing pipelines, \
         dataset curation, fine-tuning, retrieval-augmented generation, LangGraph agents, human-in-the-loop \
         validation, and the evaluation that keeps output trustworthy.",

        "My core skills:",

        [
            "AI Agents — LangChain, LangGraph, LangSmith, MCP",
            "GenAI & LLMs — OpenAI, Anthropic Claude, Gemini, RAG, prompt engineering",
            "Fine-Tuning — LoRA, QLoRA, PEFT, Hugging Face Transformers, vLLM",
            "LLM Evaluation — DeepEval, RAGAS, hallucination and groundedness checks, guardrails",
            "Machine Learning — scikit-learn, PyTorch, deep learning, NLP",
            "Backend & Data — Python, FastAPI, Django REST Framework, ETL, PostgreSQL, MongoDB, Redis",
            "Cloud & MLOps — AWS, Azure, GCP, Docker, Kubernetes, GitHub Actions, CI/CD",
        ],

        "Tenacious about evaluation rigor and audit-ready governance for sensitive data (PII, PHI, SOC 2), \
         with excellent writing and documentation skills.",

        "Open to AI/ML Engineer, GenAI Engineer and AI Agent Engineer roles."
    ],

    // --- Experience ---
    // Each entry supports either `logo` (explicit URL/path like "/logos/foo.svg")
    // or `logoDomain` (e.g. "eclipse.org" — auto-fetched favicon). Omit both
    // to fall back to an initials monogram.
    experience: [
        {
            role: "AI/ML Engineer & Dataset Team Lead",
            org: "Paradigm Networks",
            logoDomain: "paradigmnetworks.ai",
            period: "Jan 2023 — Present",
            location: "Remote",
            highlights: [
                "Factuality model: developed a model that checks whether AI-generated answers are supported by their source documents, so unsupported claims are caught before they reach users.",
                "Led a team in curating a custom dataset of 10,000 in-house data points, then fine-tuned IBM Granite Guardian 3.1 (2B) with LoRA using PyTorch and Hugging Face (Transformers, TRL, PEFT), replacing an earlier ModernBERT prototype.",
                "Reached 91.7% accuracy and 86.7% F1, ahead of GPT-5 (86.3%, +5.4 pts) and Claude 3 Sonnet (74.9%, +16.8 pts), and shipped it as a production API on AWS powering the platform's response-verification checks.",
                "Hallucination model: led a team in curating 10,000 in-house data points, combined with 64K open-source samples, and developed a two-phase fine-tuned Granite detector reaching 98.1% F1 and 97.5% accuracy; owned its production serving.",
                "Deployed both models as GPU microservices: vLLM behind async FastAPI, multi-stage distroless Docker images with weights from S3, shipped via CodeBuild/ECR and GitHub Actions to AWS EKS.",
                "Architected the agentic evaluation platform that scores every AI-agent run from its execution trace across 9 metrics, with local judges that match GPT-5 on 89% of plan-quality verdicts.",
                "Built RAG verification APIs (chunk-level verification, answer relevancy, faithfulness) with multi-cloud LLM support across AWS Bedrock, GCP Vertex AI, Azure OpenAI and OpenAI.",
                "Built a LangGraph PR code-review agent, traced with LangSmith and benchmarked against CodeRabbit.",
                "Integrated evaluation end to end across the Go control server, the LangGraph agent platform and the React/TypeScript web app.",
                "Built full-stack services and REST APIs with Django/DRF and React, optimizing queries and caching for performance.",
                "Engineered guardrails — groundedness and hallucination checks, PII redaction and prompt-injection defense — gating every release that touched sensitive data.",
                "Partnered with data scientists and with business, risk and compliance stakeholders on annotation guidelines, retraining loops and validation of AI outputs.",
                "Shipped continuously with Git, Jira, Agile Scrum and CI/CD on GitHub Actions."
            ]
        },
        {
            role: "Teaching Assistant / Lab Engineer",
            org: "Information Technology University (ITU)",
            logoDomain: "itu.edu.pk",
            period: "Jan 2024 — Jul 2024",
            highlights: [
                "Lectured students on mobile application development and modern frameworks.",
                "Provided hands-on project support and guided final exercises."
            ]
        },
        {
            role: "Full-Stack Developer",
            org: "Clicky.pk",
            logoDomain: "clicky.pk",
            period: "Jan 2022 — Oct 2022",
            highlights: [
                "Developed full-scale business solutions using Django and Node.js.",
                "Delivered responsive and user-engaging interfaces with modern frameworks.",
                "Participated in multi-sprint agile development and learned version control best practices."
            ]
        }
    ],

    // --- Education ---
    education: [
        {
            school: "Information Technology University (ITU)",
            degree: "MS Data Science",
            logoDomain: "itu.edu.pk",
            period: "2025 — Present",
            note: "Focus on machine learning, deep learning, statistical modeling, data analytics, and scalable AI systems."
        },
        {
            school: "Information Technology University (ITU)",
            degree: "BS Computer Engineering",
            logoDomain: "itu.edu.pk",
            period: "2019 — 2023",
            note: "Foundation in software engineering, algorithms, data structures, database systems, and machine learning."
        }
    ],

    // --- Projects / Works ---
    // Card link fields — all optional except `link`:
    //   link         → project home (renders on the title)
    //   srcUrl       → source repo         → footer: "source ↗"
    //   downloadUrl  → release / download   → footer: "download ↗"
    //   prsUrl       → author-filtered PRs  → footer: "my PRs ↗"
    // Each of the footer entries also takes an optional label override
    // (`srcLabel`, `downloadLabel`, `prsLabel`) — e.g. `prsLabel: "7 PRs"`.
    projects: [
        {
            name: "Fine-Tuned Hallucination & Factuality Detection Models",
            year: "2026",
            tags: ["Fine-Tuning", "LoRA / PEFT", "IBM Granite 2B", "PyTorch", "vLLM", "RAG"],
            description:
                "Fine-tuned IBM Granite (2B) with LoRA to check whether an LLM's answer is supported by its source documents. Factuality model: 91.7% accuracy, beating GPT-5 (86.3%). Hallucination model: 98.1% F1. Trained on 20,000+ curated records, tested on 9 public benchmarks, and running in production on vLLM."
        },
        {
            name: "Agentic Evaluation Platform",
            year: "2026",
            tags: ["FastAPI", "MongoDB", "DeepEval", "LLM-as-judge", "Go", "React"],
            description:
                "Production service that scores every AI-agent run from its execution trace on task success, plan quality, workflow completion, hallucination, toxicity and latency. Local small-model judges match GPT-5 on 89% of plan-quality verdicts, cutting dependence on paid APIs."
        },
        {
            name: "TRACE — AI Security & Compliance Platform",
            year: "2026",
            tags: ["LangGraph", "MCP", "RAG", "FastAPI", "Next.js", "AI Agents"],
            description:
                "Open-source platform that scans repositories with Trivy, Semgrep, OSV and Gitleaks, enriches findings with CVE intelligence (NVD, GitHub Advisories, CISA KEV), and uses a LangGraph multi-agent workflow with RAG and permissioned MCP tools to investigate each finding with cited evidence. Fixes are applied only after human approval and verified by re-scanning; includes an evaluation harness comparing base, RAG and agentic-RAG modes.",
            link: "https://trace-psi.me",
            srcUrl: "https://github.com/atique-ahmad-01/trace"
        },
        {
            name: "PII Guardrail — Classical vs Quantum ML",
            year: "2026",
            tags: ["PyTorch", "Hugging Face", "DeBERTa", "LoRA", "PennyLane", "Quantum ML"],
            description:
                "Guardrail that hides personal data before text reaches an LLM: a fast gate flags risky text, then a fine-tuned DeBERTa masker (also Qwen2.5 and SmolLM2 with LoRA) reaches 0.917 F1 with a 1.1% leak rate. Compares an 8-qubit variational quantum classifier with classical baselines under exact, finite-shot and noisy simulation — it matched logistic regression (0.933 vs 0.934 ROC-AUC) and showed a barren plateau.",
            link: "https://pii-guardrail.streamlit.app",
            srcUrl: "https://github.com/atique-ahmad-01/pii-guardrail-qml"
        },
        {
            name: "Retrieval-Augmented Reasoning for Small LLMs",
            year: "2026",
            tags: ["vLLM", "FAISS", "Embeddings", "Qwen3", "Research"],
            description:
                "Turns Qwen3-8B teacher solutions into an embedding memory bank and a 600K-edge reasoning graph, then injects retrieved reasoning into a Qwen3-1.7B student. Gated retrieval lifts accuracy from 75.0% to 85.4%; also reproduces Retrieval-of-Thought (arXiv:2509.21743) with controlled ablations."
        },
        {
            name: "Urdu-MiniGPT — Language Model from Scratch",
            year: "2026",
            tags: ["PyTorch", "SentencePiece", "Transformers", "Streamlit"],
            description:
                "Trained a SentencePiece Unigram tokenizer and a 5.8M-parameter decoder-only Transformer on Urdu news text with no pretrained weights; tuned with a 14-run sweep and evaluated on perplexity and next-token accuracy.",
            link: "https://urdu-minigpt.streamlit.app",
            srcUrl: "https://github.com/atique-ahmad-01/Urdu-MiniGPT"
        },
        {
            name: "LangGraph PR Review Agent",
            year: "2026",
            tags: ["LangGraph", "LangChain", "LangSmith", "AI Agents"],
            description:
                "Multi-step code-review agent that analyses pull-request diffs and publishes review findings, traced with LangSmith and benchmarked against CodeRabbit on verified ground truth."
        },
        {
            name: "co-extract — LLM Document Extraction",
            year: "2026",
            tags: ["OpenAI", "Anthropic Claude", "JSON Schema", "Python"],
            description:
                "Extracts validated JSON from construction change orders, with a confidence score and source quote for each field, and routes inconsistent documents to human review.",
            link: "https://github.com/atique-ahmad-01/co-extract",
            srcUrl: "https://github.com/atique-ahmad-01/co-extract"
        },
        {
            name: "Open Source — DeepEval",
            year: "2026",
            tags: ["Open Source", "LLM Evaluation", "Python", "Benchmarks"],
            description:
                "Contributor to DeepEval, the open-source LLM evaluation framework: added the HaluEval hallucination benchmark.",
            link: "https://github.com/confident-ai/deepeval",
            srcUrl: "https://github.com/confident-ai/deepeval",
            prsUrl: "https://github.com/confident-ai/deepeval/pulls?q=is%3Apr+author%3Aatique-ahmad-01"
        },
        {
            name: "Open Source — lightly",
            year: "2026",
            tags: ["Open Source", "Self-Supervised Learning", "PyTorch"],
            description:
                "Contributor to lightly, the self-supervised learning library: added type annotations for the kNN classifier.",
            link: "https://github.com/lightly-ai/lightly",
            srcUrl: "https://github.com/lightly-ai/lightly",
            prsUrl: "https://github.com/lightly-ai/lightly/pulls?q=is%3Apr+author%3Aatique-ahmad-01"
        },
        {
            name: "Cloud Gaming Latency Prediction",
            year: "2024",
            tags: ["Python", "Machine Learning", "Research", "IEEE"],
            description:
                "Code for the IEEE ICAICCIT 2024 paper on reducing latency in cloud gaming through prediction and system-level solutions.",
            link: "https://doi.org/10.1109/ICAICCIT64383.2024.10912118",
            srcUrl: "https://github.com/atique-ahmad-01/cloud-gaming-latency-prediction"
        },
        {
            name: "Player Engagement Prediction",
            year: "2026",
            tags: ["XGBoost", "Scikit-learn", "Kalman Filters", "Statistics"],
            description:
                "Statistical and ML analysis of online gaming behaviour: an XGBoost classifier predicts player engagement level at 91.7% accuracy, compared against decision tree, random forest and logistic regression, plus Kalman-filter modelling.",
            link: "https://github.com/atique-ahmad-01/ml-statistical-gaming-analysis",
            srcUrl: "https://github.com/atique-ahmad-01/ml-statistical-gaming-analysis"
        },
        {
            name: "E-commerce Sales Prediction",
            year: "2026",
            tags: ["Python", "Scikit-learn", "Random Forest", "Regression"],
            description:
                "End-to-end regression pipeline on the UCI Online Retail dataset; a random forest model reaches R² 0.985, benchmarked against gradient boosting, linear, ridge and lasso regression.",
            link: "https://github.com/atique-ahmad-01/ecommerce-sales-analysis-prediction",
            srcUrl: "https://github.com/atique-ahmad-01/ecommerce-sales-analysis-prediction"
        },
        {
            name: "LLM-Based Messaging Platform",
            year: "2024",
            tags: ["Python", "LLM", "AWS", "Azure", "Django", "FastAPI"],
            description:
                "Production-grade messaging application integrating Large Language Models for intelligent conversation assistance, automation, and real-time response generation. Deployed on AWS and Azure."
        },
        {
            name: "AI Content Generator",
            year: "2024",
            tags: ["Python", "OpenAI API", "FastAPI", "React", "LangChain"],
            description:
                "Intelligent content generation tool using advanced prompt engineering and LLM integration for automated, context-aware content creation at scale."
        },
        {
            name: "CNN Deep Metric Learning for Image Retrieval",
            year: "2025",
            tags: ["PyTorch", "CNN", "Deep Metric Learning", "Triplet Loss", "Contrastive Loss"],
            description:
                "CNN trained to learn 128-dimensional embeddings for image retrieval — similar images cluster together in embedding space. Benchmarked Contrastive Loss with Random Pairs, Triplet Loss with Random Triplets, and Triplet Loss with Hard Negative Mining.",
            link: "https://github.com/atique-ahmad-01/DL_A3_MSDS25030",
            srcUrl: "https://github.com/atique-ahmad-01/DL_A3_MSDS25030"
        },
        {
            name: "Data Analytics Platform",
            year: "2024",
            tags: ["Python", "Pandas", "Scikit-learn", "ML", "Visualization"],
            description:
                "Advanced analytics platform with machine learning models for predictive analysis, business intelligence, and automated ETL pipelines."
        },
        {
            name: "Data Visualization Dashboard",
            year: "2024",
            tags: ["React", "Django", "PostgreSQL", "DRF", "Charts.js"],
            description:
                "Financial technology platform with real-time analytics, secure transactions, advanced reporting, and interactive data visualizations."
        },
        {
            name: "Cloud Infrastructure Suite",
            year: "2024",
            tags: ["AWS", "Azure", "Docker", "Terraform", "CI/CD"],
            description:
                "Scalable cloud infrastructure solution with automated deployment pipelines, monitoring dashboards, and cost optimization across AWS and Azure."
        },
        {
            name: "Video Editing Agency Website",
            year: "2023",
            tags: ["React.js", "TailwindCSS", "Next.js", "Vercel"],
            description:
                "Premium conversion-optimized website for a video editing agency, showcasing services, portfolio, and client success stories with a modern UI.",
            link: "https://www.clipmasters.uk/",
            srcUrl: "https://github.com/atique-ahmad-ch/clipmasters"
        },
        {
            name: "UniMerchant — E-Commerce Store",
            year: "2023",
            tags: ["HTML", "CSS", "JavaScript", "E-Commerce", "Payment Integration"],
            description:
                "Full e-commerce storefront for a UK-based home furnishings retailer. Product catalogue across Furniture, Shelves, Kitchen & Home Decor, shopping cart, multi-method checkout, and WhatsApp support integration.",
            link: "https://www.unimerchant.store/"
        },
        {
            name: "E-Learning Platform",
            year: "2022",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            description:
                "Full-featured e-learning platform for Nivedu.co with course management, interactive content delivery, progress tracking, and user authentication."
        }
    ],

    // --- Publications (papers, thesis, conference work) ---
    // Unified schema for every publication:
    //   title           → the paper's title
    //   venue           → the TYPE ("Conference Paper", "Journal Article",
    //                     "Thesis", "Article", …)
    //   publishedIn     → the specific place
    //   publishedInUrl  → optional link on the publisher name
    //   date, authors, link → the paper itself
    publications: [
        {
            title: "Advancing Cloud Gaming: Addressing Latency Challenges through Research and Innovative Solutions",
            venue: "Conference Paper",
            publishedIn: "IEEE ICAICCIT 2024",
            publishedInUrl: "https://doi.org/10.1109/ICAICCIT64383.2024.10912118",
            date: "2024",
            link: "https://doi.org/10.1109/ICAICCIT64383.2024.10912118"
        }
    ],

    // --- Writings / Blogs ---
    blogs: [],

    // Author profiles (surfaced in Contact / footer if you want)
    profiles: {},

    // --- Skills (grouped per CV Technical Skills section) ---
    stack: {
        languages: [
            "Python", "SQL", "TypeScript", "Go", "JavaScript"
        ],
        "ai agents": [
            "LangChain", "LangGraph", "LangSmith", "MCP", "Multi-Agent Workflows", "Human-in-the-Loop"
        ],
        "genai / llms": [
            "OpenAI", "Anthropic Claude", "Gemini", "RAG", "Prompt Engineering",
            "Fine-tuning (LoRA, QLoRA, PEFT)", "vLLM"
        ],
        "llm evaluation": [
            "DeepEval", "RAGAS", "Hallucination Checks", "Groundedness", "Guardrails"
        ],
        "machine learning": [
            "Scikit-learn", "Transformers (HF)", "PyTorch", "Deep Learning", "NLP"
        ],
        "data engineering": [
            "ETL / ELT", "Pandas", "NumPy", "Data Pipelines"
        ],
        backend: [
            "FastAPI", "Django / DRF", "REST APIs"
        ],
        frontend: [
            "React", "Next.js", "Tailwind CSS"
        ],
        databases: [
            "PostgreSQL", "MongoDB", "Redis", "FAISS", "Qdrant"
        ],
        "cloud & mlops": [
            "AWS", "Azure", "GCP", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "MLOps"
        ],
        compliance: [
            "PII", "PHI", "SOC 2"
        ]
    },

    // --- Orgs / Companies / Ecosystems worked with ---
    // Each entry supports `logo` (explicit URL/path) or `logoDomain`
    // (favicon fallback). `url` is the official landing page.
    orgs: [
        {
            name: "Paradigm Networks",
            url: "https://paradigmnetworks.ai",
            logoDomain: "paradigmnetworks.ai"
        },
        {
            name: "Information Technology University",
            url: "https://itu.edu.pk",
            logoDomain: "itu.edu.pk"
        },
        {
            name: "Clicky.pk",
            url: "https://clicky.pk",
            logoDomain: "clicky.pk"
        },
        {
            name: "Hugging Face",
            url: "https://huggingface.co",
            logoDomain: "huggingface.co"
        },
        {
            name: "PyTorch",
            url: "https://pytorch.org",
            logoDomain: "pytorch.org"
        },
        {
            name: "AWS",
            url: "https://aws.amazon.com",
            logoDomain: "aws.amazon.com"
        },
        {
            name: "Microsoft Azure",
            url: "https://azure.microsoft.com",
            logoDomain: "azure.microsoft.com"
        }
    ]
};

export default userConfig;
