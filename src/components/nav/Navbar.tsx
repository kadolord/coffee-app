import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // For burger menu icon
import { FontAwesome } from "@expo/vector-icons"; // For profile icon
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/src/types";
import { StackNavigationProp } from "@react-navigation/stack";
import ShoppingCart from "../cart/ShoppingCart";

const Navbar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleMenuPress = () => {
    console.log("Burger menu pressed");
    // Add logic for burger menu
  };

  const handleCartPress = () => {
    console.log("Profile icon pressed");
    navigation.navigate("Cart");
    // Add logic for profile
  };

  return (
    <View style={styles.navbar}>
      {/* Burger Menu Icon on the Left */}
      <TouchableOpacity onPress={handleMenuPress} style={styles.iconContainer}>
        <MaterialIcons name="menu" size={30} color="#FFF" />
      </TouchableOpacity>

      {/* Profile Icon on the Right */}
      <ShoppingCart />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: "100%",
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40, // Icon width
    height: 40, // Icon height
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Arial", // Adjust font style as needed
  },
});

export default Navbar;
