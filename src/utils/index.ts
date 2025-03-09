import { MaterialIcons } from "@expo/vector-icons";

export const getIconName = (
  routeName: string
): keyof typeof MaterialIcons.glyphMap => {
  switch (routeName) {
    case "Home":
      return "home";
    case "Settings":
      return "settings";
    case "Profile":
      return "person";
    case "Notifications":
      return "notifications";
    case "Cart":
      return "shopping-cart";
    case "User":
      return "person-2";
    case "Favorites":
      return "favorite";
    default:
      return "home"; // Default icon
  }
};
export const formattedRandomRatings = () => {
  const randomRatingCount = Math.floor(Math.random() * 1000) + 5000; // Random count between 5000 and 6000
  return { ratingCount: randomRatingCount.toLocaleString() };
};
