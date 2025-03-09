import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppNavigator from "./navigation/AppNavigator";
import { Provider, createStore } from "jotai";
import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from "./api/client";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const store = createStore();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider>
        <ApolloProvider client={graphqlClient}>
          <StatusBar barStyle="light-content" />
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </ApolloProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF", // Safe area background set to white
  },
});
