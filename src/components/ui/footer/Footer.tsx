"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import { footerContent } from "@/resources/content";
import { footerStyles } from "@/resources/styles-config";
import {SmartLinkProps} from "@/types/smart-link";
import {media} from "@/resources/media";
import {FaApplePay, FaCcAmex, FaCcMastercard, FaCcVisa, FaGooglePay} from "react-icons/fa";

const SmartLink: React.FC<SmartLinkProps> = ({
                                                 href,
                                                 className,
                                                 children,
                                                 ariaLabel,
                                                 title,
                                                 target,
                                                 rel,
                                             }) => {
    const isInternal = href?.startsWith("/");
    if (isInternal) {
        return (
            <Link href={href} className={className} aria-label={ariaLabel} title={title}>
                {children}
            </Link>
        );
    }
    return (
        <a
            href={href}
            className={className}
            aria-label={ariaLabel}
            title={title}
            target={target}
            rel={rel}
        >
            {children}
        </a>
    );
};

const Footer: React.FC = () => {
    const { logo, columns, contact, socials, legal } = footerContent;

    const LegalAddress = () =>
        Array.isArray(legal?.addressLines) && legal.addressLines.length ? (
            <address className={styles["footer__legal-address"]}>
                {legal.addressLines.map((line: string) => (
                    <div key={line}>{line}</div>
                ))}
            </address>
        ) : null;

    const LegalBlock = () =>
        legal ? (
            <div className={styles["footer__legal"]}>
                <div className={styles["footer__legal-line"]}>
                    <span className={styles["footer__legal-label"]}>Company:</span>{" "}
                    <strong>{legal.companyName}</strong>
                </div>
                {legal.companyNumber && (
                    <div className={styles["footer__legal-line"]}>
                        <span className={styles["footer__legal-label"]}>Company number:</span>{" "}
                        <span>{legal.companyNumber}</span>
                    </div>
                )}
                <LegalAddress />
            </div>
        ) : null;

    const cssVars: React.CSSProperties = {
        ["--footer-maxw" as any]: `${footerStyles.maxWidth}px`,
        ["--footer-pad-x" as any]: `${footerStyles.paddings?.x ?? 20}px`,
        ["--footer-pad-y" as any]: `${footerStyles.paddings?.y ?? 32}px`,
        ["--footer-gap" as any]: `${footerStyles.gap ?? 20}px`,
        ["--footer-columns-gap" as any]: `${footerStyles.columnsGap ?? 24}px`,
        ["--footer-logo-w" as any]: `${footerStyles.logo?.width ?? 120}px`,
        ["--footer-logo-h" as any]: `${footerStyles.logo?.height ?? 30}px`,

        ["--footer-bg" as any]: footerStyles.colors?.bg ?? "#fff",
        ["--footer-title-color" as any]: footerStyles.colors?.title ?? "#333",
        ["--footer-text" as any]: footerStyles.colors?.link ?? "#242424",
        ["--footer-muted" as any]: footerStyles.colors?.muted ?? "#878787",
        ["--footer-border" as any]: footerStyles.colors?.border ?? "#eee",
        ["--footer-link" as any]: footerStyles.colors?.link ?? "#4A90E2",
        ["--footer-link-hover" as any]: footerStyles.colors?.linkHover ?? "#242424",

        ["--footer-fs" as any]: `${footerStyles.font?.size ?? 16}px`,
        ["--footer-legal-fs" as any]: `${footerStyles.font?.legalSize ?? 14}px`,

        ["--footer-contact-hover" as any]: footerStyles.colors?.contactHover ?? footerStyles.colors?.linkHover ?? "#242424",
        ["--footer-social-hover" as any]: footerStyles.colors?.socialHover,

        ["--footer-legal" as any]: footerStyles.colors?.link,
        ["--footer-contact-label" as any]: footerStyles.colors?.contactLabel ?? footerStyles.colors?.muted,

        ["--footer-radius" as any]: footerStyles.radius ?? "0",
        ["--footer-shadow" as any]: footerStyles.shadow ?? "none",

        ["--footer-cols-xl" as any]: `${footerStyles.grid?.colsXL ?? 4}`,
        ["--footer-cols-lg" as any]: `${footerStyles.grid?.colsLG ?? 3}`,
        ["--footer-cols-md" as any]: `${footerStyles.grid?.colsMD ?? 2}`,
        ["--footer-cols-sm" as any]: `${footerStyles.grid?.colsSM ?? 1}`,

        ["--footer-title-fs-xl" as any]: `${footerStyles.sizes?.titles?.xl ?? 18}px`,
        ["--footer-title-fs-lg" as any]: `${footerStyles.sizes?.titles?.lg ?? 16}px`,
        ["--footer-title-fs-md" as any]: `${footerStyles.sizes?.titles?.md ?? 15}px`,
        ["--footer-title-fs-sm" as any]: `${footerStyles.sizes?.titles?.sm ?? 14}px`,

        ["--footer-link-fs-xl" as any]: `${footerStyles.sizes?.links?.xl ?? 16}px`,
        ["--footer-link-fs-lg" as any]: `${footerStyles.sizes?.links?.lg ?? 15}px`,
        ["--footer-link-fs-md" as any]: `${footerStyles.sizes?.links?.md ?? 14}px`,
        ["--footer-link-fs-sm" as any]: `${footerStyles.sizes?.links?.sm ?? 13}px`,

        ["--footer-icon-xl" as any]: `${footerStyles.sizes?.icons?.xl ?? 24}px`,
        ["--footer-icon-lg" as any]: `${footerStyles.sizes?.icons?.lg ?? 22}px`,
        ["--footer-icon-md" as any]: `${footerStyles.sizes?.icons?.md ?? 20}px`,
        ["--footer-icon-sm" as any]: `${footerStyles.sizes?.icons?.sm ?? 18}px`,
    };

    const alignTo = footerStyles.logo?.align ?? "start";

    return (
        <footer
            className={clsx(
                styles.footer,
                styles[`footer--${footerStyles.type}`],
                footerStyles.showTopBorder && styles["footer--top-border"],
                footerStyles.showBottomBorder && styles["footer--bottom-border"],
                styles[`footer--logo-${alignTo}`]
            )}
            style={cssVars}
        >
            {footerStyles.type === "columns" && (
                <div className={styles["footer__inner"]}>
                    <SmartLink href={logo.href} className={styles["footer__logo"]} ariaLabel="Logo">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={0}
                            height={0}
                            sizes="120px"
                            style={{ width: "var(--footer-logo-w)", height: "var(--footer-logo-h)" }}
                        />
                    </SmartLink>
                    <div className={styles["footer__columns"]}>
                        {columns.map((col) => (
                            <div className={styles["footer__column"]} key={col.title}>
                                <div className={styles["footer__column-title"]}>{col.title}</div>
                                {col.links.map((link) => (
                                    <SmartLink href={link.href} className={styles["footer__link"]} key={link.label}>
                                        {link.label}
                                    </SmartLink>
                                ))}
                            </div>
                        ))}

                        {legal && (
                            <div className={styles["footer__column"]}>
                                <div className={styles["footer__column-title"]}>Company</div>
                                <LegalBlock />
                            </div>
                        )}
                    </div>
                    <div className={styles["footer__contact"]}>
                        {contact.address && (
                            <div className={styles["footer__contact-item"]}>
                                <strong>Address:</strong> {contact.address}
                            </div>
                        )}
                        {contact.email && (
                            <div className={styles["footer__contact-item"]}>
                                <strong>Email:</strong>{" "}
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </div>
                        )}
                        {contact.phone && (
                            <div className={styles["footer__contact-item"]}>
                                <strong>Phone:</strong>{" "}
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </div>
                        )}
                        {!!socials?.length && (
                            <div className={styles["footer__socials"]}>
                                {socials.map((s) => {
                                    const Icon = s.icon;
                                    const isExternal = !s.href?.startsWith("/");
                                    return (
                                        <SmartLink
                                            key={s.label}
                                            href={s.href}
                                            className={styles["footer__social-link"]}
                                            ariaLabel={s.label}
                                            title={s.label}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                        >
                                            <Icon size={footerStyles.sizes?.icons?.xl ?? 24} />
                                        </SmartLink>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
            {footerStyles.type === "center" && (
                <div className={clsx(styles["footer__inner"], styles["footer__inner--center"])}>
                    <SmartLink href={logo.href} className={styles["footer__logo"]} ariaLabel="Logo">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={0}
                            height={0}
                            sizes="120px"
                            style={{ width: "var(--footer-logo-w)", height: "var(--footer-logo-h)" }}
                        />
                    </SmartLink>
                    <nav className={styles["footer__center-links"]}>
                        {columns.flatMap((c) => c.links).map((link) => (
                            <SmartLink href={link.href} className={styles["footer__center-link"]} key={link.label}>
                                {link.label}
                            </SmartLink>
                        ))}
                    </nav>
                    <div className={styles["footer__center-contact"]}>
                        {contact.address && <span>{contact.address}</span>}
                        {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
                        {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
                    </div>
                    <div className={styles["footer__center-legal"]}>
                        <LegalBlock />
                    </div>
                    {!!socials?.length && (
                        <div className={styles["footer__center-socials"]}>
                            {socials.map((s) => {
                                const Icon = s.icon;
                                const isExternal = !s.href?.startsWith("/");
                                return (
                                    <SmartLink
                                        key={s.label}
                                        href={s.href}
                                        className={styles["footer__social-link"]}
                                        ariaLabel={s.label}
                                        title={s.label}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        <Icon size={footerStyles.sizes?.icons?.xl ?? 24} />
                                    </SmartLink>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {footerStyles.type === "mega" && (
                <div className={clsx(styles["footer__inner"], styles["footer__inner--mega"])}>
                    <div className={styles["footer__mega-top"]}>
                        <SmartLink href={logo.href} className={styles["footer__logo"]} ariaLabel="Logo">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={0}
                                height={0}
                                sizes="120px"
                                style={{ width: "var(--footer-logo-w)", height: "var(--footer-logo-h)" }}
                            />
                        </SmartLink>
                    </div>
                    <div className={styles["footer__mega-grid"]}>
                        {columns.map((col) => (
                            <div className={styles["footer__mega-col"]} key={col.title}>
                                <div className={styles["footer__column-title"]}>{col.title}</div>
                                <div className={styles["footer__mega-links"]}>
                                    {col.links.map((link) => (
                                        <SmartLink href={link.href} className={styles["footer__link"]} key={link.label}>
                                            {link.label}
                                        </SmartLink>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Company */}
                        {/* Company */}
                        {legal && (
                            <div className={styles["footer__mega-col"]}>
                                <div className={styles["footer__legal"]}>
                                    <div className={styles["footer__legal-line"]}>
                                        <span className={styles["footer__legal-label"]}>Company:</span>{" "}
                                        <strong>{legal.companyName}</strong>
                                    </div>
                                    {legal.companyNumber && (
                                        <div className={styles["footer__legal-line"]}>
                                            <span className={styles["footer__legal-label"]}>Company number:</span>{" "}
                                            <span>{legal.companyNumber}</span>
                                        </div>
                                    )}
                                    {legal.address && (
                                        <address className={styles["footer__legal-address"]}>
                                            {legal.address}
                                        </address>
                                    )}
                                    {contact.email && (
                                        <div className={styles["footer__contact-item"]}>
                                            <strong>Email:</strong>{" "}
                                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                        </div>
                                    )}
                                    {contact.phone && (
                                        <div className={styles["footer__contact-item"]}>
                                            <strong>Phone:</strong>{" "}
                                            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}


                        {/* Payment Methods */}
                        <div className={styles["footer__mega-col"]}>
                            <div className={styles["footer__column-title"]}>Payment Methods</div>
                            <div className={styles.payments}>
                                <div className={styles.paymentsContent}>
                                    <FaCcVisa className={styles.paymentIcon} />
                                    <FaCcMastercard className={styles.paymentIcon} />
                                    <FaCcAmex className={styles.paymentIcon} />
                                    <FaGooglePay className={styles.paymentIcon} />
                                    <FaApplePay className={styles.paymentIcon} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*{!!socials?.length && (*/}
                    {/*    <div className={styles["footer__mega-socials"]}>*/}
                    {/*        {socials.map((s) => {*/}
                    {/*            const Icon = s.icon;*/}
                    {/*            const isExternal = !s.href?.startsWith("/");*/}
                    {/*            return (*/}
                    {/*                <SmartLink*/}
                    {/*                    key={s.label}*/}
                    {/*                    href={s.href}*/}
                    {/*                    className={styles["footer__social-link"]}*/}
                    {/*                    ariaLabel={s.label}*/}
                    {/*                    title={s.label}*/}
                    {/*                    target={isExternal ? "_blank" : undefined}*/}
                    {/*                    rel={isExternal ? "noopener noreferrer" : undefined}*/}
                    {/*                >*/}
                    {/*                    <Icon size={footerStyles.sizes?.icons?.xl ?? 24} />*/}
                    {/*                </SmartLink>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            )}


            <div className={styles["footer__rights"]}>
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;