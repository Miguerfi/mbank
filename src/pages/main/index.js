import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import styles from "./style";
import ContaInfos from "../conta";
import Operacoes from "../operacoes";
import Cartoes from "../cartoes";
import Anouncements from "../informations";
import Credit from "../credit";
import PaymentAssistent from "../paymentAssistent";
import { ScrollView } from "react-native-gesture-handler";
import LifeInsurance from "../lifeinsurence";

export default function MainScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <ContaInfos />
        <Operacoes />
        <Cartoes />
        <Anouncements />
        <Credit />
        <PaymentAssistent />
        <LifeInsurance />
      </View>
    </ScrollView>
  );
}
