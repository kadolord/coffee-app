import { PriceFilterType } from "@/src/types";
import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const PriceFilter = ({ handleSortChange }: PriceFilterType) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("default");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    handleSortChange(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort by Price</Text>

      {/* Selected Option Display */}
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectedValue}>
          {selectedValue === "default"
            ? "Select an Option"
            : selectedValue === "lowToHigh"
            ? "Price: Low to High"
            : "Price: High to Low"}
        </Text>
      </TouchableOpacity>

      {/* Modal for dropdown */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleSelect("default")}
            >
              <Text style={styles.optionText}>Default</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleSelect("lowToHigh")}
            >
              <Text style={styles.optionText}>Price: Low to High</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleSelect("highToLow")}
            >
              <Text style={styles.optionText}>Price: High to Low</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4A4A",
    marginBottom: 8,
  },
  pickerButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FFA500", // Orange color
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedValue: {
    fontSize: 16,
    color: "#FFA500", // Orange text
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "80%",
    padding: 20,
    alignItems: "center",
  },
  option: {
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default PriceFilter;
