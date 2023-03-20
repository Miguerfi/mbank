import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import creditStyle from "./style";

export default function Credit({}) {
  return (
    <TouchableOpacity>
      <View style={creditStyle.container}>
        <Text style={creditStyle.textHeader}>Cartão de crédito</Text>
        <Text style={creditStyle.textFatura}>Fatura atual</Text>
        <Text style={creditStyle.textMoney}>R$ 49,58</Text>
      </View>
    </TouchableOpacity>
  );
}
