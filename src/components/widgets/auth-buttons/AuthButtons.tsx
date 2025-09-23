import React from "react";
import {useUser} from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {FaUser} from "react-icons/fa";


const AuthButtons: React.FC = () => {
    const user = useUser();
    if (user) {
        return (
            // <div className={styles.linkContainer}>
            //     <Link href="/profile">
            //         <FaUser className={styles.link}/>
            //     </Link>
            //
            // </div>
            <Link href="/profile" className={styles.userCard}>
                <FaUser className={styles.userIcon} />
                <div className={styles.userInfo}>
                    <span className={styles.username}>{user?.name ?? "Guest"}</span>
                    <span className={styles.balance}>💎 {user?.tokens ?? 0}</span>
                </div>
            </Link>

        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI text="Sign In" shape="default" color="link" hoverColor="linkHover" hoverEffect="glow"
                          fullWidth/>
            </Link>
            <Link href="/sign-up">
                <ButtonUI text="Sign Up" shape="default" color="backgroundDark" hoverColor="textSecondary"
                          hoverEffect="glow"
                          fullWidth/>
            </Link>
        </div>
    );
};

export default AuthButtons;