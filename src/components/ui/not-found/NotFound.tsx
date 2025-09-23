"use client";

import React from 'react';
import styles from "./NotFound.module.scss";
import Link from 'next/link';
import ButtonUI from "@/components/ui/button/ButtonUI";

const NotFoundComponent = () => {

    const returnHome = () => {
        window.location.href = "/";
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>404 :(</h1>
                    <p>This page doesnt exist, maybe in the future we will create this page, but currently you need to
                        return home.</p>
                </div>
                    <ButtonUI variant="solid" color="primary" sx={{width: "100%"}} onClick={returnHome}>
                        Go Home
                    </ButtonUI>
            </div>
        </div>
    );
};

export default NotFoundComponent;