import { supabaseClient } from "../config/supabase";
import { Alert } from "react-native";

export const handleLogin = async (email: string, password: string) => {
  // Perform Supabase login using email and password
  try {
    const { error, data } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Login Failed", error.message);
      return { data: null, error };
    }
    return { data, error };
  } catch (error) {
    Alert.alert("Login Failed", "An error occurred while logging in.");
  }
};
