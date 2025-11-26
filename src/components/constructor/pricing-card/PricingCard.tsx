"use client";

import React, { useMemo, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Currency, useCurrency } from "@/context/CurrencyContext";
import { cardVariants, hoverEffects } from "@/resources/styles-config";
import { useRouter } from "next/navigation";
import { useCheckoutStore } from "@/utils/store";

type CardVariant = keyof typeof cardVariants;
type HoverEffect = keyof typeof hoverEffects;

interface PricingCardProps {
    variant?: CardVariant;
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
}

const TOKENS_PER_GBP = 100;

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "basic",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features,
                                                     buttonText,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const router = useRouter();
    const { setPlan } = useCheckoutStore();

    const { currency, setCurrency, sign, convertFromGBP, convertToGBP } =
        useCurrency();

    const [customAmount, setCustomAmount] = useState<number>(1);

    const config = cardVariants[variant];
    const hover = hoverEffects[config.hover as HoverEffect];

    const isCustom = price === "dynamic";

    // 📌 Базова ціна у GBP
    const basePriceGBP = useMemo(
        () => (isCustom ? 0 : parseFloat(price)),
        [price, isCustom]
    );

    // 📌 Конвертація у поточну валюту
    const convertedPrice = useMemo(() => {
        if (isCustom) return 0;
        return convertFromGBP(basePriceGBP);
    }, [basePriceGBP, convertFromGBP, isCustom]);

    // 📌 BUY → Checkout
    const handleBuy = () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to purchase", "info");
            setTimeout(() => (window.location.href = "/sign-up"), 1200);
            return;
        }

        let finalPriceGBP = basePriceGBP;
        let finalTokens = tokens;

        // custom price
        if (isCustom) {
            finalPriceGBP = convertToGBP(customAmount);
            finalTokens = Math.floor(finalPriceGBP * TOKENS_PER_GBP);
        }

        const plan = {
            title,
            price: finalPriceGBP,
            tokens: finalTokens,
            currency,
            variant,
        };

        setPlan(plan);
        localStorage.setItem("selectedPlan", JSON.stringify(plan));

        router.push("/checkout");
    };

    return (
        <div
            className={styles.card}
            style={{ border: config.border, background: config.background }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = hover.transform;
                (e.currentTarget as HTMLElement).style.boxShadow = hover.shadow;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.08)";
            }}
        >
            {/* PRICE BLOCK */}
            <div className={styles.priceBlock}>
                {isCustom ? (
                    <>
                        <div className={styles.customControls}>
                            <Input
                                type="number"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(Number(e.target.value))}
                                slotProps={{ input: { min: 0.01, step: 0.01 } }}
                                sx={{ flex: 1 }}
                                placeholder="Enter amount"
                                variant="outlined"
                                size="md"
                                startDecorator={sign}
                            />

                            <Select
                                value={currency}
                                onChange={(_, val) => val && setCurrency(val as Currency)}
                                size="md"
                                sx={{ minWidth: 90 }}
                            >
                                <Option value="GBP">£ GBP</Option>
                                <Option value="EUR">€ EUR</Option>
                                <Option value="USD">$ USD</Option>
                            </Select>
                        </div>

                        <p className={styles.price}>
                            {sign}
                            {customAmount.toFixed(2)}{" "}
                            <span className={styles.tokens}>
                                ≈ {Math.floor(convertToGBP(customAmount) * TOKENS_PER_GBP)} tokens
                            </span>
                        </p>
                    </>
                ) : (
                    <p className={styles.price}>
                        {sign}
                        {convertedPrice.toFixed(2)}{" "}
                        <span className={styles.tokens}>/ {tokens} tokens</span>
                    </p>
                )}
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <ButtonUI
                type="button"
                sx={{ width: "100%", marginTop: "auto" }}
                onClick={handleBuy}
            >
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;
