import { IconType } from "react-icons";

export type Color = "primary" | "secondary" | "warning" | "success" | "info" | "danger";
export type Size = 'small' | 'medium' | 'large';
export type Shape = 'square' | 'circle';
export type Variant = "filled" | "outlined" | "text";

export interface FooterItem {
  id: number;
  label: string;
  url: string;
  icon?: string
}

export interface SubMenuItem {
  id: number;
  label: string;
  url?: string;
  icon?: string;
  className?: string;
  children?: SubMenuItem[]
}