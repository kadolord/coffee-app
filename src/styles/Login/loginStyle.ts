import { StyleSheet } from "react-native";

const useLoginStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    content: {
      width: "100%",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#FFF",
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: "#FFF",
      textAlign: "center",
      marginBottom: 40,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 25,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 50,
      color: "#FFF",
      fontSize: 16,
    },
    footerText: {
      color: "#FFF",
      textAlign: "center",
    },
    footerLink: {
      fontWeight: "bold",
      color: "#FFD700",
    },
    signUpContainer: {
      flexDirection: "row",
      justifyContent: "center",
      margin: 20,
    },
  });
};

export default useLoginStyle;
