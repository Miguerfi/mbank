import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import styles from "./style";
import ContaInfos from "../conta";
import Operacoes from "../operacoes";
import Cartoes from "../cartoes";
import Anouncements from "../informations";
import Credit from "../credit";

export default function MainScreen({ navigation }) {
  return (
    <View>
      <ContaInfos />
      <Operacoes />
      <Cartoes />
      <Anouncements />
      <Credit />
    </View>
  );
}
