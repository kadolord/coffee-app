import React, { useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@/src/hooks/useCart";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, RootTabParamList } from "@/src/types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Cart">;
const ShoppingCart = () => {
  const { cartItemCount } = useCart();
  const navigation = useNavigation<NavigationProp>();
  const [scale] = useState(new Animated.Value(0)); // Scale for animation
  const cartIconRef = useRef<View>(null); // Cart icon reference

  const handleGoToCart = () => {
    // Navigate to the Cart screen inside HomeTabs
    navigation.navigate("Cart");
  };

  useEffect(() => {
    if (cartItemCount > 0) {
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }).start();
    } else {
      scale.setValue(0); // Reset scale when there are no items in the cart
    }
  }, [cartItemCount, scale]);

  return (
    <View>
      <TouchableOpacity
        ref={cartIconRef} // Ref for cart icon
        onPress={handleGoToCart}
        style={styles.iconButton}
      >
        <FontAwesome name="shopping-cart" size={20} color="#FFF" />
        {cartItemCount > 0 && (
          <Animated.View
            style={[
              styles.badge,
              {
                transform: [{ scale }],
              },
            ]}
          >
            <Text style={styles.badgeText}>{cartItemCount}</Text>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 35,
    height: 35,
    backgroundColor: "#21262E",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ShoppingCart;
