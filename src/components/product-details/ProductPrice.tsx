import { FONTS } from "@/src/constants/fonts";
import { useCart } from "@/src/hooks/useCart";
import { Product } from "@/src/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define props for flexibility
interface PriceProps {
  showTotal?: boolean; // Show total price instead of product price
  product?: Product;
}

const Price = ({ product, showTotal = false }: PriceProps) => {
  const { selectedSize, cart, getTotalPrice, sizeKey } = useCart();

  // Calculate total cart price
  const totalPrice = getTotalPrice();

  const displayedPrice = showTotal
    ? totalPrice // Show total cart price
    : sizeKey && product && sizeKey in product // Ensure key exists
    ? (product[sizeKey] as number).toFixed(2) // Convert to two decimal places
    : "0.00"; // Default if no price is found

  return (
    <View>
      <Text style={styles.priceLabel}>
        {showTotal ? "Total Price" : "Price"}
      </Text>
      <Text>
        <Text style={styles.currency}>$</Text>
        <Text style={styles.productPrice}>{displayedPrice}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceLabel: {
    fontSize: 11,
    color: "#FFF",
    fontFamily: FONTS.REGULAR,
    textAlign: "center",
    top: 8,
  },
  productPrice: { fontSize: 20, color: "#EEE", fontFamily: FONTS.BOLD },
  currency: { fontSize: 14, color: "#D17842", fontFamily: FONTS.REGULAR },
});

export default Price;
