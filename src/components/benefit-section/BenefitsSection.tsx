import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './BenefitsSection.scss';

const BenefitsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            title: "Professional trainers",
            text: "Our trainers are highly qualified specialists with extensive experience. They will help you achieve the best possible results, taking into account your individual needs."
        },
        {
            title: "Personalised training",
            text: "We develop personalised training plans based on your goals, physical condition and preferences. Each training plan is unique."
        },
        {
            title: "The perfect equipment",
            text: "We have only the best training equipment to ensure comfort and efficiency at every session."
        },
        {
            title: "24/7 support, consultation",
            text: "We are always in touch! Our support is available 24/7 for any questions or consultations."
        },
        {
            title: "Health and motivation",
            text: "Our task is not only to achieve physical results, but also to maintain your health and motivation on the path to self-improvement."
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 3 ? prevIndex + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 3));
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
    });

    return (
        <div className="benefits-section">
            <div className="benefits-section__container">
                <h2 className="benefits-section__title">Why choose us</h2>
                <div className="benefits-section__content" {...handlers}>
                    <button className="benefits-section__nav" onClick={prevSlide}>‹</button>
                    <div className="benefits-section__items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
                            <div className="benefits-section__item" key={index}>
                                <h1 className="benefits-section-item">{item.title}</h1>
                                <p className="benefits-section__text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <button className="benefits-section__nav" onClick={nextSlide}>›</button>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;