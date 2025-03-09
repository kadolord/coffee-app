import React from "react";
import { View, StyleSheet } from "react-native";

const BottomActionBar = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Fix to the bottom
    bottom: 10,
    left: 0,
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0C0F14", // Dark background color
    width: "100%",
  },
});

export default BottomActionBar;
