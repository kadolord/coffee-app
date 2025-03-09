import React, { useCallback } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  DimensionValue,
} from "react-native";
import { debounce } from "lodash";
import { FONTS } from "@/src/constants/fonts";
import { Product } from "@/src/types";
import { useCart } from "@/src/hooks/useCart";

interface AddToCartButtonProps {
  product?: Product; // Make product optional for cart screen
  label?: string; // Custom button text (default: "Add to Cart")
  width?: DimensionValue | undefined; // Custom width (default: 65%)
  backgroundColor?: string; // Custom background color (default: orange)
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  label = "Add to Cart",
  width = "65%",
  backgroundColor = "#D17842",
}) => {
  const { addToCart } = useCart();

  // Style object
  const buttonStyle: ViewStyle = {
    width, // could be a string or number
    backgroundColor,
    ...styles.button,
  };

  // Debounced add to cart function
  const debouncedAddToCart = useCallback(
    debounce(() => {
      if (product) {
        addToCart(product, 1); // Add 1 unit of product
      }
    }, 500),
    [product, addToCart]
  );

  return (
    <TouchableOpacity style={buttonStyle} onPress={debouncedAddToCart}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: FONTS.BOLD,
    fontSize: 18,
    textAlign: "center",
  },
});

export default AddToCartButton;
