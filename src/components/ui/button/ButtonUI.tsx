"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import {ButtonUIProps} from "@/types/button-ui";
import {buttonColors} from "@/resources/styles-config";

const resolveColor = (color?: string) => {
    if (!color) return "";
    return buttonColors[color as keyof typeof buttonColors] || color;
};

const hexToRgba = (hex: string, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    if (hex.startsWith("rgba") || hex.startsWith("rgb") || hex.startsWith("var"))
        return hex;
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((ch) => ch + ch).join("");
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ButtonUI: React.FC<ButtonUIProps & {
    hoverEffect?: "none" | "shadow" | "glow" | "scale";
}> = ({
          variant = "solid",
          shape = "default",
          size = "md",
          fullWidth = false,
          color = "primary",
          hoverColor = "hover",
          textColor,
          hoverTextColor,
          hoverEffect = "shadow",
          disabled,
          children,
          sx,
          loading,
          text,
          type,
          startIcon,
          endIcon,
          onClick,
      }) => {
    const resolvedBase = resolveColor(color);
    const resolvedHover = resolveColor(hoverColor) || resolvedBase;
    const resolvedText = textColor ? resolveColor(textColor) : undefined;
    const resolvedHoverText = hoverTextColor
        ? resolveColor(hoverTextColor)
        : resolvedText;

    const circleSizes: Record<"sm" | "md" | "lg", number> = {
        sm: 32,
        md: 40,
        lg: 56,
    };
    const isCircle = shape === "circle";
    const side = circleSizes[size];

    const hoverEffects: Record<NonNullable<typeof hoverEffect>, any> = {
        none: {},
        shadow: {
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            transform: "translateY(-2px)",
        },
        glow: {
            boxShadow: `0 0 10px ${resolvedHover}`,
            transform: "translateY(-1px)",
        },
        scale: {
            transform: "translateY(-2px) scale(1.05)",
        },
    };

    const byVariant =
        variant === "outlined"
            ? {
                color: resolvedText || resolvedBase,
                borderColor: resolvedBase,
                bgcolor: "transparent",
                transition: "all 0.25s ease-in-out",
                "&:hover": {
                    color: resolvedHoverText || resolvedHover,
                    borderColor: resolvedHover,
                    bgcolor: hexToRgba(resolvedHover, 0.08),
                    ...hoverEffects[hoverEffect],
                },
            }
            : variant === "soft"
                ? {
                    color: resolvedText || resolveColor("inverse"),
                    bgcolor: hexToRgba(resolvedBase, 0.85),
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                        color: resolvedHoverText || resolveColor("inverse"),
                        bgcolor: hexToRgba(resolvedHover, 1),
                        ...hoverEffects[hoverEffect],
                    },
                }
                : variant === "plain"
                    ? {
                        color: resolvedText || resolvedBase,
                        bgcolor: "transparent",
                        transition: "all 0.25s ease-in-out",
                        "&:hover": {
                            color: resolvedHoverText || resolvedHover,
                            bgcolor: hexToRgba(resolvedHover, 0.12),
                            ...hoverEffects[hoverEffect],
                        },
                    }
                    : {
                        // solid
                        color: resolvedText || resolveColor("inverse"),
                        bgcolor: resolvedBase,
                        transition: "all 0.25s ease-in-out",
                        "&:hover": {
                            color: resolvedHoverText || resolveColor("inverse"),
                            bgcolor: resolvedHover,
                            ...hoverEffects[hoverEffect],
                        },
                    };

    return (
        <Button
            variant={variant}
            size={size}
            type={type}
            disabled={disabled}
            loading={loading}
            fullWidth={isCircle ? false : fullWidth}
            startDecorator={startIcon}
            endDecorator={endIcon}
            onClick={onClick}
            sx={{
                borderRadius: isCircle ? "50%" : shape === "rounded" ? "30px" : "8px",
                ...(isCircle && {
                    width: side,
                    height: side,
                    minWidth: side,
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    flex: "0 0 auto",
                    alignSelf: "center",
                    "--Button-gap": "0px",
                }),
                fontFamily: "var(--font-family, 'Roboto', sans-serif)",
                ...byVariant,
                ...sx,
            }}
        >
            {isCircle ? null : (children ?? text)}
        </Button>
    );
};

export default ButtonUI;
