import { Alert } from "react-native";
import { supabaseClient } from "../config/supabase";

export const getProfile = async (userId: string) => {
  try {
    if (!userId) throw new Error("No user on the session!");

    const { data, error, status } = await supabaseClient
      .from("profiles")
      .select("username, website, avatar_url, full_name")
      .eq("id", userId)
      .single();

    console.log({ data });

    if (error && status !== 406) {
      throw error;
    }

    return data; // Return fetched profile data
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Error", error.message);
    }
    return null;
  }
};

export const updateProfile = async ({
  userId,
  username,
  website,
  avatar_url,
}: {
  userId: string;
  username?: string;
  website?: string;
  avatar_url?: string;
}) => {
  try {
    if (!userId) throw new Error("No user on the session!");

    const updates = {
      id: userId,
      username,
      website,
      avatar_url,
      updated_at: new Date(),
    };

    const { error } = await supabaseClient.from("profiles").upsert(updates);

    if (error) {
      throw error;
    }

    return true; // Return success
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Error", error.message);
    }
    return false;
  }
};
