import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import cartoeStyle from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Cartoes() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Usercards");
  };
  return (
    <View style={cartoeStyle.main}>
      <TouchableOpacity onPress={handlePress}>
        <MaterialCommunityIcons
          style={cartoeStyle.phone}
          name="cards-outline"
          size={30}
          color="black"
        />
        <Text style={cartoeStyle.Text}>Meus cartões</Text>
      </TouchableOpacity>
    </View>
  );
}
