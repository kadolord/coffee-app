import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/AuthenticatedScreen/SettingsScreen";
import HomeScreen from "../screens/AuthenticatedScreen/HomeScreen";
import LoginScreen from "../screens/UnauthenticatedScreen/LoginScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/AuthenticatedScreen/ProfileScreen";
import { getIconName } from "../utils";
import { sessionAtom } from "../store/atom";
import { useAtom } from "jotai";
import RegisterScreen from "../screens/UnauthenticatedScreen/RegisterScreen";
import CartScreen from "../screens/AuthenticatedScreen/CartScreen";
import ProductDetailsScreen from "../screens/AuthenticatedScreen/ProductDetailsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// Bottom Tab Navigator for Home and Settings
const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const iconName = getIconName(route.name); // Use the helper function

        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#D17842", // Active tab color
      tabBarInactiveTintColor: "#AAA", // Inactive tab color
      tabBarStyle: {
        backgroundColor: "#0C0F14", // Tab bar background color
        borderTopWidth: 0, // Remove top border
        elevation: 0, // Remove shadow on Android
        justifyContent: "center", //
      },
      headerShown: false, // Hide the header
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Favorites" component={SettingsScreen} />
    <Tab.Screen name="Notifications" component={ProfileScreen} />
    <Tab.Screen name="User" component={CartScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const [session] = useAtom(sessionAtom);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen
          name="Main"
          component={HomeTabs}
          options={{ headerShown: false }} // Hide header for HomeTabs
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen} // Add the ProductDetailsScreen here
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen} // Add the ProductDetailsScreen here
          options={{ headerShown: false }}
        />
      </>
      {/* ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )} */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
