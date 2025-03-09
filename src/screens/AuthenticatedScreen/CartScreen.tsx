import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CartItemComponent from "@/src/components/cart/CartItem"; // Import the CartItem component
import { useCart } from "@/src/hooks/useCart"; // Assuming you have useCart hook
import { CartItem as CartItemType } from "@/src/types";
import { FONTS } from "@/src/constants/fonts";
import BackButton from "@/src/components/buttons/BackButton";
import BottomActionBar from "@/src/components/cart/BottomActionBar";
import AddToCartButton from "@/src/components/cart/AddToCartButton";
import Price from "@/src/components/product-details/ProductPrice";

const CartScreen = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // Render each cart item using the CartItem component
  const renderCartItem = ({ item }: { item: CartItemType }) => (
    <CartItemComponent
      item={item}
      onRemove={removeFromCart}
      onIncreaseQuantity={increaseQuantity}
      onDecreaseQuantity={decreaseQuantity}
    />
  );

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Cart</Text>
        </View>

        {/* If there are no items in the cart */}
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => `${item.id}-${item.size}`} // Use both id and size as the unique key
            contentContainerStyle={styles.flatListContainer} // Optional: to add some padding or spacing
          />
        )}
      </View>
      {/* Bottom Action Bar */}
      <BottomActionBar>
        <Price showTotal={true} />
        <AddToCartButton label="Checkout" />
      </BottomActionBar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take the full height of the screen
    backgroundColor: "#0C0F14",
    padding: 15,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start", // BackButton is aligned to the left
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: "#FFF",
    fontFamily: FONTS.BOLD,
    marginBottom: 15,
    textAlign: "center",
    position: "absolute", // Title should be centered relative to the header
    left: "50%",
    transform: [{ translateX: -30 }], // This will adjust the title's centering
  },
  emptyText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  flatListContainer: {
    flexGrow: 1, // Ensures FlatList can take up remaining space
    marginBottom: 20, // Optional: To add some spacing at the bottom
  },
});

export default CartScreen;
