// styles.ts
import { StyleSheet } from "react-native";
import { FONTS } from "../constants/fonts";
const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0C0F14",
    },
    content: {
      width: "100%",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
    },
    sectionLabel: {
      fontSize: 15,
      color: "#FFF",
      marginLeft: 5,
      marginBottom: 5,
      fontFamily: FONTS.REGULAR,
    },

    //FOR FLOATING BACK ICON AND CART ICON
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      top: 40,
      left: 30,
      right: 30,
      zIndex: 10,
    },
    iconButton: {
      width: 35,
      height: 35,
      backgroundColor: "#21262E",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
export default useStyles;
