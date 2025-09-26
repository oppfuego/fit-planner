"use client";

import React, { useEffect, useState } from "react";
import { headerContent } from "@/resources/content";
import styles from "./Header.module.scss";
import { IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import AuthButtons from "@/components/widgets/auth-buttons/AuthButtons";
import { headerStyles } from "@/resources/styles-config";
import DrawerMenu from "@/components/ui/drawer/Drawer";

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    const user = useUser();
    const { currency, setCurrency } = useCurrency();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // формуємо динамічні стилі при скролі
    const scrolledStyle: React.CSSProperties = {};
    if (isScrolled && headerStyles.type !== "default") {
        switch (headerStyles.scrollMode) {
            case "solid":
                scrolledStyle.backgroundColor = headerStyles.scrollBackground;
                break;
            case "blur":
                scrolledStyle.backdropFilter = `blur(${headerStyles.scrollBlur})`;
                scrolledStyle.backgroundColor = "rgba(255,255,255,0.05)";
                break;
        }
    }

    return (
        <>
            <header
                className={[
                    headerStyles.type === "default" && styles.header,
                    headerStyles.type === "sticky" && styles.sticky,
                    headerStyles.type === "sticky-rounded" && styles.stickyRounded,
                    headerStyles.type === "sticky-rounded" && isScrolled ? styles.scrolled : "",
                ]
                    .filter(Boolean)
                    .join(" ")}
                style={scrolledStyle}
            >
                <div className={styles.headerInner}>
                    {/* Лого */}
                    <a href={headerContent.logo.href} className={styles.logo}>
                        <Image
                            width={200}
                            height={50}
                            src={headerContent.logo.src}
                            alt={headerContent.logo.alt}
                        />
                    </a>

                    {/* Навігація */}
                    <nav
                        className={styles.nav}
                        style={
                            {
                                "--link-color": headerStyles.linkColor,
                                "--link-hover-color": headerStyles.linkHoverColor,
                            } as React.CSSProperties
                        }
                    >
                        {headerContent.links.map((link) => (
                            <a href={link.href} key={link.label} className={styles.link}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Правий блок */}
                    <div className={styles.actions}>
                        <AuthButtons />

                        {/* 🔹 Перемикач валют показується тільки якщо user залогінений */}
                        {user && (
                            <div className={styles.currencySwitch}>
                                <button
                                    className={currency === "GBP" ? styles.active : ""}
                                    onClick={() => setCurrency("GBP")}
                                >
                                    £ GBP
                                </button>
                                <button
                                    className={currency === "EUR" ? styles.active : ""}
                                    onClick={() => setCurrency("EUR")}
                                >
                                    € EUR
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Бургер-меню */}
                    <div className={styles.menuButton}>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open navigation"
                            className={styles.button}
                        >
                            <FaBars className={styles.button} />
                        </IconButton>
                    </div>
                </div>
            </header>

            <DrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
};

export default Header;
