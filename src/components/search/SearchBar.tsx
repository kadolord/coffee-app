import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      {/* Search Icon */}
      <Icon name="search" size={20} color="#888" style={styles.icon} />

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Find your coffee..."
        placeholderTextColor="#888"
      />

      {/* Cart Icon */}
      <TouchableOpacity style={styles.cartButton}>
        <Icon name="shopping-cart" size={22} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252A32",
    borderRadius: 12, // Rounded edges
    paddingHorizontal: 12,
    height: 50,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: "#888",
  },
  cartButton: {
    padding: 8,
  },
});

export default SearchBar;
