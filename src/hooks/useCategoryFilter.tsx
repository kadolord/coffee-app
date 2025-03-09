import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../api/graphql/queries";
import { Product } from "../types";

// Custom Hook to filter items by category
const useCategoryFilter = () => {
  // Fetch data using GraphQL
  const { loading, data, error } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-and-network",
  });

  // State for filtered products and selected category
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    if (loading) return; // Do nothing while data is loading

    if (error) {
      console.error("Error fetching products:", error);
      return; // Handle error
    }

    if (data) {
      // Filter the data based on the selected category
      if (selectedCategory === "All") {
        setFilteredData(data.getProducts); // Assuming `data.getProducts` is the list
      } else {
        const filtered = data.getProducts.filter(
          (item: Product) => item.category === selectedCategory
        );
        setFilteredData(filtered);
      }
    }
  }, [data, loading, error, selectedCategory]);

  return { filteredData, selectedCategory, setSelectedCategory };
};

export default useCategoryFilter;
