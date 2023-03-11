import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from './style'
import ContaInfos from "../conta";
import Operacoes from "../operacoes";
import Cartoes from "../cartoes";

export default function MainScreen({ navigation }) {
    return (
        <View >
            <ContaInfos />
            <Operacoes />
            <Cartoes/>
        </View>
    )
}
