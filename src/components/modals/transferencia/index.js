import { View, Modal, TouchableOpacity, Text } from "react-native";
import React from "react";
import transFfocus from "./style";
import { Ionicons } from "@expo/vector-icons";
export default function TypeTransferencia({ closeModalSecondary }) {
  return (
    <Modal visible={true}>
      <View style={transFfocus.mainContainer}>
        <TouchableOpacity onPress={closeModalSecondary}>
          <Ionicons style={transFfocus.closebutton} name="close" size={30} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
