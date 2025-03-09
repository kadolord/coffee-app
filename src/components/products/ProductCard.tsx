import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { Product, RootStackParamList } from "@/src/types"; // Assuming you have a Product type
import { StackNavigationProp } from "@react-navigation/stack"; // Import navigation prop type
import { FONTS } from "@/src/constants/fonts";

type ProductCardType = {
  item: Product;
};

type ProductCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetails"
>;

const ProductCard = ({ item }: ProductCardType) => {
  const navigation = useNavigation<ProductCardNavigationProp>(); // Type the useNavigation hook

  const handlePress = () => {
    navigation.navigate("ProductDetails", { product: item }); // Navigate to ProductDetailsScreen and pass the product
  };

  // Get screen width to calculate the dynamic width of the card
  const { width: screenWidth } = Dimensions.get("window");

  return (
    <TouchableOpacity
      style={[styles.card, { width: screenWidth / 2 - 20 }]} // Half width for two items in a row with padding space
      activeOpacity={0.9}
      onPress={handlePress}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.ratingBackground}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={12} color="#f97316" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text>
            <Text style={styles.currency}>PHP </Text>
            <Text style={styles.price}>{item.priceSmall}</Text>
          </Text>
          <View style={styles.plusIconContainer}>
            <MaterialIcons name="add" size={20} color="#FFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#252A32",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
    padding: 12,
    marginHorizontal: "2%", // Add some space between items
  },
  imageWrapper: {
    position: "relative", // This allows us to position the rating absolutely within the image container
    overflow: "hidden", // Ensure content doesn't spill over the image border
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 120, // Set fixed height for images
    resizeMode: "cover",
    borderRadius: 20, // Match the image's border radius
  },
  ratingBackground: {
    position: "absolute", // Position the background behind the rating container
    top: 5, // Adjust top position
    right: 3, // Adjust right position
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly dark transparent background
    borderRadius: 20, // Match the image's border radius
    paddingHorizontal: 8, // Add some padding to the background for better appearance
    paddingVertical: 4, // Ensure the rating container has enough height
  },
  ratingContainer: {
    flexDirection: "row", // Align the icon and text horizontally
    alignItems: "center", // Vertically align the icon and text
  },
  ratingText: {
    color: "#FFFFFF", // Set the text color to white
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    marginLeft: 5, // Space between the star icon and the rating number
  },
  details: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: "#FFF",
  },
  currency: {
    color: "#f97316",
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  price: {
    color: "#FFF",
    paddingVertical: 4,
    fontSize: 15,
    fontFamily: FONTS.BOLD,
  },
  priceContainer: {
    flexDirection: "row", // Arrange price and plus icon in a row
    alignItems: "center", // Vertically align the items
    justifyContent: "space-between",
    width: "100%",
  },
  plusIconContainer: {
    backgroundColor: "#D17842", // Orange background
    padding: 5,
    borderRadius: 6, // Adjusted radius for the icon button
    marginLeft: 8, // Space between price and icon
  },
});

export default ProductCard;
