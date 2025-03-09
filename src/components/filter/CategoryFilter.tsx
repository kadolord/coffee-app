import React, { useState, useRef, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";
import { FONTS } from "@/src/constants/fonts"; // Assuming this contains your font constants
import useCategoryFilter from "@/src/hooks/useCategoryFilter";

// Sample categories array
const categories = [
  "All",
  "Coffee Beans",
  "Cappuccino",
  "Espresso",
  "Cold Brew",
  "Iced",
];
type CategoryFilterType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterType) => {
  // State to track the selected category

  // Reference for the ScrollView to control scroll position
  const scrollViewRef = useRef<ScrollView>(null);
  // Get screen width
  const { width: screenWidth } = Dimensions.get("window");

  // Category item width (change based on your design)
  const categoryWidth = 120;

  // Function to handle category selection and scroll to the selected category
  const handleCategorySelect = (category: string, index: number) => {
    setSelectedCategory(category);

    // Calculate the offset to center the category
    const offset = index * categoryWidth - screenWidth / 2 + categoryWidth / 2;

    // Scroll to the calculated position
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: offset,
        animated: true,
      });
    }
  };

  const renderCategory = useCallback(
    (category: string, index: number) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.categoryItem}
          onPress={() => handleCategorySelect(category, index)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category && styles.activeText,
            ]}
          >
            {category}
          </Text>
          {selectedCategory === category && (
            <View style={styles.activeCircle} />
          )}
        </TouchableOpacity>
      );
    },
    [selectedCategory]
  );
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      ref={scrollViewRef}
    >
      {categories.map(renderCategory)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 3,
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Needed to position the circle inside the item
  },
  categoryText: {
    color: "#52555A", // Default text color
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
  },
  activeText: {
    color: "#D17842", // Text color for the active category
  },
  activeCircle: {
    position: "absolute", // Position the circle inside the item
    bottom: -3, // Position it slightly below the text
    width: 8, // Circle diameter
    height: 8, // Circle diameter
    borderRadius: 50, // Makes the circle round
    backgroundColor: "#f97316", // Orange background for the circle
    alignItems: "center",
  },
});

export default CategoryFilter;
