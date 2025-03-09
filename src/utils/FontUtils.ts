// src/utils/fonts.js
import { useFonts } from "expo-font";
import { FONTS } from "../constants/fonts";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    [FONTS.REGULAR]: require("../../assets/fonts/Poppins-Regular.ttf"),
    [FONTS.BOLD]: require("../../assets/fonts/Poppins-Bold.ttf"),
    [FONTS.ITALIC]: require("../../assets/fonts/Poppins-Italic.ttf"),
    [FONTS.LIGHT]: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  return fontsLoaded;
};
