import { FONTS } from "@/src/constants/fonts";
import { useCart } from "@/src/hooks/useCart";
import { Product } from "@/src/types";
import { formattedRandomRatings } from "@/src/utils";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

const ProductImage = (product: Product) => {
  const { selectedSize } = useCart();

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.productNameOverlay}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={15} color="#f97316" />
          <Text style={styles.productRating}>{product.rating}</Text>
          <Text style={styles.productRatingCount}>
            ({formattedRandomRatings().ratingCount})
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: screenHeight * 0.5,
    marginBottom: 10,
  },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  productNameOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 120,
  },
  productName: { fontSize: 22, fontFamily: FONTS.BOLD, color: "#FFF" },
  productRating: {
    fontSize: 15,
    color: "#FFF",
    marginLeft: 5,
    fontFamily: FONTS.REGULAR,
  },
  productRatingCount: {
    color: "#AEAEAE",
    fontFamily: FONTS.REGULAR,
    marginLeft: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default ProductImage;
