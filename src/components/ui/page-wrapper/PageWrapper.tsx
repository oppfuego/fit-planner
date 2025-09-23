import React, {FC} from 'react';
import styles from "./PageWrapper.module.scss"
import {PageWrapperProps} from "@/types/page-wrapper";

const PageWrapper:FC<PageWrapperProps> = ({children}) => {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};

export default PageWrapper;