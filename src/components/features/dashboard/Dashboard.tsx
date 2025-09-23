"use client"

import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import ButtonUI from '@/components/ui/button/ButtonUI';
import ManualGenerator from "@/components/widgets/manual-generator/ManualGenerator";
import AllOrders from "@/components/widgets/all-orders/AllOrders";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<'manual' | 'orders'>('manual');

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.buttons}>
                    <ButtonUI
                        color={activeTab === 'manual' ? 'primary' : 'muted'}
                        shape="rounded"
                        hoverTextColor="white"
                        variant={activeTab === 'manual' ? 'solid' : 'outlined'}
                        onClick={() => setActiveTab('manual')}
                    >
                        Get Manual
                    </ButtonUI>
                    <ButtonUI
                        color={activeTab === 'orders' ? 'secondary' : 'muted'}
                        shape="rounded"
                        hoverTextColor="white"
                        variant={activeTab === 'orders' ? 'solid' : 'outlined'}
                        onClick={() => setActiveTab('orders')}
                    >
                        My Orders
                    </ButtonUI>
                </div>
            </div>
            <div className={styles.widgets}>
                {activeTab === 'manual' ? (
                    <ManualGenerator/>
                ) : (
                    <AllOrders/>
                )}
            </div>
        </div>
    );
};

export default Dashboard;