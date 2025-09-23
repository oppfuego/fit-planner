import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started — ${COMPANY_NAME}`,
        description: `Learn how to begin your fitness journey with ${COMPANY_NAME}: create an account, explore features, purchase tokens, and receive your personalized training plan.`,
        keywords: [
            `${COMPANY_NAME} get started`,
            "fitness app onboarding",
            "personal workout plan",
            "buy tokens training",
            "FitPlanner guide"
        ],
        canonical: "/get-started",
        ogImage: {
            title: `Get Started with ${COMPANY_NAME}`,
            description: "Follow simple steps to unlock your personalized training plan.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        // 🟢 Hero section
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Getting Started with FitPlanner",
                description:
                    "Your path to smarter fitness begins here. Create your account, explore our features, and get your personalized workout plan from certified trainers.",
                centerTitle: true,
                centerDescription: true,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                alt: "FitPlanner app preview",
                width: "100%",
                height: "300px",
            },
        },

        // 🟢 Highlight strip
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "⚡ Quick registration",
                "💳 Buy tokens for your plans",
                "📋 Enter your fitness data",
                "📄 Receive a personalized training plan",
                "🏋️ Start training with guidance",
            ],
        },

        // 🟢 Timeline with key onboarding steps
        {
            type: "custom",
            component: "Timeline",
            steps: [
                {
                    title: "Step 1 — Sign Up / Log In",
                    description: "Create your FitPlanner account or log in to start your journey.",
                },
                {
                    title: "Step 2 — Explore the Platform",
                    description: "Get familiar with your dashboard and available features.",
                },
                {
                    title: "Step 3 — Buy Tokens",
                    description: "Purchase tokens to unlock your personalized training plans.",
                },
                {
                    title: "Step 4 — Enter Your Data",
                    description: "Fill out a short form with your fitness level, goals, and preferences.",
                },
                {
                    title: "Step 5 — Receive Your Plan",
                    description: "Download or view your training plan created by professionals.",
                },
                {
                    title: "Step 6 — Start Training",
                    description: "Follow your structured plan and track progress every step of the way.",
                },
            ],
        },

        // 🟢 Grid with benefits
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image8",
                    title: "Personalized Approach",
                    description: "Every plan is unique — designed for your goals, lifestyle, and fitness level.",
                },
                {
                    image: "image5",
                    title: "Simple & Clear",
                    description: "No guesswork. Just structured workouts and clear guidance from trainers.",
                },
                {
                    image: "image11",
                    title: "Continuous Support",
                    description: "Stay motivated with progress tracking and expert-backed recommendations.",
                },
            ],
        },

        // 🟢 Section with visual demo
        {
            type: "media",
            mediaType: "video",
            src: "getStartedIntro",
            alt: "FitPlanner demo video",
            width: "100%",
            height: "480px",
            controls: true,
            autoPlay: true,
        },

        // 🟢 Quick FAQ
        {
            type: "faq",
            items: [
                {
                    question: "Do I need to be experienced?",
                    answer: "Not at all. FitPlanner is designed for beginners as well as advanced athletes.",
                },
                {
                    question: "How do I get my training plan?",
                    answer: "Fill in your data, and within minutes you’ll receive your personalized plan.",
                },
                {
                    question: "Can I adjust my plan?",
                    answer: "Yes, you can update your preferences and goals anytime.",
                },
            ],
        },

        // 🟢 Final motivation
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Your Fitness Journey Starts Today",
                description:
                    "With FitPlanner, you’re never alone. From the first step to every workout, our professional trainers guide you towards real results. Sign up, get your plan, and make your goals a reality.",
                centerTitle: true,
                centerDescription: true,
            },
        },
    ],
};

export default schema;
