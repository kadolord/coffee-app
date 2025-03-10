import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackParamList, ScreenProps } from "@/src/types";
import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { FONTS } from "@/src/constants/fonts";
import Cart from "@/src/components/cart/ShoppingCart";
import { useCart } from "@/src/hooks/useCart";
import AddToCartButton from "@/src/components/cart/AddToCartButton";
import ProductPrice from "@/src/components/product-details/ProductPrice";
import ProductSize from "@/src/components/product-details/ProductSize";
import ProductImage from "@/src/components/product-details/ProductImage";
import BackButton from "@/src/components/buttons/BackButton";
import BottomActionBar from "@/src/components/cart/BottomActionBar";

const ProductDetailsScreen = ({ route }: ScreenProps<"ProductDetails">) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { cartItemCount, addToCart } = useCart();

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Back Button and Heart Icon */}
        <View style={styles.header}>
          <BackButton />
          <Cart />
        </View>

        {/* Product Image */}
        <ProductImage {...product} />

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionLabel}>Description</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
        </View>

        {/* Size Selection */}
        <ProductSize />

        {/* Price & Add to Cart */}
      </ScrollView>
      <BottomActionBar>
        <ProductPrice product={product} />
        <AddToCartButton product={product} />
      </BottomActionBar>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#0C0F14", paddingBottom: 90 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 40,
    left: 25,
    right: 25,
    zIndex: 10,
  },
  iconButton: {
    width: 35,
    height: 35,
    backgroundColor: "#21262E",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionLabel: {
    fontSize: 15,
    color: "#FFF",
    marginLeft: 5,
    marginBottom: 5,
    fontFamily: FONTS.REGULAR,
  },

  descriptionContainer: { padding: 15 },
  productDescription: {
    fontSize: 15,
    color: "#FFF",
    marginLeft: 5,
    fontFamily: FONTS.REGULAR,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 25,
  },
  priceLabel: {
    fontSize: 11,
    color: "#FFF",
    fontFamily: FONTS.REGULAR,
    textAlign: "center",
    top: 8,
  },
});

export default ProductDetailsScreen;
