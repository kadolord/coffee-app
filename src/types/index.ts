// In a new file, e.g., navigation/types.ts or directly above the AppNavigator in your AppNavigator file
import { RouteProp } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/core";

export type StackProps = {
  navigation: any;
};

// Define the type for the context value
export type ThemeContextType = {
  toggleTheme: () => void;

  theme: {
    textColor: string;
    backgroundColor: string;
    isDarkMode: boolean;
  };
};
export interface CartItem extends Product {
  quantity: number;
  size: "small" | "medium" | "large";
  selectedPrice: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  ingredients?: string[];
  availability: string;

  image: string;
  priceSmall: number;
  price: {
    small: number;
    medium: number;
    large: number;
  };
  stock: number;
  rating: number;
}

export type sizeType = "small" | "medium" | "large";

export interface PriceFilterType {
  handleSortChange: (sort: string) => void;
}

// Define the param types for each screen in your stack
export type RootStackParamList = {
  Main: undefined; // This is the stack containing your HomeTabs (Home, Cart)
  ProductDetails: { product: Product }; // This screen needs the product param
  Cart: undefined; // This is the stack containing your Cart items
};

export type RootTabParamList = {
  Home: undefined;
  // Other tabs...
};

// Generalized type for all screen props
export type ScreenProps<RouteName extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, RouteName>;
  // You can add additional props here if needed, like navigation
};
