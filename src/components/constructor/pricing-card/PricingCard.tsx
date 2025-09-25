"use client";

import React, { useMemo, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import { cardVariants, hoverEffects } from "@/resources/styles-config";

type CardVariant = keyof typeof cardVariants;
type HoverEffect = keyof typeof hoverEffects;

interface PricingCardProps {
    variant?: CardVariant;
    title: string;
    price: string; // "dynamic" для кастомного плану
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
}

const CURRENCY_SIGNS: Record<"GBP" | "EUR" | "USD", string> = {
    GBP: "£",
    EUR: "€",
    USD: "$",
};

const TOKENS_PER_UNIT = 100; // 1 валюта = 100 токенів

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

    // 🔹 головна валюта = GBP
    const [currency, setCurrency] = useState<"GBP" | "EUR" | "USD">("GBP");
    const [customAmount, setCustomAmount] = useState<number>(1);

    const config = cardVariants[variant];
    const hover = hoverEffects[config.hover as HoverEffect];

    const isCustom = price === "dynamic";
    const currencySign = useMemo(() => CURRENCY_SIGNS[currency], [currency]);

    const handleBuy = async () => {
        if (!user) {
            showAlert(
                "Please sign up",
                "You need to be signed in to purchase",
                "info"
            );
            setTimeout(() => (window.location.href = "/sign-up"), 1200);
            return;
        }

        try {
            let body: any;
            if (isCustom) {
                if (customAmount < 0.01) {
                    showAlert(
                        "Minimum is 0.01",
                        `Enter at least 0.01 ${currency} (1 token)`,
                        "warning"
                    );
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
                    ? `You paid ${currencySign}${customAmount.toFixed(
                        2
                    )} ${currency} (≈ ${Math.round(
                        customAmount * TOKENS_PER_UNIT
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
            style={{
                border: config.border,
                background: config.background,
            }}
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
                        right: "1rem",
                        left: "auto",
                        transform: "none",
                    }}
                >
          {config.label.text}
        </span>
            )}

            {/* блок з ціною */}
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
                                startDecorator={currencySign}
                            />
                            <Select
                                value={currency}
                                onChange={(_, val) =>
                                    val && setCurrency(val as "GBP" | "EUR" | "USD")
                                }
                                size="md"
                                sx={{ minWidth: 90 }}
                            >
                                <Option value="GBP">£ GBP</Option>
                                <Option value="EUR">€ EUR</Option>
                                <Option value="USD">$ USD</Option>
                            </Select>
                        </div>
                        <p className={styles.price}>
                            {currencySign}
                            {customAmount.toFixed(2)}{" "}
                            <span className={styles.tokens}>
                ≈ {Math.round(customAmount * TOKENS_PER_UNIT)} tokens
              </span>
                        </p>
                    </>
                ) : (
                    <p className={styles.price}>
                        {currencySign}
                        {parseFloat(price.replace(/[^\d.]/g, "")).toFixed(2)}
                        <span className={styles.tokens}> / {tokens} tokens</span>
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

            <div style={{ marginTop: "auto" }}>
                <ButtonUI type="button" sx={{ width: "100%" }} onClick={handleBuy}>
                    {user ? buttonText : "Sign Up to Buy"}
                </ButtonUI>
            </div>
        </div>
    );
};

export default PricingCard;
