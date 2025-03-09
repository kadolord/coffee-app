import useStyles from "@/src/styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackButton = () => {
  const globalStyles = useStyles();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={globalStyles.iconButton}
    >
      <MaterialIcons name="arrow-back" size={20} color="#FFF" />
    </TouchableOpacity>
  );
};

export default BackButton;
