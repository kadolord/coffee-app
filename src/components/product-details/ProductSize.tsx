import { FONTS } from "@/src/constants/fonts";
import { useCart } from "@/src/hooks/useCart";
import useStyles from "@/src/styles";
import { sizeLabels } from "@/src/utils/CartUtils";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ProductSize = () => {
  const globalStyles = useStyles();
  const { selectedSize, setSelectedSize } = useCart();

  return (
    <View style={styles.sizeContainer}>
      <Text style={globalStyles.sectionLabel}>Size</Text>
      <View style={styles.sizeSelectionContainer}>
        {(["small", "medium", "large"] as const).map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.selectedSizeButton,
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.sizeButtonText,
                selectedSize === size && styles.selectedSizeButtonText,
              ]}
            >
              {sizeLabels[size]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeContainer: { padding: 15 },
  sizeSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  sizeButton: {
    backgroundColor: "#141921",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    width: "30%",
  },
  selectedSizeButton: { borderColor: "#D17842", borderWidth: 2 },
  sizeButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: FONTS.REGULAR,
    textAlign: "center",
  },
  selectedSizeButtonText: { color: "#FFF" },
});

export default ProductSize;
