import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "About Us — FitPlanner",
        description:
            "FitPlanner builds personalized workout plans around your body and lifestyle. More than an app — a team of fitness professionals helping you train smarter.",
        keywords: [
            "FitPlanner",
            "personal workout plan",
            "custom fitness program",
            "smart training app",
            "exercise planner",
            "fitness guidance",
        ],
        canonical: "/about-us",
        ogImage: {
            title: "FitPlanner",
            description: "Personalized training for every body, every goal.",
            bg: "#0d1b2a",
            color: "#ffffff",
        },
    },
    blocks: [
        // Hero
        {
            type: "custom",
            component: "MissionBanner",
            title: "Smarter Training Starts Here",
            description:
                "FitPlanner isn’t just a tool — it’s a philosophy. We believe that fitness should adapt to you, not the other way around. By combining technology with professional expertise, we deliver training programs that fit your body, lifestyle, and goals.",
            image: "image2",
        },

        // About Company
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Who We Are",
                description:
                    "FitPlanner was founded by a team of trainers, athletes, and tech specialists who saw the same problem: generic workout apps don’t work. People need guidance that reflects their personal data, limitations, and ambitions. That’s why we built FitPlanner — a platform where your age, weight, experience, and goals matter.\n\nWe believe fitness should be personal, measurable, and motivating. With us, you don’t just follow random workouts — you follow a clear plan designed for you.",
                centerTitle: true,
                centerDescription: true,
            },
        },

        // Who we help
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Beginners",
                    description:
                        "Learn the basics safely with step-by-step workouts that build confidence.",
                },
                {
                    image: "image8",
                    title: "Busy Professionals",
                    description:
                        "Short, effective routines that fit into your schedule without sacrificing results.",
                },
                {
                    image: "image9",
                    title: "Athletes",
                    description:
                        "Advanced programming tailored to maximize strength, endurance, and performance.",
                },
            ],
        },

        // Key features
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "What Makes FitPlanner Different",
                description:
                    "We don’t give you cookie-cutter programs. Instead, we use your data and professional insight to create a plan that evolves with you:",
                bullets: [
                    "Customized workouts based on your body metrics and goals",
                    "Step-by-step routines crafted by certified trainers",
                    "Progress tracking that shows real improvements",
                    "Plan adjustments as your fitness develops",
                ],
                centerTitle: true,
                centerDescription: true,
            },
        },

        // Extended company philosophy
        {
            type: "section",
            left: {
                type: "text",
                title: "Our Philosophy",
                description:
                    "Fitness isn’t about trends or quick fixes — it’s about building habits that last. At FitPlanner, we believe consistency beats intensity. That’s why we design programs that are realistic, sustainable, and motivating.\n\nEvery person has different needs: a student with no equipment, a professional with little time, or an athlete chasing performance. FitPlanner adapts to each case, making professional training accessible to everyone.",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image10",
                alt: "Personalized coaching",
                width: "100%",
                height: "300px",
            },
        },

        // Vision
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Our Vision",
                description:
                    "We want to redefine what fitness means in the digital age. FitPlanner combines human expertise with smart technology to create an environment where everyone can train effectively and confidently.\n\nOur goal is simple: to make personalized, professional training available to everyone — regardless of background, schedule, or starting point.",
                centerTitle: true,
                centerDescription: true,
            },
        },
    ],
};

export default schema;
