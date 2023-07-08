import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeFormatter = new Intl.DateTimeFormat("es-ES", {
  timeStyle: "medium",
  timeZone: "GMT",
});

export const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});
