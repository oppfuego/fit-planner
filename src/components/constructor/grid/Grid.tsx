import React from 'react';
import {GridProps} from "./types";
import styles from './Grid.module.scss';

const Grid: React.FC<GridProps> = ({
                                       columns = 12,
                                       gap = '16px',
                                       alignItems = 'stretch',
                                       justifyItems = 'stretch',
                                       style,
                                       children,
                                   }) => {
    return (
        <div
            className={styles.grid}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap,
                alignItems,
                justifyItems,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Grid;