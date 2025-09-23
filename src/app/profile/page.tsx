// "use client";
//
// import React from "react";
// import Link from "next/link";
// import { FaCoins, FaUserCircle } from "react-icons/fa";
// import styles from "./UserProfile.module.scss";
// import ButtonUI from "@/components/ui/button/ButtonUI";
// import { LogoutButton } from "@/components/widgets/logout-button/LogoutButton";
// import { useUser } from "@/context/UserContext";
// import AllOrders from "@/components/widgets/all-orders/AllOrders";
//
// const UserProfile: React.FC = () => {
//     const user = useUser();
//
//     return (
//         <div className={styles.userProfile}>
//             <div className={styles.leftColumn}>
//                 <div className={styles.header}>
//                     <FaUserCircle className={styles.avatar} />
//                     <div>
//                         <h2 className={styles.username}>{user?.name ?? "Guest"}</h2>
//                         <p className={styles.email}>{user?.email ?? "No email"}</p>
//                     </div>
//                 </div>
//
//                 <div className={styles.balanceBox}>
//                     <p className={styles.balanceText}>
//                         <FaCoins className={styles.tokenIcon} />
//                         Balance: {user?.tokens ?? 0}
//                     </p>
//                     <Link href="/pricing" className={styles.buyLink}>
//                         Buy tokens
//                     </Link>
//                 </div>
//
//                 <div className={styles.actions}>
//                     <Link href="/dashboard" className={styles.link}>
//                         <ButtonUI text="Go To App" shape="default" color="link" hoverColor="linkHover" hoverEffect="glow" fullWidth />
//                     </Link>
//                     <LogoutButton />
//                 </div>
//             </div>
//
//             <div className={styles.rightColumn}>
//                 <AllOrders />
//             </div>
//         </div>
//     );
// };
//
// export default UserProfile;

"use client";

import React from "react";
import Link from "next/link";
import {FaCoins, FaUserCircle, FaSignOutAlt, FaArrowRight} from "react-icons/fa";
import styles from "./UserProfile.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {LogoutButton} from "@/components/widgets/logout-button/LogoutButton";
import {useUser} from "@/context/UserContext";
import AllOrders from "@/components/widgets/all-orders/AllOrders";

const UserProfile: React.FC = () => {
    const user = useUser();

    return (
        <div className={styles.dashboard}>
            {/* 🔹 Hero section */}
            <div className={styles.profileCard}>
                <FaUserCircle className={styles.avatar}/>
                <div className={styles.userInfo}>
                    <h2>{user?.name ?? "Guest User"}</h2>
                    <p>{user?.email ?? "No email"}</p>
                </div>
                <div className={styles.balance}>
                    <FaCoins className={styles.coinIcon}/>
                    <span>{user?.tokens ?? 0} Tokens</span>
                    <Link href="/pricing" className={styles.buyBtn}>
                        Buy More
                    </Link>
                </div>
            </div>

            {/* 🔹 Quick actions */}
            <div className={styles.actionsRow}>
                <Link href="/dashboard">
                    <ButtonUI
                        variant="soft"
                        color="primary"
                        size="lg"
                        endIcon={<FaArrowRight/>}
                    >
                        Go To App
                    </ButtonUI>
                </Link>
                <Link href="/pricing">
                    <ButtonUI
                        variant="outlined"
                        color="secondary"
                        size="lg"
                        hoverEffect="scale"
                        hoverColor="secondary"
                        hoverTextColor="primary"
                        endIcon={<FaCoins/>}
                    >
                        Buy Tokens
                    </ButtonUI>
                </Link>
                <LogoutButton
                />
            </div>

            {/* 🔹 Orders list */}
            <div className={styles.ordersSection}>
                <AllOrders/>
            </div>
        </div>
    );
};

export default UserProfile;

