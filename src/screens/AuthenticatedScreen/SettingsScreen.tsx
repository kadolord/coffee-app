import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // Custom hook for theme
import BouncyButton from "../../components/buttons/BouncyButton"; // Reusable button component
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StackProps } from "../../types";
import useStyles from "../../styles";
const SettingsScreen = ({ navigation }: StackProps) => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function
  const styles = useStyles();
  return (
    <LinearGradient
      colors={
        theme.isDarkMode
          ? ["#0f0c29", "#302b63", "#24243e"]
          : ["#6d66d5", "#fdfdff", "#c7c7db"]
      }
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.textColor }]}>
          Settings Screen
        </Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>
          Welcome to your settings!
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SettingsScreen;
