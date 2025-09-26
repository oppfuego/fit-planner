"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Currency = "GBP" | "EUR";

const CurrencyContext = createContext<{
    currency: Currency;
    setCurrency: (c: Currency) => void;
}>({
    currency: "GBP",
    setCurrency: () => {},
});

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>("GBP");

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);