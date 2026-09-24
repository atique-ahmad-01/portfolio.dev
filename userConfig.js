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
    tagline: "Machine Learning & Full-Stack Engineer — LLM fine-tuning, RAG & AI agents",
    location: "Lahore, PK",
    availability: "open to ML/AI & full-stack AI roles",

    // --- Contact ---
    email: "engr.atique.ahmad@gmail.com",
    website: "https://www.atique-ahmad.site",
    linkedin: "https://www.linkedin.com/in/atiqueahmad/",
    github: "https://github.com/atique-ahmad-01",
    cvUsername: "atique-ahmad-01",

    // --- Bio (short + long) ---
    bioShort:
        "ML & full-stack engineer who takes AI from training to production — fine-tuned models that \
        outperform GPT-5 at catching hallucinations, served on vLLM and AWS, inside products people use.",
    bioLong: [
        "I'm a software engineer with 3+ years of experience across machine learning, LLMs and full-stack \
         development. At Paradigm Networks I build the systems that keep AI outputs reliable, and I'm \
         completing an MS in Data Science at ITU Lahore, building on a BS in Computer Engineering from the \
         same university.",

        "I fine-tune small language models for RAG reliability. My factuality detector, an IBM Granite model \
         trained with LoRA on 10K in-house samples, reaches 91.7% accuracy and outperforms GPT-5, Gemini and \
         Claude on the same test set, at a fraction of the cost.",

        "I don't stop at the model. I serve models on vLLM behind async FastAPI, package them as hardened \
         Docker images and ship them to AWS EKS through CI/CD. I also build the evaluation platform that \
         scores every AI-agent run, LangGraph agents like our PR code reviewer, and the Go and React services \
         that tie it all together.",

        "My research is on retrieval-augmented reasoning for small LLMs: retrieving reasoning from an 8B \
         teacher lifted a 1.7B model from 75.0% to 85.4% accuracy. I'm open to ML/AI and full-stack AI roles, \
         and to research opportunities."
    ],

    // --- Experience ---
    // Each entry supports either `logo` (explicit URL/path like "/logos/foo.svg")
    // or `logoDomain` (e.g. "eclipse.org" — auto-fetched favicon). Omit both
    // to fall back to an initials monogram.
    experience: [
        {
            role: "Software Engineer",
            org: "Paradigm Networks",
            logoDomain: "paradigmnetworks.ai",
            period: "Jan 2023 — Present",
            location: "Remote",
            highlights: [
                "Owned the full pipeline for a RAG factuality detector: fine-tuned IBM Granite Guardian 3.1 (2B) with rsLoRA and a custom prompt-loss-weighted trainer, reaching 91.7% accuracy and 86.7% F1 and beating GPT-5 on the same test set.",
                "Co-developed a hallucination detector (98.1% F1) trained on 74K open-source and in-house samples, and owned its production serving.",
                "Deployed both models as GPU microservices: vLLM behind async FastAPI, multi-stage distroless Docker images with weights from S3, shipped via CodeBuild/ECR and GitHub Actions to AWS EKS.",
                "Architected the agentic evaluation platform that scores every AI-agent run from its execution trace across 9 metrics, with local judges that match GPT-5 on 89% of plan-quality verdicts.",
                "Built RAG verification APIs (chunk-level verification, answer relevancy, faithfulness) with multi-cloud LLM support across AWS Bedrock, GCP Vertex AI, Azure OpenAI and OpenAI.",
                "Built a LangGraph PR code-review agent, traced with LangSmith and benchmarked against CodeRabbit.",
                "Integrated evaluation end to end across the Go control server, the LangGraph agent platform and the React/TypeScript web app.",
                "Built full-stack services and REST APIs with Django/DRF and React, optimizing queries and caching for performance."
            ]
        },
        {
            role: "Lab Engineer",
            org: "Information Technology University (ITU)",
            logoDomain: "itu.edu.pk",
            period: "Jan 2024 — Jul 2024",
            location: "Lahore, PK",
            highlights: [
                "Lectured students on mobile application development and modern frameworks.",
                "Provided hands-on project support and guided final exercises."
            ]
        },
        {
            role: "Full Stack Developer & Intern",
            org: "Clicky.pk",
            logoDomain: "clicky.pk",
            period: "Jan 2022 — Oct 2022",
            location: "Lahore, PK",
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
            location: "Lahore, PK",
            note: "Focus on machine learning, deep learning, statistical modeling, data analytics, and scalable AI systems."
        },
        {
            school: "Information Technology University (ITU)",
            degree: "BS Computer Engineering",
            logoDomain: "itu.edu.pk",
            period: "2019 — 2023",
            location: "Lahore, PK",
            note: "Foundation in software engineering, algorithms, data structures, database systems, and AI/ML."
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
            name: "Hallucination & Factuality Detection in LLMs",
            year: "2026",
            tags: ["PyTorch", "LoRA / PEFT", "IBM Granite", "ModernBERT", "vLLM", "RAG"],
            description:
                "Fine-tuned small language models that judge whether a RAG answer is grounded in its context. The Granite factuality model reaches 91.7% accuracy (GPT-5: 86.3%) and the hallucination model 98.1% F1, evaluated across 9 public benchmarks and served in production with vLLM."
        },
        {
            name: "Agentic Evaluation Platform",
            year: "2026",
            tags: ["FastAPI", "MongoDB", "DeepEval", "LLM-as-judge", "Go", "React"],
            description:
                "Production service that scores every AI-agent run from its execution trace on task success, plan quality, workflow completion, hallucination, toxicity and latency. Local small-model judges match GPT-5 on 89% of plan-quality verdicts, cutting dependence on paid APIs."
        },
        {
            name: "Retrieval-Augmented Reasoning for Small LLMs",
            year: "2026",
            tags: ["vLLM", "FAISS", "Embeddings", "Qwen3", "Research"],
            description:
                "Turns Qwen3-8B teacher solutions into an embedding memory bank and a 600K-edge reasoning graph, then injects retrieved reasoning into a Qwen3-1.7B student. Gated retrieval lifts accuracy from 75.0% to 85.4%; also reproduces Retrieval-of-Thought (arXiv:2509.21743) with controlled ablations."
        },
        {
            name: "LangGraph PR Review Agent",
            year: "2026",
            tags: ["LangGraph", "LangChain", "LangSmith", "AI Agents"],
            description:
                "Multi-step code-review agent that analyses pull-request diffs and publishes review findings, traced with LangSmith and benchmarked against CodeRabbit on verified ground truth."
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
    publications: [],

    // --- Writings / Blogs ---
    blogs: [],

    // Author profiles (surfaced in Contact / footer if you want)
    profiles: {},

    // --- Skills (grouped per CV Technical Skills section) ---
    stack: {
        languages: [
            "Python", "Go", "TypeScript", "JavaScript", "SQL"
        ],
        "llm / genai": [
            "LLM Fine-tuning", "PEFT / LoRA", "RAG", "AI Agents", "LLM Evaluation",
            "Prompt Engineering", "LangChain", "LangGraph", "LangSmith", "DeepEval", "RAGAS"
        ],
        "deep learning": [
            "PyTorch", "Transformers (HF)", "TRL", "TensorFlow", "Computer Vision", "NLP"
        ],
        "ml & data": [
            "Scikit-learn", "XGBoost", "FAISS", "Pandas", "NumPy", "Tableau", "Power BI"
        ],
        backend: [
            "FastAPI", "Django / DRF", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "Redis"
        ],
        frontend: [
            "React", "Next.js", "Tailwind CSS", "HTML / CSS"
        ],
        "mlops & cloud": [
            "vLLM", "Docker", "Kubernetes (EKS)", "Helm", "GitHub Actions",
            "AWS (S3, ECR, EKS, Bedrock)", "GCP Vertex AI", "Azure OpenAI"
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
