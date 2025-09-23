// formSchema.ts

export const formSchema = {
    expectations: [
        {
            name: "goal",
            label: "Training Goal",
            description: "Example: weight loss, muscle gain, maintaining fitness.",
            type: "textarea",
            required: true,
        },
        {
            name: "experience",
            label: "Fitness Level",
            description: "Beginner, intermediate, or advanced.",
            type: "textarea",
            required: true,
        },
        {
            name: "availableDays",
            label: "Number of Days per Week",
            description: "How many days you can realistically train.",
            type: "textarea",
            required: true,
        },
        {
            name: "availableTime",
            label: "Workout Duration",
            description: "How much time you can spend per session (e.g., 30–60 min).",
            type: "textarea",
        },
    ],

    selectors: [
        {
            name: "trainingType",
            label: "Type of Training",
            description: "Choose the main training style.",
            type: "select",
            options: ["Strength", "Cardio", "Mixed", "Functional", "Yoga/Stretching"],
        },
        {
            name: "equipment",
            label: "Available Equipment",
            description: "Select what equipment you have.",
            type: "select",
            options: ["No equipment", "Dumbbells", "Barbell", "Gym machines", "Full equipment"],
        },
        {
            name: "intensity",
            label: "Intensity",
            description: "Preferred training intensity.",
            type: "select",
            options: ["Low", "Moderate", "High"],
        },
        {
            name: "focusArea",
            label: "Focus Areas",
            description: "Which muscle groups you want to prioritize.",
            type: "select",
            options: ["Upper body", "Lower body", "Full body", "Core/Abs"],
        },
    ],

    advanced: [
        {
            name: "includeWarmup",
            label: "Include Warm-up",
            description: "Add a short warm-up before each workout.",
            type: "checkbox",
        },
        {
            name: "includeCooldown",
            label: "Include Cooldown/Stretching",
            description: "Add a short cooldown or stretching after each session.",
            type: "checkbox",
        },
        {
            name: "includeNutritionTips",
            label: "Include Nutrition Tips",
            description: "Add short nutrition recommendations with the plan.",
            type: "checkbox",
        },
        {
            name: "highlightRestDays",
            label: "Highlight Rest Days",
            description: "Clearly mark rest days in the weekly plan.",
            type: "checkbox",
        },
    ],
};

export const buildPrompt = (values: Record<string, any>): string => {
    let prompt = `Create a detailed 7-day workout plan. 
Format: Day — exercises with sets/reps or duration.`;

    prompt += `\n\nGoal: ${values.goal}`;
    prompt += `\nFitness level: ${values.experience}`;
    prompt += `\nAvailable training days: ${values.availableDays}`;
    if (values.availableTime) prompt += `\nWorkout duration: ${values.availableTime}`;
    if (values.trainingType) prompt += `\nTraining type: ${values.trainingType}`;
    if (values.equipment) prompt += `\nAvailable equipment: ${values.equipment}`;
    if (values.intensity) prompt += `\nIntensity: ${values.intensity}`;
    if (values.focusArea) prompt += `\nFocus area: ${values.focusArea}`;

    if (values.includeWarmup) prompt += `\nAdd a warm-up before each workout.`;
    if (values.includeCooldown) prompt += `\nAdd a cooldown/stretching routine after each session.`;
    if (values.includeNutritionTips) prompt += `\nInclude short nutrition tips.`;
    if (values.highlightRestDays) prompt += `\nHighlight the rest days.`;

    return prompt;
};
