import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../services/profileService";

const useProfile = (userId: string) => {
  const [profile, setProfile] = useState({
    username: "",
    website: "",
    avatar_url: "",
    full_name: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId) return;
      setLoading(true);
      const profileData = await getProfile(userId);
      if (profileData) setProfile(profileData);
      setLoading(false);
    };

    fetchProfile();
  }, [userId]);

  const updateProfileData = async (updatedData: Partial<typeof profile>) => {
    setLoading(true);
    const success = await updateProfile({ userId, ...updatedData });
    if (success) setProfile((prev) => ({ ...prev, ...updatedData }));
    setLoading(false);
  };

  return { profile, setProfile, loading, updateProfileData };
};

export default useProfile;
