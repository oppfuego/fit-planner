"use client";
import React from "react";
import Grid from "../grid/Grid";
import Card from "../card/Card";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

const TeamGrid: React.FC<{ members: TeamMember[] }> = ({members}) => {
    return (
        <Grid columns={3} gap="2rem">
            {members.map((m, i) => (
                <Card
                    key={i}
                    image={m.image}
                    title={`${m.name} — ${m.role}`}
                    description={m.bio}
                />
            ))}
        </Grid>
    );
};

export default TeamGrid;
