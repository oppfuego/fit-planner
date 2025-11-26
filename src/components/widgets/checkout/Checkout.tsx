"use client";

import React, { useEffect, useState, useMemo } from "react";
import styles from "./Checkout.module.scss";
import { useCurrency } from "@/context/CurrencyContext";
import { useCheckoutStore } from "@/utils/store";

const Checkout = () => {
    const { plan, setPlan } = useCheckoutStore();
    const [activePlan, setActivePlan] = useState(plan);
    const { currency, sign, convertFromGBP } = useCurrency();
    const [agreed, setAgreed] = useState(false);

    // 🔄 При завантаженні — підтягуємо план із localStorage
    useEffect(() => {
        if (!plan) {
            const stored = localStorage.getItem("selectedPlan");
            if (stored) {
                const parsed = JSON.parse(stored);
                setPlan(parsed);
                setActivePlan(parsed);
            }
        } else {
            setActivePlan(plan);
        }
    }, [plan, setPlan]);

    if (!activePlan)
        return (
            <div className={styles.checkoutEmpty}>
                <p>
                    No plan selected. Please go back to{" "}
                    <a href="/pricing">Pricing</a>.
                </p>
            </div>
        );

    // 💱 Перерахунок ціни відповідно до поточної валюти
    const convertedPrice = useMemo(() => {
        return convertFromGBP(activePlan.price);
    }, [activePlan.price, convertFromGBP, currency]);

    const vat = useMemo(() => convertedPrice * 0.2, [convertedPrice]);
    const total = useMemo(() => convertedPrice + vat, [convertedPrice, vat]);

    return (
        <div className={styles.checkout}>
            <div className={styles.header}>
                <h1>Checkout</h1>
                <p>Secure Payment</p>
            </div>

            <div className={styles.main}>
                {/* LEFT SIDE */}
                <div className={styles.summary}>
                    <h2>Order Summary</h2>

                    <div className={styles.itemRow}>
                        <div className={styles.itemInfo}>
                            <h3>{activePlan.title}</h3>
                            <p>
                                Top-up {sign}
                                {convertedPrice.toFixed(2)} {currency}
                            </p>
                        </div>
                        <span>
                            {sign}
                            {convertedPrice.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.itemRow}>
                        <p>Subtotal</p>
                        <span>
                            {sign}
                            {convertedPrice.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.itemRow}>
                        <p>VAT (20%)</p>
                        <span>
                            {sign}
                            {vat.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.totalRow}>
                        <h3>Total</h3>
                        <h3>
                            {sign}
                            {total.toFixed(2)} {currency}
                        </h3>
                    </div>

                    <p className={styles.note}>
                        You are purchasing <strong>{activePlan.title}</strong> plan.
                        <br />
                        A detailed invoice will be sent to your registered email.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.payment}>
                    <h2>Payment Details</h2>
                    <form>
                        <input type="text" placeholder="Card number" />
                        <div className={styles.row}>
                            <input type="text" placeholder="MM/YY" />
                            <input type="text" placeholder="CVV" />
                        </div>
                        <input type="text" placeholder="Cardholder name" />
                        <input type="text" placeholder="Billing address" />
                        <div className={styles.row}>
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="Postal code" />
                        </div>

                        {/* ✅ Чекбокс согласия */}
                        <div className={styles.agreement}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />{" "}
                                I agree to the{" "}
                                <a
                                    href="/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    terms & conditions
                                </a>
                                .
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreed}
                            className={`${styles.payButton} ${!agreed ? styles.disabled : ""}`}
                        >
                            Pay {sign}
                            {total.toFixed(2)} {currency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
