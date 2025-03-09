import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../../components/buttons/GradientButton";
import { MaterialIcons } from "@expo/vector-icons";
import { sessionAtom } from "@/src/store/atom";
import { useAtom } from "jotai";
import useLoginStyle from "@/src/styles/Login/loginStyle";
import { handleLogin } from "@/src/services/authServices";
import { StackProps } from "@/src/types";

const LoginScreen = ({ navigation }: StackProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = useLoginStyle();
  const [session, setSession] = useAtom(sessionAtom);

  const handleLoginClick = async () => {
    try {
      const response = await handleLogin(email, password);
      if (response?.data?.session) setSession(response?.data?.session);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToRegister = () => {};

  return (
    <LinearGradient
      colors={["#8989d7", "#5c5b6a", "#66717c"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="email"
            size={24}
            color="#FFF"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#AAA"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="lock"
            size={24}
            color="#FFF"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#AAA"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <GradientButton title="Login" onPress={handleLoginClick} />
        <View style={styles.signUpContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;
