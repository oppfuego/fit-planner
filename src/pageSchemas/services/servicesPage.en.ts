import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const servicesSchema: PageSchema = {
    meta: {
        title: `Our Services — ${COMPANY_NAME}`,
        description: `Explore ${COMPANY_NAME} services: personalized training plans, nutrition advice, progress tracking, and a flexible token system for fitness enthusiasts of all levels.`,
        keywords: [
            `${COMPANY_NAME} services`,
            "fitness plans",
            "training programs",
            "nutrition",
            "progress tracking",
            "workout platform",
            "health coaching",
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Services`,
            description: "Personalized training, nutrition, and fitness tracking in one platform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Everything You Need to Transform Your Fitness",
                description: `${COMPANY_NAME} combines AI-powered planning with professional insights. From personalized workouts to nutrition and progress tracking — all in one app.`,
                centerTitle: true,
                centerDescription: true,
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "3rem",
            cards: [
                {
                    image: "image1",
                    title: "Personalized Training Plans",
                    description: "AI-generated workouts that match your level and adapt as you progress.",
                    buttonLink: "/get-started",
                    buttonText: "Get Your Plan",
                },
                {
                    image: "image2",
                    title: "Smart Nutrition Guidance",
                    description: "Balanced meal advice to support your workouts and recovery.",
                    buttonLink: "/get-started",
                    buttonText: "Explore Nutrition",
                },
            ],
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Strength Training",
                    description: "Tailored workouts to build muscle effectively.",
                    buttonLink: "/sign-up",
                    buttonText: "Start Now",
                },
                {
                    image: "image8",
                    title: "Cardio Programs",
                    description: "Plans for endurance, fat loss, and heart health.",
                    buttonLink: "/sign-up",
                    buttonText: "Try Cardio",
                },
                {
                    image: "image9",
                    title: "Flexibility & Mobility",
                    description: "Improve range of motion and prevent injuries.",
                    buttonLink: "/sign-up",
                    buttonText: "Train Flexibility",
                },
                {
                    image: "image10",
                    title: "Recovery Sessions",
                    description: "Stretching, yoga, and light activity for recovery.",
                    buttonLink: "/sign-up",
                    buttonText: "Recover Smarter",
                },
            ],
        },
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "🏋️ Personalized workouts updated weekly",
                "🥗 Nutrition guidance tailored to your goals",
                "📊 Progress tracking with clear stats",
                "🎯 Motivation through achievements",
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Progress tracking dashboard",
            },
            right: {
                type: "text",
                title: "Track Your Progress",
                description: `Visualize your journey with graphs, personal records, and achievements. ${COMPANY_NAME} helps you stay motivated and consistent.`,
                bullets: [
                    "Workout history saved automatically",
                    "Personal records logged",
                    "Weekly and monthly insights",
                ],
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image4",
                    title: "Flexible Token System",
                    description: "Buy tokens once and use them for workouts, nutrition, or extra features.",
                    buttonLink: "/pricing",
                    buttonText: "View Plans",
                },
                {
                    image: "image5",
                    title: "Community Support",
                    description: "Connect with others, share progress, and stay accountable.",
                    buttonLink: "/sign-up",
                    buttonText: "Join Community",
                },
                {
                    image: "image6",
                    title: "Expert Coaching (Optional)",
                    description: "Need extra help? Book sessions with certified trainers.",
                    buttonLink: "/sign-up",
                    buttonText: "Book Coaching",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Why Choose Us?",
                description: `Because fitness should be simple, motivating, and personalized. ${COMPANY_NAME} adapts to you — not the other way around.`,
                bullets: [
                    "AI-assisted personalization",
                    "Flexible pricing with tokens",
                    "All-in-one solution: training + nutrition + tracking",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: `What services does ${COMPANY_NAME} provide?`,
                    answer: "We offer training plans, nutrition guidance, progress tracking, and optional expert coaching.",
                },
                {
                    question: "Do I need tokens to start?",
                    answer: "You can try some features for free, but tokens unlock advanced workouts and nutrition plans.",
                },
                {
                    question: "How flexible is the token system?",
                    answer: "Very. You buy once and spend only on what you need — no wasted subscriptions.",
                },
                {
                    question: "Can I use this as a beginner?",
                    answer: `Absolutely. ${COMPANY_NAME} adapts plans based on your level and goals.`,
                },
            ],
        },
    ],
};

export default servicesSchema;
