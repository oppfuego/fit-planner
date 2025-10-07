"use client";

import React, { useMemo, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useCurrency } from "@/context/CurrencyContext";
import { cardVariants, hoverEffects } from "@/resources/styles-config";

type CardVariant = keyof typeof cardVariants;
type HoverEffect = keyof typeof hoverEffects;

interface PricingCardProps {
    variant?: CardVariant;
    title: string;
    price: string; // "dynamic" або число як GBP
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
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
    const { currency, setCurrency, sign, convertFromGBP, convertToGBP } = useCurrency();

    const [customAmount, setCustomAmount] = useState<number>(1);
    const config = cardVariants[variant];
    const hover = hoverEffects[config.hover as HoverEffect];
    const isCustom = price === "dynamic";

    // 💰 якщо це не кастом — ціна завжди у GBP і конвертується при зміні валюти
    const basePriceGBP = useMemo(() => (isCustom ? 0 : parseFloat(price)), [price, isCustom]);
    const convertedPrice = useMemo(() => {
        if (isCustom) return 0;
        return convertFromGBP(basePriceGBP);
    }, [basePriceGBP, convertFromGBP, isCustom]);

    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to purchase", "info");
            setTimeout(() => (window.location.href = "/sign-up"), 1200);
            return;
        }

        try {
            let body: any;

            if (isCustom) {
                const gbpEquivalent = convertToGBP(customAmount);
                if (gbpEquivalent < 0.01) {
                    showAlert("Minimum is 0.01", `Enter at least 0.01 GBP equivalent`, "warning");
                    return;
                }
                body = { currency, amount: customAmount };
            } else {
                body = { amount: tokens };
            }

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error(await res.text());
            const data = await res.json();

            showAlert(
                "Success!",
                isCustom
                    ? `You paid ${sign}${customAmount.toFixed(2)} ${currency} (≈ ${Math.floor(
                        convertToGBP(customAmount) * TOKENS_PER_GBP
                    )} tokens)`
                    : `You purchased ${tokens} tokens.`,
                "success"
            );

            console.log("Updated user:", data.user);
        } catch (err: any) {
            showAlert("Error", err.message || "Something went wrong", "error");
        }
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
            {config.label && (
                <span
                    className={styles.bestChoiceLabel}
                    style={{
                        background: config.label.bg,
                        color: config.label.color,
                    }}
                >
          {config.label.text}
        </span>
            )}

            {/* 💵 Ціновий блок */}
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
                                onChange={(_, val) => val && setCurrency(val as "GBP" | "EUR")}
                                size="md"
                                sx={{ minWidth: 90 }}
                            >
                                <Option value="GBP">£ GBP</Option>
                                <Option value="EUR">€ EUR</Option>
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

            <ButtonUI type="button" sx={{ width: "100%", marginTop: "auto" }} onClick={handleBuy}>
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;
