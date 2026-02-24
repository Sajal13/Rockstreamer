"use client";

import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  Ref,
} from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Color, Variant, Size, Shape } from "@/types/common";

type Type = "button" | "submit" | "reset";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: Color | "white";
  variant?: Variant;
  size?: Size;
  type?: Type;
  className?: string;
  shape?: Shape;
  ref?: Ref<HTMLButtonElement>;
}

const Button = ({
  startIcon,
  endIcon,
  color = "primary",
  variant = "text",
  size = "medium",
  type = "button",
  shape,
  className,
  children,
  ref,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const baseClass = `flex items-center justify-center font-medium  
    focus:outline-none transition-all border duration-200 cursor-pointer text-nowrap`;

  const sizeClasses: Record<Size, string> = {
    small: "px-3 py-1.5 md:py-2.5 text-sm rounded-sm",
    medium: "px-4 py-2 md:py-3 text-base rounded-md",
    large: "px-5 py-3 md:py-4 text-lg rounded-lg",
  };

  const shapeClasses: Record<Shape, Record<Size, string>> = {
    square: {
      small: "p-2 text-sm rounded-sm",
      medium: "p-3 text-base rounded-md",
      large: "p-4 text-lg rounded-lg",
    },
    circle: {
      small: "min-w-9 min-h-9 text-sm rounded-full",
      medium: "min-w-11 min-h-11 text-base rounded-full",
      large: "min-w-12 min-h-12 text-lg rounded-full",
    },
  };

  const variantClasses: Record<Color | "white", Record<Variant, string>> = {
    primary: {
      filled:
        "bg-primary-200 text-primary-900 border border-primary-200 hover:bg-primary-400 hover:border-primary-400",
      outlined:
        "border border-primary-200 text-primary-900 hover:bg-primary-400 hover:border-primary-400",
      text: "border-0 bg-transparent text-primary-900 hover:bg-primary-400",
    },
    secondary: {
      filled:
        "bg-secondary-200 text-primary-900 border border-secondary-200 hover:bg-secondary-400 hover:border-secondary-400",
      outlined:
        "border border-secondary-200 text-primary-900 hover:bg-secondary-400 hover:border-secondary-400",
      text: "border-0 bg-transparent text-primary-900 hover:bg-secondary-400",
    },
    success: {
      filled:
        "bg-success-200 text-primary-900 border border-success-200 hover:bg-success-400 hover:border-success-400",
      outlined:
        "border-success-200 text-primary-900 hover:bg-success-400 hover:border-success-400",
      text: "border-0 bg-transparent text-primary-900 hover:bg-success-400",
    },
    warning: {
      filled:
        "bg-warning-200 text-primary-900 border border-warning-200 hover:bg-warning-400 hover:border-warning-400",
      outlined:
        "border border-warning-200 text-primary-900 hover:bg-warning-400 hover:border-warning-400",
      text: "border-0 bg-transparent text-primary-900 hover:bg-warning-400",
    },
    danger: {
      filled:
        "bg-danger-200 text-primary-900 border border-danger-200 hover:bg-danger-400 hover:border-danger-400",
      outlined:
        "border border-danger-200 text-primary-900 hover:bg-danger-400 hover:border-danger-400",
      text: "border-0 bg-transparent text-primary-900 hover:bg-danger-400",
    },
    info: {
      filled:
        "bg-info-200 text-primary-900 border border-info-200 hover:bg-info-400 hover:border-info-400",
      outlined:
        "border border-info-200 text-primary-900 hover:bg-info-400 hover:border-info-400",
      text: "border-0 bg-transparent text-primary-900 hover:bg-info-400",
    },
    white: {
      filled:
        "bg-white text-primary-900 border border-white hover:bg-white/80 hover:border-white/80 dark:text-primary-100",
      outlined:
        "border border-white text-white hover:bg-white hover:text-primary-900",
      text: "border-0 bg-transparent text-white hover:bg-white/10",
    },
  };

  const baseSizeClass = shape ? shapeClasses[shape][size] : sizeClasses[size];
  const buttonClass = twMerge(
    baseClass,
    baseSizeClass,
    variantClasses[color][variant],
    className,
  );
  return (
    <button type={type} className={buttonClass} ref={ref} {...rest}>
      {React.isValidElement(startIcon)
        ? React.cloneElement(startIcon as ReactElement<any>, {
            className: classNames(
              (startIcon as ReactElement<any>).props?.className,
              "me-2",
            ),
          })
        : startIcon}

      {children}

      {React.isValidElement(endIcon)
        ? React.cloneElement(endIcon as ReactElement<any>, {
            className: classNames(
              (endIcon as ReactElement<any>).props?.className,
              "ms-2",
            ),
          })
        : endIcon}
    </button>
  );
};

export default Button;
