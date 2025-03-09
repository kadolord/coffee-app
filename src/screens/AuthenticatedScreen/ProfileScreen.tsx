import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome"; // Import icon
import { useNavigation } from "@react-navigation/native"; // Optional, for navigation
import { LinearGradient } from "expo-linear-gradient";
import { StackProps } from "../../types";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import Avatar from "@/src/components/avatar/Avatar";
import { getProfile, updateProfile } from "@/src/services/profileService";
import useSession from "@/src/hooks/useSession";
import useProfile from "@/src/hooks/useProfile";
import { supabaseClient } from "@/src/config/supabase";
import { useAtom, useSetAtom } from "jotai";
import { sessionAtom } from "@/src/store/atom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }: StackProps) => {
  // Animated values for fade-in and slide-up
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(500)).current;
  const [session, setSession] = useAtom(sessionAtom);
  const { handleLogout } = useSession();

  const { profile, setProfile, loading, updateProfileData } = useProfile(
    session?.user?.id ?? ""
  );

  // Animation for fading and sliding in
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <ScrollView>
      <LinearGradient
        colors={["#6d66d5", "#fdfdff", "#c7c7db"]}
        style={styles.container}
      >
        {/* Profile Photo */}
        <View style={styles.profilePhotoContainer}>
          {/* <Icon name="user-circle" size={100} color="#fdfdff" /> */}
          <Avatar
            size={100}
            url={profile?.avatar_url}
            onUpload={(url: string) => {
              updateProfileData({
                username: profile?.username,
                website: profile?.website,
                full_name: profile?.full_name,
                avatar_url: url,
              });
            }}
          />
        </View>

        {/* Animated Details */}
        <Animated.View
          style={[
            styles.detailsContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          {/* First Section: Username, Phone, and Country */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Basic Information</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              defaultValue={profile.full_name}
              editable={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              defaultValue={profile.username}
              editable={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Website"
              defaultValue={profile?.website}
              editable={false}
            />
          </View>

          {/* Second Section: Username and Password */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              defaultValue="JohnDoe"
              editable={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              defaultValue="••••••••"
              editable={false}
            />
          </View>

          {/* Third Section: Social Accounts */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Social Accounts</Text>
            <View>
              <TouchableOpacity style={styles.socialIcon}>
                <Icon name="instagram" size={30} color="#E1306C" />
                <Text style={styles.socialText}>Instagram</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Icon name="facebook" size={30} color="#1877F2" />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Icon name="twitter" size={30} color="#1DA1F2" />
                <Text style={styles.socialText}>Twitter</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.logoutButton, { backgroundColor: "#6d66d5" }]}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  profilePhotoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circle shape for the profile photo
    borderWidth: 2,
    borderColor: "#007bff",
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#6d66d5",
    marginBottom: 15,
    opacity: 0.8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: "#f9f9f9",
  },
  socialIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  socialText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    marginBottom: 20,
  },
  editButton: {
    color: "#6d66d5",
    fontSize: 14,
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    opacity: 0.8,
  },
  logoutText: {
    color: "#fff",
    justifyContent: "center",
  },
});

export default ProfileScreen;
