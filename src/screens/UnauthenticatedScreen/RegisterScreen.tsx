import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import GradientButton from "../../components/buttons/GradientButton"; // Reusable button component
import useLoginStyle from "@/src/styles/Login/loginStyle";
import { StackProps } from "@/src/types";

const RegisterScreen = ({ navigation }: StackProps) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const styles = useLoginStyle();

  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Registering:", { fullName, username, email, password, phone });
  };

  return (
    <LinearGradient
      colors={["#8989d7", "#5c5b6a", "#66717c"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="person"
            size={24}
            color="#FFF"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#AAA"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="person-outline"
            size={24}
            color="#FFF"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#AAA"
            value={username}
            onChangeText={setUsername}
          />
        </View>

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

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="phone"
            size={24}
            color="#FFF"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#AAA"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <GradientButton title="Sign Up" onPress={handleRegister} />

        <View style={styles.signUpContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerLink}>Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default RegisterScreen;
