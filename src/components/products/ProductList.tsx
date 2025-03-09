import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard"; // Assuming you import the ProductCard component
import { Product } from "@/src/types";
import { data } from "@/src/constants/data/products";
import useCategoryFilter from "@/src/hooks/useCategoryFilter";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/src/api/graphql/queries";

const ProductList = ({ products }: { products: Product[] }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard item={item} />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Displays two items per row
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // To give space between columns
    paddingHorizontal: 10,
    paddingBottom: 400,
  },
});

export default ProductList;
