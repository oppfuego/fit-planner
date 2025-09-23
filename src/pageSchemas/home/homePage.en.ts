import {PageSchema} from "@/components/constructor/page-render/types";
import {COMPANY_NAME} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Smarter Training, Polished Plans`,
        description: `${COMPANY_NAME} helps you get structured, professional workout plans. Sign up, set your goals, and start training with confidence.`,
        keywords: ["fitness", "training plan", "personal coach", "fit planner"],
        canonical: "/",
        ogImage: {
            title: COMPANY_NAME,
            description: `Your goals, your plan — powered by ${COMPANY_NAME}.`,
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        // 🏋️ Hero Banner
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: `Welcome to ${COMPANY_NAME}`,
                description: `Your personal fitness partner. Create an account, set your goals, and receive a professional training plan tailored to you.`,
                centerTitle: true,
                centerDescription: true,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image7",
                alt: "Athlete running",
                width: "100%",
                height: "400px",
            },
        },

        // 🔹 Animated strip
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "🏆 Personalized training plans",
                "📊 Track your progress easily",
                "⚡ Quick registration & setup",
                "💪 Guided workouts by professionals",
            ],
        },

        // 🔹 Horizontal timeline — How it works
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "10,000+",
                        description: "Users transformed their fitness journey with us.",
                        centerTitle: true,
                        centerDescription: true,
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "500+",
                        description: "Personalized plans created by certified trainers.",
                        centerTitle: true,
                        centerDescription: true,
                    }
                },
                {
                    block: {
                        type: "text",
                        title: "24/7",
                        description: "Access your dashboard and training plan anytime.",
                        centerTitle: true,
                        centerDescription: true,
                    }
                },
            ],
        },


        // 🔹 Split section: video + text
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "video",
                src: "fitPlannerDemo",
                width: "100%",
                height: "360px",
                alt: "FitPlanner in action",
                controls: true,
            },
            right: {
                type: "text",
                title: "Train Smarter, Not Harder",
                description: `Our platform adapts to your needs — whether you're a beginner or advanced. You’ll always have a plan that matches your goals.`,
            },
        },

        // 🔹 Final CTA
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: `Ready to transform your fitness journey?`,
                description: `Join ${COMPANY_NAME} today and start training with clarity and structure.`,
                centerTitle: true,
                centerDescription: true,
            },
        },

        // 🔹 Grid — categories
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image11",
                    title: "Strength",
                    description: "Custom workouts to build muscle effectively.",
                    buttonText: "Start Now",
                    buttonLink: "/sign-up",
                },
                {
                    image: "image10",
                    title: "Cardio",
                    description: "Structured running, cycling, and endurance plans.",
                    buttonText: "Start Now",
                    buttonLink: "/sign-up",
                },
                {
                    image: "image5",
                    title: "Flexibility",
                    description: "Mobility and stretching sessions for balance.",
                    buttonText: "Start Now",
                    buttonLink: "/sign-up",
                },
            ],
        },

        // 🔹 FAQ
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} provides structured training plans created by professional coaches, tailored to your goals.`,
                },
                {
                    question: "How do I start?",
                    answer: "Simply sign up, buy tokens, and fill in your fitness details to receive your plan.",
                },
                {
                    question: "Who creates the plans?",
                    answer: "All training programs are designed by certified professionals.",
                },
                {
                    question: "Can I track my progress?",
                    answer: "Yes — your dashboard lets you follow and measure results easily.",
                },
            ],
        },
    ],
};

export default schema;
