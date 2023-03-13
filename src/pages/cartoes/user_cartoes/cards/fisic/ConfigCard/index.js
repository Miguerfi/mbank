import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import configCard from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function ConfigCardFisic({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={configCard.main}>
      <View style={configCard.viewBox}>
        <Text style={configCard.headerText}>Compras por Aproximação</Text>
        <Text style={configCard.bodyText}>
          Desative para não permitir compras com contactless
        </Text>
        <Switch
          style={configCard.switchB}
          onValueChange={toggleSwitch}
          value={isEnabled}
          trackColor={{ false: "grey", true: "#e0bcdd" }}
          thumbColor={isEnabled ? "purple" : "#e9e9e9"}
        />
      </View>
      <View style={configCard.viewBox}>
        <Text style={configCard.headerTextWarning}>
          Cartão perdido ou danificado
        </Text>
        <TouchableOpacity>
          <AntDesign
            name="right"
            style={configCard.setaRight}
            size={26}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      <View style={configCard.viewBox}>
        <Text style={configCard.headerText}>Google Pay</Text>
        <TouchableOpacity>
          <AntDesign
            name="right"
            style={configCard.setaRight}
            size={26}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      <View style={configCard.viewBox}>
        <Text style={configCard.headerText}>Whatsapp Pay</Text>
        <TouchableOpacity>
          <AntDesign
            name="right"
            style={configCard.setaRight}
            size={26}
            color="grey"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
