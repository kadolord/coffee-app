import { useTheme } from "@/src/context/ThemeContext";

const { theme } = useTheme(); // Access theme and toggle function

export const BG_COLOR = theme.isDarkMode
  ? ["#0f0c29", "#302b63", "#24243e"]
  : ["#6d66d5", "#fdfdff", "#c7c7db"];
