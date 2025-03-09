import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Session } from "@supabase/supabase-js";
import { supabaseClient } from "../config/supabase";
import { useAtom } from "jotai";
import { sessionAtom } from "../store/atom";

const useSession = () => {
  const [session, setSession] = useAtom(sessionAtom);

  const handleLogout = async () => {
    supabaseClient.auth.signOut();
    await AsyncStorage.clear();
    setSession(null);

    // Redirect to login page or logout action here
  };

  return { session, handleLogout };
};

export default useSession;
