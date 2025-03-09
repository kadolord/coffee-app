import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS } from "@/src/constants/fonts"; // Assuming you're using a custom font for text styling
import { CartItem as CartItemType } from "@/src/types";
import { sizeLabels } from "@/src/utils/CartUtils";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Import Material Icons for trash
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  withDelay,
} from "react-native-reanimated"; // For animation

// Type for the Cart Item Props
type CartItemProps = {
  item: CartItemType;
  onRemove: (id: number, size: string) => void; // Function to handle item removal from cart
  onIncreaseQuantity: (id: number, size: string) => void; // Function to handle quantity increase
  onDecreaseQuantity: (id: number, size: string) => void; // Function to handle quantity decrease
};

const CartItem = ({
  item,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: CartItemProps) => {
  const [removeAnimation, setRemoveAnimation] = useState(false); // State to trigger the animation
  const translateX = useSharedValue(0); // Initialize the translation value for the item
  const opacity = useSharedValue(1); // Initialize the opacity value for the item

  // Filter allowed sizes to be only "S", "M", or "L"
  const size = sizeLabels[item.size];

  // Trigger animation and then remove the item
  const handleRemove = () => {
    setRemoveAnimation(true);
    translateX.value = withTiming(-200, {
      duration: 300,
      easing: Easing.ease,
    }); // Slide the item out
    opacity.value = withTiming(0, {
      duration: 300,
      easing: Easing.ease,
    }); // Fade out

    // After animation completes, trigger the removal
    setTimeout(() => {
      onRemove(item.id, item.size); // Remove the item after animation
    }, 300); // Wait for the animation to finish before removing
  };

  return (
    <Animated.View
      style={[
        styles.cartItemContainer,
        {
          opacity: opacity.value, // Bind the opacity to the animated value
          transform: [{ translateX: translateX.value }], // Bind the translation to the animated value
        },
      ]}
    >
      {/* Product Image */}
      <Image source={{ uri: item.image }} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        {/* Product Name */}
        <Text style={styles.productName}>{item.name}</Text>

        {/* Product Size and Price */}
        <View style={styles.sizePriceContainer}>
          {size && <Text style={styles.productSize}>{size}</Text>}
          {item.selectedPrice && (
            <Text>
              <Text style={styles.dollarSign}>$</Text>
              <Text style={styles.productPrice}>
                {item.selectedPrice.toFixed(2)}
              </Text>
            </Text>
          )}
        </View>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => onDecreaseQuantity(item.id, item.size)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => onIncreaseQuantity(item.id, item.size)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Remove Item Button (Trash Icon) */}
      <TouchableOpacity
        onPress={handleRemove} // Trigger the animation and remove action
        style={styles.removeButton}
      >
        <MaterialIcons name="delete" size={24} color="#D17842" />
        {/* Material delete icon */}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#1E2227",
    borderRadius: 20,
    marginBottom: 10,
    alignItems: "center",
    position: "relative", // This allows positioning the remove button absolutely
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 30,
  },
  detailsContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: "#FFF",
  },
  sizePriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between", // Make sure size and price are spaced out
    width: "50%", // Adjust width to fit within container
  },
  productSize: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: "#FFF", // White text for the size
    backgroundColor: "#21262E", // Dark background
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    textAlign: "center", // Center size text
    width: "70%",
  },
  dollarSign: {
    fontSize: 18, // Smaller size for the dollar sign
    color: "#D17842", // Orange dollar sign
  },
  productPrice: {
    fontSize: 18,
    fontFamily: FONTS.BOLD,
    color: "#FFF", // White price text
    marginLeft: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "flex-start", // Align to the left of the container
    width: "35%", // Adjust the width for the quantity section
  },
  quantityButton: {
    backgroundColor: "#D17842",
    paddingTop: 2, // Remove padding for exact button size
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: 33,
    width: 33,
  },
  quantityButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    textAlign: "center", // Horizontally center the text
    alignSelf: "center", // Ensure it is centered in the button
    lineHeight: 33, // Center vertically
  },
  quantityText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    width: "100%",
    textAlign: "center",
    borderColor: "#D17842",
    borderRadius: 10,
    borderWidth: 1,
    padding: 3,
  },
  removeButton: {
    position: "absolute", // Absolute positioning for top-right
    top: 10, // Position it towards the top
    right: 10, // Position it towards the right
    padding: 5, // Padding for icon size
  },
});

export default CartItem;
