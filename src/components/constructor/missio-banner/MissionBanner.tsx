"use client";
import React from "react";
import Section from "../section/Section";
import Text from "../text/Text";
import Media from "../image/Media";

interface MissionBannerProps {
    title: string;
    description: string;
    image?: string;
}

const MissionBanner: React.FC<MissionBannerProps> = ({ title, description, image }) => {
    return (
        <Section
            left={
                <Text
                    title={title}
                    description={description}
                    centerTitle={false}
                    centerDescription={false}
                />
            }
            right={
                image ? (
                    <Media
                        src={image}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Mission image"
                    />
                ) : undefined
            }
        />
    );
};

export default MissionBanner;
