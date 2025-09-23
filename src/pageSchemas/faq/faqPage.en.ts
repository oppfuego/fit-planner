import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME}`,
        description: `Frequently Asked Questions about ${COMPANY_NAME}: how training plans work, flexibility, tracking progress, and support from professional coaches.`,
        keywords: [
            `${COMPANY_NAME} FAQ`,
            "fitness app",
            "personal training plans",
            "progress tracking",
            "workout guidance"
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} FAQ`,
            description: `Answers to the most common questions about training with ${COMPANY_NAME}.`,
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is your personal fitness planner. It connects you with certified trainers who create structured, personalized workout plans so you can train smarter and achieve real results.`
                },
                {
                    question: "Do I need prior fitness experience?",
                    answer: `No. ${COMPANY_NAME} works for beginners, intermediates, and advanced athletes. Every plan is tailored to your current level.`
                },
                {
                    question: "Who designs the training plans?",
                    answer: `All programs are designed by certified professional trainers with real coaching experience.`
                },
                {
                    question: "Can I adjust my plan if my goals change?",
                    answer: `Absolutely. Your plan is flexible. You can update it anytime if your schedule, fitness level, or goals change.`
                },
                {
                    question: "How do I track progress?",
                    answer: `The platform lets you monitor improvements step by step — from completed workouts to personal records — so you stay motivated.`
                },
                {
                    question: `Does ${COMPANY_NAME} include nutrition advice?`,
                    answer: `Our focus is structured training, but selected trainers may include general nutrition tips as part of their guidance.`
                },
                {
                    question: "Is my data private?",
                    answer: `Yes. All your training information is processed securely and is never shared with third parties.`
                },
                {
                    question: `Can teams or groups use ${COMPANY_NAME}?`,
                    answer: `Yes. We offer team and business plans for fitness studios, companies, and groups who want structured training together.`
                },
                {
                    question: "Do you provide support?",
                    answer: `Of course. If you face any issues with your account or training plan, our support team is available at ${COMPANY_EMAIL}.`
                },
                {
                    question: `Can I try ${COMPANY_NAME} for free?`,
                    answer: `Yes. We offer a free trial so you can explore the platform and test a workout plan before subscribing.`
                },
            ],
        },
    ],
};

export default faqSchema;
