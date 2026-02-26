import { IconType } from "react-icons";

export interface TranscriptItem {
  time: string;
  text: string;
}

export interface AvailableOn {
  id: number;
  link: string;
  label: string;
  icon?: IconType;
}