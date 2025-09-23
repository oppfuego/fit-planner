import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "About Us — FitPlanner",
        description:
            "FitPlanner is your personal guide to smarter, more effective workouts. Professional trainers help you achieve your goals with structure, clarity, and motivation.",
        keywords: [
            "FitPlanner",
            "fitness planner",
            "personal training",
            "workout plans",
            "fitness coaching",
        ],
        canonical: "/about-us",
        ogImage: {
            title: "FitPlanner",
            description: "Smarter workouts. Professional guidance. Real results.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Welcome to FitPlanner",
                description:
                    "FitPlanner connects you with certified trainers who create structured, personalized workout plans. Clear guidance, real progress, and ongoing motivation — all in one place.",
                centerTitle: true,
                centerDescription: true,
            },
            right: {
                type: "custom",
                component: "LogoBlock",
                width: 600,
                height: 180,
            },
        },

        // 🔹 Блок про FitPlanner
        {
            type: "section",
            left: {
                type: "text",
                title: "Why FitPlanner?",
                description: "Consistency is the hardest part of training. That’s why we:",
                bullets: [
                    "Build personalized plans for every user",
                    "Provide step-by-step workouts designed by professionals",
                    "Offer ongoing tracking to keep you motivated",
                ],
                centerTitle: false,
                centerDescription: false,
            }
            ,
            right: {
                type: "media",
                mediaType: "image",
                src: "image8",
                alt: "Trainer helping client",
                width: "100%",
                height: "320px",
            },
        },

        // 🔹 Відео-презентація
        {
            type: "media",
            mediaType: "video",
            src: "fitPlannerDemo",
            alt: "FitPlanner in action",
            width: "100%",
            height: "480px",
            controls: true,
            autoPlay: false,
        },

        // 🔹 Процес
        {
            type: "section",
            left: {
                type: "text",
                title: "Our Process",
                description: "We keep things simple, structured, and motivating:",
                bullets: [
                    "Assessment — Tell us your goals and experience",
                    "Planning — Get your personalized roadmap",
                    "Training — Follow clear, structured workouts",
                    "Tracking — See measurable progress over time",
                ]
            }
            ,
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                alt: "Athlete training",
                width: "100%",
                height: "320px",
            },
        },

        // 🔹 FAQ
        {
            type: "faq",
            items: [
                {
                    question: "Do I need to be experienced to use FitPlanner?",
                    answer:
                        "No. FitPlanner works for beginners, intermediates, and advanced athletes. Every plan is adjusted to your current fitness level.",
                },
                {
                    question: "Who creates the workout plans?",
                    answer:
                        "All programs are designed by certified trainers with professional experience in fitness coaching.",
                },
                {
                    question: "Can I track my progress?",
                    answer:
                        "Yes. FitPlanner allows you to monitor improvements over time so you stay motivated and consistent.",
                },
                {
                    question: "Is the plan flexible?",
                    answer:
                        "Absolutely. If your schedule or goals change, your plan can be adjusted at any time.",
                },
            ],
        },

        // 🔹 Завершення
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Our Vision",
                description:
                    "We want to make professional fitness guidance accessible to everyone. FitPlanner was built on the idea that with structure and clarity, anyone can achieve their goals.\n\nYour fitness journey doesn’t have to be complicated — it just needs a plan.",
                centerTitle: true,
                centerDescription: true,
            },
        },
    ],
};

export default schema;
