import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // Custom hook for theme
import { StackProps } from "../../types";
import useSession from "@/src/hooks/useSession";
import SearchBar from "@/src/components/search/SearchBar";
import ProductList from "@/src/components/products/ProductList";
import PriceFilter from "@/src/components/filter/PriceFilter";
import usePriceFilter from "@/src/hooks/usePriceFilter";
import { FONTS } from "@/src/constants/fonts";
import { useFonts } from "expo-font";
import { useCustomFonts } from "@/src/utils/FontUtils";
import CategoryFilter from "@/src/components/filter/CategoryFilter";
import Navbar from "@/src/components/nav/Navbar";
import useCategoryFilter from "@/src/hooks/useCategoryFilter";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/src/api/graphql/queries";
const HomeScreen = ({ navigation }: StackProps) => {
  const { theme } = useTheme(); // Access theme
  const { selectedCategory, setSelectedCategory, filteredData } =
    useCategoryFilter();

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
      {/* Full-width search bar with margin */}
      <View style={styles.searchWrapper}>
        <Text style={styles.title}>
          <Text>Find the best {"\n"}</Text>
          <Text>coffee for you</Text>
        </Text>
        <SearchBar />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      {/* Main content */}
      <View>
        <ProductList products={filteredData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  title: {
    color: "#ffffff",
    fontFamily: FONTS.BOLD,
    fontSize: 27,
    marginBottom: 20,
  },
  navbarContainer: {
    backgroundColor: "#0C0F14",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchWrapper: {
    width: "100%",
    paddingHorizontal: 16, // Adds margin from screen edges
    marginBottom: 20,
  },
  content: {
    justifyContent: "center",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C0F14",
  },
});

export default HomeScreen;
