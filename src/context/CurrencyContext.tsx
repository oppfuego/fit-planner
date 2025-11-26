"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "GBP" | "EUR" | "USD";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (val: Currency) => void;
    rateToGBP: number; // multiply GBP → currency
    sign: string;
    convertFromGBP: (gbp: number) => number;
    convertToGBP: (val: number) => number;
}

const CURRENCY_SIGNS: Record<Currency, string> = {
    GBP: "£",
    EUR: "€",
    USD: "$",
};

// 🔥 Курси (фіксовані або можу зробити авто-фетч з API)
const RATES: Record<Currency, number> = {
    GBP: 1,
    EUR: 1.17, // 1 GBP → 1.17 EUR
    USD: 1.24, // 1 GBP → 1.24 USD
};

const CurrencyContext = createContext<CurrencyContextType>({
    currency: "GBP",
    setCurrency: () => {},
    rateToGBP: 1,
    sign: "£",
    convertFromGBP: (v) => v,
    convertToGBP: (v) => v,
});

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>("GBP");

    const rateToGBP = RATES[currency];
    const sign = CURRENCY_SIGNS[currency];

    return (
        <CurrencyContext.Provider
            value={{
                currency,
                setCurrency,
                rateToGBP,
                sign,
                convertFromGBP: (gbp: number) => gbp * rateToGBP,
                convertToGBP: (val: number) => val / rateToGBP,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};
