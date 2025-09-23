"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "@/context/AlertContext";

export interface AiOrder {
    _id: string;
    userId: string;
    email: string;
    prompt: string;
    response: string;
    createdAt: string;
}

interface AllOrdersContextType {
    orders: AiOrder[];
    refreshOrders: () => Promise<void>;
    loading: boolean;
}

const AllOrdersContext = createContext<AllOrdersContextType>({
    orders: [],
    refreshOrders: async () => {},
    loading: false,
});

export const useAllOrders = () => useContext(AllOrdersContext);

export const AllOrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<AiOrder[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/ai/get-all-orders", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (!res.ok) throw new Error("Failed to fetch orders");

            const data = await res.json();
            console.log("Orders API response:", data);

            const normalized = Array.isArray(data) ? data : data.orders;
            setOrders(Array.isArray(normalized) ? normalized : []);
        } catch (err: any) {
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <AllOrdersContext.Provider value={{ orders, refreshOrders: fetchOrders, loading }}>
            {children}
        </AllOrdersContext.Provider>
    );
};
