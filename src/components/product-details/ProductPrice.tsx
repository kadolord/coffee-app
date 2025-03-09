import { FONTS } from "@/src/constants/fonts";
import { useCart } from "@/src/hooks/useCart";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define props for flexibility
interface PriceProps {
  price?: { [key: string]: number }; // Product prices by size
  showTotal?: boolean; // Show total price instead of product price
}

const Price = ({ price, showTotal = false }: PriceProps) => {
  const { selectedSize, cart, getTotalPrice } = useCart();

  // Calculate total cart price
  const totalPrice = getTotalPrice();

  console.log(totalPrice);

  // Show total price if enabled, otherwise show product price
  const displayedPrice = showTotal
    ? totalPrice // Total Cart Price
    : selectedSize && price?.[selectedSize]
    ? price[selectedSize].toFixed(2) // Single Product Price
    : "0.00";

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
