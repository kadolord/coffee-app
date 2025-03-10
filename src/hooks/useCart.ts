import { useAtom } from "jotai";
import { cartAtom, selectedSizeAtom } from "../store/atom";
import { useState } from "react";
import { Product, CartItem } from "../types";

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [isCheckedOut, setIsCheckedout] = useState(false);
  const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom);
  // Ensure selectedSize is mapped to the correct price key
  const sizeKey = selectedSize
    ? (`price${
        selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)
      }` as keyof Product)
    : null;
  // Add or update item quantity with selected size and price
  const addToCart = (product: Product, quantity: number) => {
    // Get the price for the selected size
    const selectedPrice = product[sizeKey];

    // Check if the selected size exists in the product's price list
    if (!selectedPrice) {
      console.error("Selected size is not available.");
      return;
    }

    setCart((prevCart) => {
      // Check if the product with the selected size already exists in the cart
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingItem) {
        // If item exists, update the quantity for that specific size
        return prevCart.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item doesn't exist, add it to the cart as a new entry
        const newItem: CartItem = {
          ...product,
          id: product.id, // Product ID
          name: product.name, // Product Name
          size: selectedSize, // Selected Size (S, M, L, etc.)
          quantity, // Quantity of the product
          selectedPrice, // Price for the selected size
          image: product.image, // Product Image
        };

        // Return the updated cart with the new item
        return [...prevCart, newItem];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number, size: string) => {
    setCart(cart.filter((item) => item.id !== id || item.size !== size));
  };

  // Function to increase quantity
  const increaseQuantity = (id: number, size: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        // Check for both id and size
        item.id === id && item.size === size && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number, size: string) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            // Decrease quantity only for the item with matching id and size
            item.id === id && item.size === size
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total price
  const getTotalPrice = () => {
    // Ensure price and quantity are valid numbers before calculating
    const total = cart.reduce((total, item) => {
      const price = Number(item.selectedPrice);
      const quantity = Number(item.quantity);

      // Check if price or quantity is NaN
      if (isNaN(price) || isNaN(quantity)) return total;

      return total + price * quantity;
    }, 0);

    // Return formatted total price
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(total);
  };
  return {
    addToCart,
    cart,
    sizeKey,
    cartItemCount,
    selectedSize,
    setSelectedSize,
    isCheckedOut,
    setIsCheckedout,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  };
};
