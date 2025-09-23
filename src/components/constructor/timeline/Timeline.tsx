// import React from "react";
// import styles from "./Timeline.module.scss";
//
// interface Step {
//     title: string;
//     description: string;
// }
//
// const Timeline: React.FC<{ steps: Step[] }> = ({ steps }) => (
//     <div className={styles.timeline}>
//         {steps.map((step, idx) => (
//             <div key={idx} className={styles.step}>
//                 <div className={styles.circle}>{idx + 1}</div>
//                 <div>
//                     <h4>{step.title}</h4>
//                     <p>{step.description}</p>
//                 </div>
//             </div>
//         ))}
//     </div>
// );
//
// export default Timeline;

"use client";
import React from "react";
import styles from "./Timeline.module.scss";

interface Step {
    title: string;
    description: string;
}

const Timeline: React.FC<{ steps: Step[] }> = ({ steps }) => (
    <div className={styles.timeline}>
        {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
                <div className={styles.circle}>{idx + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
            </div>
        ))}
    </div>
);

export default Timeline;
